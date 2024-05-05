'use client';

import { useEffect } from 'react';
import Header from '../components/header';
import Image from 'next/image';
import Link from 'next/link';
import Banner3D from '../components/Banner3D';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchPosts } from '@/lib/features/post/postSlice';
import BeatLoader from 'react-spinners/BeatLoader';

function Page() {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.post);
  console.log(post.data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center w-full px-6 mt-28">
        <div className="max-w-[40rem] w-full">
          <Banner3D />
          <p className="my-4 font-bold text-xl">Popular Posts</p>
          <div className="grid sm:grid-cols-2 gap-7 grid-cols-1">
            {post.loading ? (
              <div className="flex justify-center">
                <BeatLoader color="#36d7b7" size={10} />
              </div>
            ) : (
              <div>
                {post.data?.map((post, index) => (
                  <Link href={`/post/${post._id}`} key={index}>
                    <div className="w-full rounded-xl">
                      <Image
                        src={post.image}
                        alt="post"
                        className="w-full cover rounded-xl"
                        width={400}
                        height={100}
                      />
                      <p className="text-center">{post.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
