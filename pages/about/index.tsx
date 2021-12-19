import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import PikachuImage from '../../public/images/pikachu.png';

const AboutPage: NextPage = () => {
  return (
    <div
      className="padded-container"
      style={{ margin: 'auto' }}
    >
      <h1>Welcome to the world of Pokemons!</h1>
      <p>
        This application is using the{' '}
        <a href="https://pokeapi.co">PokeAPI</a> to fetch
        the data on your favorite Pokemons!
      </p>
      <p>
        Furthermore, this page is completely statically
        rendered.
      </p>
      <Image src={PikachuImage} alt="Happy Pikachy"></Image>
      <p>
        Also, here is a statically rendered picture of a
        happy Pikachu optimized by Next.js that shows how
        Next prevents Cumulative Layout Shift on a slow
        connection.
      </p>
    </div>
  );
};

export default AboutPage;
