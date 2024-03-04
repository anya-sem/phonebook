import { IoIosPerson } from 'react-icons/io';
import { IoIosCall } from 'react-icons/io';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { openEditModal } from '../../redux/contacts/editSlice';
import { openDeleteConfirmation } from '../../redux/contacts/deleteConfirmationSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const openEditModalHandler = () => {
    dispatch(openEditModal({ contactId: id, initialName: name, initialNumber: number }));
  };
  const openDeleteConfirmationHandler = () => {
    dispatch(openDeleteConfirmation(id));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.infoWrap}>
        <IoIosPerson className={css.icon} />
        <p className={css.info}>{name}</p>
      </div>
      <div className={css.infoWrap}>
        <IoIosCall className={css.icon} />
        <p className={css.info}>{number}</p>
      </div>
      <div className={css.buttons}>
        <button className={css.button} onClick={openEditModalHandler}>
          Edit
        </button>
        <button className={css.button} onClick={openDeleteConfirmationHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
