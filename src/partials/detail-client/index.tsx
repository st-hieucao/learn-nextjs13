'use client';
import React, { useEffect } from 'react'
import { useStore } from '@/store/store';

const DetailClient = (props: any) => {
  const { post } = props;
  const { postDetail, savePost }: any = useStore((state) => state);

  useEffect(() => {
    savePost(post);
  }, [post.id]);

  return (
    <div>
      {props.children}
    </div>
  )
}

export default DetailClient;
