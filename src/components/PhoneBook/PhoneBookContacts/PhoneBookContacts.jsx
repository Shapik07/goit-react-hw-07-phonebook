import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { selectContactsFilter } from 'components/redux/selectors';
import {
  ContactList,
  ContactItem,
  ContactItemInfo,
  RemoveButton,
} from './PhoneBookContacts.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  return (
    <ContactList className="contact-list">
      {contacts.map(({ name, number, id }) => (
        <ContactItem className="contact" key={id}>
          <ContactItemInfo>
            {name}: {number}
          </ContactItemInfo>
          <RemoveButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </RemoveButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
