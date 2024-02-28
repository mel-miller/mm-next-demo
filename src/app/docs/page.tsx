'use client';

import React from 'react';

import { Container, SidebarLayout, TableOfContents } from '@pantheon-systems/pds-toolkit-react';

import { docsSampleText } from './docs-sample-text';

export default function Documentation() {
  return (
    <main>
      <Container width='standard' className={'pds-spacing-pad-block-xl'}>
        <h1>Documentation</h1>
        <SidebarLayout>
          <article slot='content' id='pds-toc-source' className='docs-content'>
            {docsSampleText}
          </article>
          <TableOfContents slot='sidebar' headingText='Document contents' showHeading={true} />
        </SidebarLayout>
      </Container>
    </main>
  );
}
