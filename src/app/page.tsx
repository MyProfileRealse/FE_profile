'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';
import { FaHeart, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import Footer from './components/Footer';
import Banner3D from './components/Banner3D';

const works = [
  {
    id: '1',
    title: 'Develop backend hasura at Naikyo company, Da Nang',
    startTime: '2024-03-25T00:00:00.000+00:00',
    endTime: '2024-06-25T00:00:00.000+00:00',
  },
  {
    id: '2',
    title: 'Study at Dong A university, Da Nang',
    startTime: '2021-08-21T00:00:00.000+00:00',
    endTime: '2025-08-21T00:00:00.000+00:00',
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center w-full px-6 mt-28">
        <div className="max-w-[40rem] w-full">
          <Banner3D />
          <p
            className="w-full text-black p-4 rounded-2xl dark:text-white text-center -translate-y-1/2 bg-[#ffffff5c]"
            style={{ WebkitBackdropFilter: 'blur(10px)' }}
          >
            Hello, I am a web developer
          </p>

          <div className="mt-3">
            <div className="flex md:flex-row flex-col items-start justify-between">
              <div>
                <p className="font-bold text-2xl">Bui Van Chau (ColabBui)</p>
                <p>Digital Craftsman ( Developer )</p>
              </div>
              <div className="flex justify-center w-full md:w-auto">
                <Image
                  src="https://res.cloudinary.com/doguzyfn7/image/upload/v1714838302/lallal_q36k2h.png"
                  width={150}
                  height={150}
                  alt="avatar"
                />
              </div>
            </div>
            <span className="font-bold text-2xl border-b-4 border-black dark:border-white">
              Work
            </span>
            <p className="mt-4">
              I am a student majoring in Artificial Intelligence at Dong A
              University , Da Nang 🎓🎓. I am passionate about website
              programming and have a solid foundation in HTML, CSS, Typescript,
              Javascript
            </p>
          </div>

          <div className="mt-5 mb-5">
            <span className="font-bold text-2xl border-b-4 border-black dark:border-white">
              Bio
            </span>
            <div className="mb-3"></div>
            {works.map((work, index) => (
              <p key={index} className="">
                <span className="font-bold me-2">
                  {work.startTime.split('-')[0]}
                </span>
                {work.title}
              </p>
            ))}
          </div>

          <span className="font-bold inline-flex items-center text-2xl border-b-4 border-black dark:border-white">
            <span className="me-5">I</span>
            <FaHeart size={20} />
          </span>
          <p className="mt-3">
            Art, Music, Drawing, Playing Drums, Photography, Leica, Machine
            Learning
          </p>
          <span className="font-bold inline-flex items-center text-2xl border-b-4 mt-5 border-black dark:border-white">
            On the web
          </span>
          <div></div>
          <div className="inline-flex gap-4 mt-3 items-center hover:bg-[#81e6d91f] p-2 rounded-xl">
            <span className="text-[#2C7A7B] dark:text-[#81E6D9]">
              <FaGithub size={20} />
            </span>
            <Link
              href={'https://github.com/Chaudz'}
              className="font-medium text-[#2C7A7B] text-lg dark:text-[#81E6D9]"
            >
              @chaudz
            </Link>
          </div>
          <div></div>
          <div className="inline-flex gap-4 items-center hover:bg-[#81e6d91f] p-2 rounded-xl">
            <span className="text-[#2C7A7B] dark:text-[#81E6D9]">
              <FaInstagram size={20} />
            </span>
            <Link
              href={'https://www.instagram.com/chau_2024/'}
              className="font-medium text-[#2C7A7B] text-lg dark:text-[#81E6D9]"
            >
              @chau_2024
            </Link>
          </div>
          <div></div>
          <div className="inline-flex gap-4 items-center hover:bg-[#81e6d91f] p-2 rounded-xl">
            <span className="text-[#2C7A7B] dark:text-[#81E6D9]">
              <FaFacebook size={20} />
            </span>
            <Link
              href={'https://www.facebook.com/mi.bui.923'}
              className="font-medium text-[#2C7A7B] text-lg dark:text-[#81E6D9]"
            >
              @mi.bui.923
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
