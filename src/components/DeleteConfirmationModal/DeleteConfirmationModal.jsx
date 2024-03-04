import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/operations';
import { closeDeleteConfirmation } from '../../redux/contacts/deleteConfirmationSlice';
import { selectDeleteConfirmation } from '../../redux/contacts/selectors';
import css from './DeleteConfirmationModal.module.css';

export default function DeleteConfirmationModal() {
  const dispatch = useDispatch();
  const deleteModal = useSelector(selectDeleteConfirmation);

  const closeDeleteConfirmationHandler = () => {
    dispatch(closeDeleteConfirmation());
  };

  const confirmDeleteHandler = () => {
    try {
      dispatch(deleteContact(deleteModal.contactId));
      dispatch(closeDeleteConfirmation());
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Error deleting contact. Please try again.');
    }
  };

  return (
    <Modal
      isOpen={deleteModal.isOpen}
      onRequestClose={closeDeleteConfirmationHandler}
      className={css.modal}
    >
      <p className={css.text}>Are you sure you want to delete this contact?</p>
      <div className={css.buttons}>
        <button className={css.button} onClick={confirmDeleteHandler}>
          Delete
        </button>
        <button className={css.button} onClick={closeDeleteConfirmationHandler}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
