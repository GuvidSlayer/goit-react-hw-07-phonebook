import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../contactsSlice.js';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-all">
      <label>
        NAME
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-style"
        />
      </label>

      <label>
        NUMBER
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className="form-style"
        />
      </label>

      <button type="submit">ADD NEW CONTACT</button>
    </form>
  );
};

export default ContactForm;
