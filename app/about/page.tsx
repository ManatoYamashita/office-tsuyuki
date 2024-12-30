import React from 'react';
import Date from '@/app/_components/Date';
import Btn from '@/app/_components/Btn'

const AboutPage = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>Welcome to our website. We are dedicated to providing the best service possible.</p>
      <Date date="2023-04-01" />
      <Btn label='topへ' url='/' />
    </>
  );
};

export default AboutPage;
