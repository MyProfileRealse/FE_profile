import React from 'react';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import screenUrl from '@/lib/screenUrl/screenUrl';
import { FaGithub } from 'react-icons/fa';
import { TbUniverse } from 'react-icons/tb';
import DropDownMenu from './DropDownMenu';

function Header() {
  return (
    <div className="w-full backdrop-blur-md bg-white bg-opacity-20 flex justify-center fixed top-0 left-0 right-0">
      <div className="flex md:justify-center py-4 items-center w-full justify-between px-6  ">
        <div className="me-14 flex items-center gap-3">
          <TbUniverse size={25} />
          <Link href={screenUrl.home} className="font-bold">
            Chau dev
          </Link>
        </div>
        <ul className="gap-5 me-20 hidden md:flex">
          <Link href={screenUrl.stories}>Stories</Link>
          <Link href={screenUrl.posts}>Posts</Link>
          <Link href={'/'} className="flex items-start gap-1">
            <FaGithub size={20} />
            <span> Source</span>
          </Link>
        </ul>
        <div className="flex items-center">
          <ThemeSwitch />
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
