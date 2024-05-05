'use client';

import { useEffect } from 'react';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/header';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { findPostById } from '@/lib/features/post/postSlice';

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(findPostById(params.slug));
  }, [params.slug, dispatch]); // Thêm params.slug vào phụ thuộc để tránh vòng lặp cập nhật

  console.log(post.selectedPost);

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center w-full px-6 mt-28">
        {/* Hiển thị nội dung bài viết dưới dạng HTML */}
        {post.selectedPost ? (
          <div
            dangerouslySetInnerHTML={{ __html: post.selectedPost.content }}
          />
        ) : (
          <p>Không tìm thấy bài viết.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
