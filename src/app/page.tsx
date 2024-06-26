'use client';

import React from 'react';

import Link from 'next/link';
import { FlexContainer, Tile } from '@pantheon-systems/pds-toolkit-react';

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <FlexContainer spacing='narrow' className={'pds-spacing-pad-block-xl'}>
        <Tile
          headingLevel='h2'
          headingText='Docs'
          imageSrc='https://cdn.bfldr.com/MEM5087K/at/b93hmb966p2ncswnxqgsj35c/Web_Text.svg'
          linkContent={<Link href='/docs'>Learn more</Link>}
          summary='Documentation for PDS React Toolkit.'
        />

        <Tile
          headingLevel='h2'
          headingText='Learn'
          imageSrc='https://cdn.bfldr.com/MEM5087K/at/v3bs4994jjqbb9h4xkkw8k5/Online_Education.svg'
          linkContent={
            <a href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'>
              Let&apos;s go
            </a>
          }
          summary='Learn about Next.js in an interactive course with&nbsp;quizzes!'
        />

        <Tile
          headingLevel='h2'
          headingText='PDS Toolkit'
          imageSrc='https://cdn.bfldr.com/MEM5087K/at/btgr9h5q9v5wzwz9wkwt3qm/Tools.svg'
          linkContent={
            <a href='https://live-pds-toolkit-react.appa.pantheon.site/'>
              Go to the toolkit
            </a>
          }
          summary='Implement PDS components in your Next.js app.'
        />
      </FlexContainer>
    </>
  );
}
