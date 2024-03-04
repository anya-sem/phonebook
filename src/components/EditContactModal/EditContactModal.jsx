import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { selectEdit } from '../../redux/contacts/selectors';
import { closeEditModal } from '../../redux/contacts/editSlice';
import css from './EditContactModal.module.css';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required!'),
});

export default function EditContactModal() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const { isOpen, contactId, initialName, initialNumber } = useSelector(selectEdit);

  const handleSave = values => {
    try {
      dispatch(editContact({ contactId, newName: values.name, newNumber: values.number }));
      dispatch(closeEditModal());
      toast.success('Contact updated successfully!');
    } catch (error) {
      toast.error('Error updating contact. Please try again.');
    }
  };

  return (
    <Modal className={css.modal} isOpen={isOpen} onRequestClose={() => dispatch(closeEditModal())}>
      <h2 className={css.title}>Edit Contact</h2>
      <Formik
        initialValues={{ name: initialName, number: initialNumber }}
        onSubmit={handleSave}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <p className={css.label}>Name</p>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
          <p className={css.label}>Number</p>
          <Field className={css.field} type="tel" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
          <div className={css.buttons}>
            <button className={css.button} type="button" onClick={() => dispatch(closeEditModal())}>
              Cancel
            </button>
            <button className={css.button} type="submit">
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}
