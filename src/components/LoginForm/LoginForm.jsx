import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().min(7, 'Too short!').max(50, 'Too long!').required('Required!'),
});

export default function RegisterForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div>
      <h1 className={css.title}>Log into account</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        autoComplete="off"
      >
        <Form className={css.form}>
          <p className={css.label}>Email</p>
          <Field className={css.field} type="email" name="email" id={emailFieldId} />
          <ErrorMessage className={css.error} name="email" component="span" />
          <p className={css.label}>Password</p>
          <Field className={css.field} type="password" name="password" id={passwordFieldId} />
          <ErrorMessage className={css.error} name="password" component="span" />
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
