'use client';

import React from 'react';
import Link from 'next/link';

import { Container, InputText, Navbar, NavMenu, SidebarLayout, SideNav  } from '@pantheon-systems/pds-toolkit-react';

import '../../node_modules/@pantheon-systems/pds-toolkit-react/_dist/css/pds-core.css';

const mobileMenuBreakpoint = 900;

const mainNavigationLinks = [
  {
    linkContent: <Link href='/about'>About</Link>,
  },
  {
    linkContent: <Link href='/docs'>Docs</Link>,
  },
];

const sideMenuItems = [
  { linkContent: <Link href='/about'>About</Link> },
  {
    linkContent: <Link href='/docs'>Docs</Link>,
    links: [
      { linkContent: <a href='#'>Item 2a</a> },
      { linkContent: <a href='#'>Item 2b</a> },
    ],
  },
  {
    linkContent: <a href='#'>Item 3</a>,
    links: [
      {
        linkContent: <a href='#'>Item 3a</a>,
        links: [
          { linkContent: <a href='#'>Item 3ai</a> },
          { linkContent: <a href='#'>Item 3aii</a> },
        ],
      },
      { linkContent: <a href='#'>Item 3b</a> },
      { linkContent: <a href='#'>Item 3c</a> },
    ],
  },
  { linkContent: <Link href='#'>Item 4</Link> },
];

export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body>
        <Navbar
          containerWidth='standard'
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
        <Container width='standard' className={'pds-spacing-pad-block-xl'}>
          <SidebarLayout sidebarLocation="left" sidebarMobileLocation="before">
            <SideNav slot="sidebar" menuItems={sideMenuItems} />
            <InputText slot="content" type="search" label="Search" placeholder="Search site" id="site-search" showLabel={false} hasSearchShortcut={true} />
            <div slot="content">{children}</div>
            </SidebarLayout>
          </Container>
      </body>
    </html>
  );
}
