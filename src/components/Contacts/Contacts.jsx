import React, { useEffect, useRef } from 'react';
import { List, Item, ItemText, Button, Input, Title } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const valueRef = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (valueRef.current) {
      valueRef.current = false;
      dispatch(fetchContacts());
    }
  }, [dispatch]);

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
