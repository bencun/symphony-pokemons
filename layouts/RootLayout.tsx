import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './RootLayout.module.scss';

export const RootLayout: React.FC = ({children}) => {
  return (
    <>
    <Head>
      <meta name="description" content="My Pokemons Page!"></meta>
      <title>Pokemons!</title>
    </Head>

    <div className={styles.root}>
      <h1><Link href="/"><a>Pokemons!</a></Link></h1>
    </div>
    {children}
    </>
  );
};
