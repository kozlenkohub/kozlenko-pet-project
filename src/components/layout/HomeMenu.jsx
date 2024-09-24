import Image from 'next/image';
import React from 'react';
import MenuItem from '../menu/MenuItem';
import HeaderSections from './HeaderSections';

const HomeMenu = () => {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="h-48 absolute w-48 -top-[178px]  -right-12">
          <Image src="/sallad2.png" alt="para" layout={'fill'} objectFit={'contain'} />
        </div>
      </div>
      <div>
        <div className="h-48 absolute w-48 top-[111px] -left-12">
          <Image src="/sallad1.png" alt="para" layout={'fill'} objectFit={'contain'} />
        </div>
      </div>
      <HeaderSections subHeader="Check Out" mainHeader="Our Menu" />

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />

        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
