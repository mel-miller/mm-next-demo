'use client';

import '../../node_modules/@pantheon-systems/pds-toolkit-react/_dist/css/pds-core.css';

import { Navbar, NavMenu } from '@pantheon-systems/pds-toolkit-react';
import Link from 'next/link';

const mobileMenuBreakpoint = 900;

const mainNavigationLinks = [
  {
    linkContent: <Link href='/about'>About</Link>,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar
          logoDisplay='sub-brand'
          logoLink={<a href='https://pantheon.io' />}
          logoSubBrand={{
            link: <Link href='/' />,
            text: 'Next + PDS Demo',
          }}
        >
          <NavMenu
            slot='items-right'
            ariaLabel='Main Navigation'
            menuItems={mainNavigationLinks}
            mobileMenuMaxWidth={mobileMenuBreakpoint}
          />
          <div slot='items-right' className='pds-button-group'>
            <a className='pds-button pds-button--brand' href='https://dashboard.pantheon.io' target='_blank'>
              Log in
            </a>
          </div>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
