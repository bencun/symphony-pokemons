import Head from 'next/head';
import React from 'react';

export const RootLayout: React.FC = ({children}) => {
  return (
    <>
    <Head>
      <meta name="description" content="My Pokemons Page!"></meta>
      <title>Pokemons!</title>
    </Head>
    {children}
    </>
  );
};
