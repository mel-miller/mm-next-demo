'use client';

import React from 'react';

import {
  SidebarLayout,
  SideNav,
  TableOfContents,
} from '@pantheon-systems/pds-toolkit-react';

import { docsSampleText } from './docs-sample-text';
import { sideNavMenuItems } from '../../data/side-navigation.js';

export default function Documentation() {
  return (
    <>
      <SidebarLayout sidebarLocation='left'>
        <SideNav slot='sidebar' menuItems={sideNavMenuItems} />
        <SidebarLayout slot='content'>
          <h1>Documentation</h1>
          <article slot='content' id='pds-toc-source' className='docs-content'>
            {docsSampleText}
          </article>
          <TableOfContents
            slot='sidebar'
            headingText='Document contents'
            showHeading={true}
            appendIds={true}
          />
        </SidebarLayout>
      </SidebarLayout>
    </>
  );
}
