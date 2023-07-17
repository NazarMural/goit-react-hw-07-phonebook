import React from 'react';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <PhoneBookForm />
      </Section>

      <Section title="Contacts">
        <Contacts />
      </Section>
    </Container>
  );
}
