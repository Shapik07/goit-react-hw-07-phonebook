import ContactForm from 'components/PhoneBook/PhoneBookForm/PhoneBookForm';
import { Section } from 'components/PhoneBook/PhoneBookSection/PhoneBookSection';
import { ContactsList } from 'components/PhoneBook/PhoneBookContacts/PhoneBookContacts';
import { Filter } from 'components/PhoneBook/PhoneBookFilter/PhoneBookFilter';

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter></Filter>
        <ContactsList />
      </Section>
    </>
  );
}
