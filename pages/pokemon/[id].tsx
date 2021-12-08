import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Pokemon: NextPage = (props) => {

  const router = useRouter();
  const {id} = router.query as {id: string};
  return (
    <div>
      Pokemon! 
    </div>
  );
};

export default Pokemon;
