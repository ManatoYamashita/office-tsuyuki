import React from 'react';
import Date from '@/app/_components/Date';
import Button from '@/app/_components/RealButton';

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website. We are dedicated to providing the best service possible.</p>
      <Date date="2023-04-01" />
      <Button />
    </div>
  );
};

export default AboutPage;
