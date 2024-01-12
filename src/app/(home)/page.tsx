'use client';
import Loading from '@/components/Loading';
import Post from '@/components/Post';
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useSWR from 'swr';

async function getNewList() {
  const res = await fetch('https://boogle.onrender.com/api/posts/public?page=1', { cache: 'no-store' });
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();
  return data.data;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json()).then((data: any) => data.data);
 
export default function Page() {
  const { data, error, isLoading } = useSWR(
    "https://boogle.onrender.com/api/posts/public?page=1",
    fetcher
  );

  console.log(data)

  if (error) return "An error has occurred.";
  if (isLoading) return <Loading />;
  
  // const [index, setIndex] = useState(0);
  // const [posts, setPosts] = useState(postList || []);

  // const [newsFeed, setNewsFeed] = useState(newsList?.data || []);
  // const [loading, setLoading] = useState(false);
  // const [loadMore, setLoadMore] = useState(newsList?.hasMore || false);
  // const [pageNumber, setPageNumber] = useState(1);
  // const observer = useRef<any>();

  // useEffect(() => {
  //   setInterval(() => {
  //     setIndex((prev) => (prev > 1 ? 0 : prev + 1));
  //   }, 10000);
  // }, []);

  // useEffect(() => {
  //   fetchNewsfeedAPI(pageNumber);
  // }, [pageNumber]);

  // const fetchNewsfeedAPI = async (pageNumber: any) => {
  //   setLoading(true);
  //   const response = await fetch(`https://boogle.onrender.com/api/posts/public?page=${pageNumber}`);
  //   const data = await response.json();

  //   if (pageNumber === 1) {
  //     setNewsFeed(data.data);
  //   } else {
  //     setNewsFeed([...newsFeed, ...data.data]);
  //   }
  //   setLoadMore(data?.hasMore);
  //   setLoading(false);
  // };

  // const loadMoreElementRef = useCallback(
  //   (node: any) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting && loadMore) {
  //           setPageNumber(pageNumber + 1);
  //         }
  //       },
  //       {
  //         root: null,
  //         rootMargin: '0px',
  //         threshold: 1,
  //       }
  //     );
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading]
  // );

  return (
    <div className='app'>
      {/* Slide Post */}
      {/* <section className="section-slide">
        <div className="container">
          <h2 className="slide-title">Trending</h2>
          <div className="slide-content">
            <ul className="list-post">
              {posts.length > 0 && posts?.map((item, indexSlide) => (
                <SlideItem key={indexSlide} post={item} index={index} />
              ))}
            </ul>
            <div className="slide-dots">
              {posts.length > 0 && posts?.map((item, indexItem) => (
                <span
                  key={indexItem}
                  className={index === indexItem ? 'dot-item active' : 'dot-item'}
                  onClick={() => setIndex(indexItem)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* News feed */}
      <section className="section-new-post">
        <div className="container">
          <ul className="row group-item">
            {data?.map((post: any, index: Number) => (
              <Post key={index} post={post} />
            ))}
          </ul>
          {/* {loading && (
            <ul className="row group-item">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SkeletonNewsfeed key={n} />
              ))}
            </ul>
          )} */}
        </div>
        {/* {loadMore && (
          <div className="load-more-wrap" ref={loadMoreElementRef}>
            <div className="load-more">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        )} */}
      </section>
    </div>
  );
};
