'use client';
import React from 'react';

import { ComponentTesting } from './componentTesting';

import { Container } from '@pantheon-systems/pds-toolkit-react';

export default function About() {
  return (
    <main>
      <Container width='standard' className={'pds-spacing-pad-block-xl'}>
        <h1>About</h1>
        <p>This is a simple example of a React application using the PDS Toolkit.</p>
        <ComponentTesting />
      </Container>
    </main>
  );
}
