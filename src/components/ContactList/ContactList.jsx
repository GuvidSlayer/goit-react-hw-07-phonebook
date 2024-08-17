import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../contactsSlice.js';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className="contact-list">
        {filteredContacts.map(contact => (
          <li key={nanoid()} className="contact-list-item">
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
