'use client';

import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import Button from '@mui/material/Button';
import Link from 'next/link';
import screenUrl from '@/lib/screenUrl/screenUrl';

function DropDownMenu() {
  const [dropMenu, setDropMenu] = useState(false);

  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <div className="relative">
      <Button
        variant="text"
        color="inherit"
        className="py-4 ml-3"
        onClick={handleDropMenu}
      >
        <CiMenuFries size={20} />
      </Button>
      <div
        className={`absolute dark:bg-spaceGray right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${
          dropMenu ? 'block' : 'hidden'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <Link
            href={screenUrl.stories}
            className="text-inherit block px-4 py-2 text-sm dark:focus:bg-transparentWhite focus:bg-iceBlue"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Stories
          </Link>
          <Link
            href={screenUrl.posts}
            className="text-inherit block px-4 py-2 text-sm dark:focus:bg-transparentWhite focus:bg-iceBlue"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DropDownMenu;
