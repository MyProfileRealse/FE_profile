'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { fetchProfiles } from '@/lib/features/profile/profileSlice';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';
import { fetchWorks } from '@/lib/features/work/workSlice';
import BeatLoader from 'react-spinners/BeatLoader';
import { FaHeart, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import Footer from './components/Footer';
import Banner3D from './components/Banner3D';

export default function Home() {
  const profile = useAppSelector((state) => state.profile);
  const work = useAppSelector((state) => state.work);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfiles());
    dispatch(fetchWorks());
  }, [dispatch]);

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

          {profile.loading ? (
            <div className="flex justify-center">
              <BeatLoader color="#36d7b7" size={10} />
            </div>
          ) : (
            <div className="mt-3">
              <div className="flex md:flex-row flex-col items-start justify-between">
                <div>
                  <p className="font-bold text-2xl">{profile.data?.name}</p>
                  <p>{profile.data?.description}</p>
                </div>
                <div className="flex justify-center w-full md:w-auto">
                  <Image
                    src={profile.data?.avatar ?? ''}
                    width={150}
                    height={150}
                    alt="avatar"
                  />
                </div>
              </div>
              <span className="font-bold text-2xl border-b-4 border-black dark:border-white">
                Work
              </span>
              <p className="mt-4">{profile.data?.introduce}</p>
            </div>
          )}
          {work.loading ? (
            <div className="flex justify-center">
              <BeatLoader color="#36d7b7" size={10} />
            </div>
          ) : (
            <div className="mt-5 mb-5">
              <span className="font-bold text-2xl border-b-4 border-black dark:border-white">
                Bio
              </span>
              <div className="mb-3"></div>
              {work.data?.map((work, index) => (
                <p key={index} className="">
                  <span className="font-bold me-2">
                    {work.startTime.split('-')[0]}
                  </span>
                  {work.title}
                </p>
              ))}
            </div>
          )}
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
