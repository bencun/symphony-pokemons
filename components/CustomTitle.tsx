import Head from 'next/head';
import React from 'react';

interface ICustomTitleProps {
  title: string;
}

export const CustomTitle: React.FC<ICustomTitleProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);
