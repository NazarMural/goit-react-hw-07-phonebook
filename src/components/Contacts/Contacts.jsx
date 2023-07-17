import React from 'react';
import { List, Item, ItemText, Button, Input, Title } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={changeFilter}
      />
      <List>
        {filter !== ''
          ? filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <ItemText>
                  {name}: {number}
                </ItemText>
                <Button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </Button>
              </Item>
            ))
          : contacts.map(({ id, name, number }) => (
              <Item key={id}>
                <ItemText>
                  {name}: {number}
                </ItemText>
                <Button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </Button>
              </Item>
            ))}
      </List>
    </>
  );
};

export default Contacts;
