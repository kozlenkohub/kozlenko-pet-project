import React from 'react';
import HeaderSections from './HeaderSections';

const Contact = () => {
  return (
    <section className="text-center my-8">
      <HeaderSections subHeader="Get in touch" mainHeader="Contact Us" />
      <div className="mt-8">
        <a href="tel:+1234567890" className="text-4xl underline text-gray-500 ">
          +123-456-7890
        </a>
      </div>
    </section>
  );
};

export default Contact;
