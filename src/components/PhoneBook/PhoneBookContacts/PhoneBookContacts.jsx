import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'components/redux/selectors';
import { deleteContacts } from 'components/redux/contactsSlice';
import {
  ContactList,
  ContactItem,
  ContactItemInfo,
  RemoveButton,
} from './PhoneBookContacts.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = () => {
    const filterNormalize = filter.toLowerCase().trim();

    if (!filterNormalize) {
      return contacts;
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalize)
    );
  };

  const filteredContacts = visibleContacts();

  return (
    <ContactList className="contact-list">
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem className="contact" key={id}>
          <ContactItemInfo>
            {name}: {number}
          </ContactItemInfo>
          <RemoveButton
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </RemoveButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
