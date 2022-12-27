import ContactForm from 'components/PhoneBook/PhoneBookForm/PhoneBookForm';
import { Section } from 'components/PhoneBook/PhoneBookSection/PhoneBookSection';
import { ContactsList } from 'components/PhoneBook/PhoneBookContacts/PhoneBookContacts';
import { Filter } from 'components/PhoneBook/PhoneBookFilter/PhoneBookFilter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'components/redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'components/redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        {isLoading && !error && <b>...Loading</b>}
      </Section>
      <Section title="Contacts">
        <Filter></Filter>
        <ContactsList />
      </Section>
    </>
  );
}
