'use client';

import { IoSunnySharp } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [rotate, setRotate] = useState(false); // Thêm state này để theo dõi hiệu ứng xoay
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleClick = (theme: string) => {
    setRotate(true); // Kích hoạt xoay
    setTimeout(() => {
      setTheme(theme);
      setRotate(false); // Dừng xoay sau khi hoàn thành
    }, 100); // Thời gian hoàn thành hiệu ứng xoay
  };

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,..."
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
        className="animate-pulse"
      />
    );

  const iconClassName = `cursor-pointer text-2xl transition-transform duration-300 ease-in-out ${
    rotate ? 'rotate-180' : 'rotate-0'
  }`;

  return (
    <div>
      {resolvedTheme === 'dark' ? (
        <IoSunnySharp
          className={`${iconClassName} text-yellow-500 font-bold text-3xl`}
          onClick={() => handleClick('light')}
        />
      ) : (
        <MdDarkMode
          className={`${iconClassName} text-black font-bold text-3xl`}
          onClick={() => handleClick('dark')}
        />
      )}
    </div>
  );
}
