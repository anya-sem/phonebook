import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(7, 'Too short!').max(50, 'Too long!').required('Required!'),
});

export default function RegisterForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div>
      <h1 className={css.title}>Create account</h1>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        autoComplete="off"
      >
        <Form className={css.form}>
          <p className={css.label}>Name</p>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />

          <p className={css.label}>Email</p>
          <Field className={css.field} type="email" name="email" id={emailFieldId} />
          <ErrorMessage className={css.error} name="email" component="span" />

          <p className={css.label}>Password</p>
          <Field className={css.field} type="password" name="password" id={passwordFieldId} />
          <ErrorMessage className={css.error} name="password" component="span" />

          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
