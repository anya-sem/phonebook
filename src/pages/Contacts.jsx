import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from '../components/Loader/Loader';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditContactModal from '../components/EditContactModal/EditContactModal';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal/DeleteConfirmationModal';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      <ContactList />
      <EditContactModal />
      <DeleteConfirmationModal />
    </div>
  );
}
