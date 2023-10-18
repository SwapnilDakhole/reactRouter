import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
  const { userid } = useParams(); // remainber here that userid is create using custom hook  ---- {}
  return <div className='bg-gray-700 text-white p-4'>User : {userid} </div>;
};

export default User;
