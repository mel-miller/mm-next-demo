'use client';

import React from 'react';

import { SidebarLayout, TableOfContents } from '@pantheon-systems/pds-toolkit-react';

import { docsSampleText } from './docs-sample-text';

export default function Documentation() {
  return (
    <main>
      <h1>Documentation</h1>
      <SidebarLayout>
        <article slot='content' id='pds-toc-source' className='docs-content'>
          {docsSampleText}
        </article>
        <TableOfContents slot='sidebar' headingText='Document contents' showHeading={true} appendIds={true} />
      </SidebarLayout>
    </main>
  );
}
