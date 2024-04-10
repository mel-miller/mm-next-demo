'use client';
import React, {useState} from 'react';

import { Button, MenuButton, SplitButton, Toaster } from '@pantheon-systems/pds-toolkit-react';

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
const toastDuration = 3000;

  const [toastContent, setToastContent] = useState(null);
  const successToast = (
    <Toaster
      toasts={[
        {
          id: '1',
          type: 'success',
          message: 'Success! Your changes have been saved.',
          autoDismiss: true,
          autoDismissTimeout: toastDuration,
          onDismiss: () => {
            console.log('success');
          },
        },
      ]}
    />
  );

  const fireToast = () => {
    setToastContent(successToast);

    setTimeout(() => {
      setToastContent(null);
    }, toastDuration + 1000);
  }


  return (
    <div>
      <h2>Testing these components</h2>
      <div className='pds-button-group'>
        <Button label='Toast' variant='primary' onClick={fireToast} />
        <SplitButton variant='secondary' actionItems={sampleActionItems} />
        <MenuButton label='Filter by category' variant='secondary' menuItems={categoryMenuItems} />
      </div>
      {toastContent}
    </div>
  );
};
