import React from 'react';
import HeaderSections from './HeaderSections';

const AboutUs = () => {
  return (
    <section className="text-center my-16">
      <HeaderSections subHeader="Our Story" mainHeader="About Us" />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat in, sapiente ducimus
          similique iusto numquam doloremque dolorum dolor impedit, neque asperiores aspernatur
          fugit minima. Porro perferendis labore laudantium quos corporis?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat in, sapiente ducimus
          similique iusto numquam doloremque dolorum dolor <impedit className=""></impedit>
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </section>
  );
};

export default AboutUs;
