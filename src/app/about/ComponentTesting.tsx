'use client';
import React from 'react';

import { MenuButton, SplitButton } from '@pantheon-systems/pds-toolkit-react';

const sampleActionItems = [
  {
    label: 'Alpha item',
    callback: () => window.alert('alpha clicked'),
  },
  {
    label: 'Beta item',
    callback: () => window.alert('beta clicked'),
  },
  {
    label: 'Gamma item',
    callback: () => window.alert('gamma clicked'),
  },
];

const categoryMenuItems = [
  {
    isLink: true,
    linkContent: (
      <a data-segment='testing' href={`/release-notes`}>
        All release notes
      </a>
    ),
  },
  {
    isSeparator: true,
  },
];

export const ComponentTesting = () => {
  return (
    <div>
      <h2>Testing these components</h2>
      <div className='pds-button-group'>
        <SplitButton variant='secondary' actionItems={sampleActionItems} />
        <MenuButton
          label='Filter by category'
          variant='secondary'
          menuItems={categoryMenuItems}
        />
      </div>
    </div>
  );
};
