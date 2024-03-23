'use client';
import Loading from '@/components/Loading';
import Post from '@/components/Post';
import useSWR from 'swr';
import {useTranslations} from 'next-intl';

const fetcher = async (url: string) => {
  return fetch(url).then((res) => res.json()).then((data: any) => data.data);
}
 
export default function Page() {
  const { data, error, isLoading } = useSWR(
    "https://boogle.onrender.com/api/posts/public?page=1",
    fetcher
  );

  const t = useTranslations();
  
  if (error) return "An error has occurred.";
  if (isLoading) return <Loading />;

  return (
    <div className='app'>
      {/* News feed */}
      <section className="section-new-post">
        <div className="container">
        <h1>{t('title')}</h1>
          <ul className="row group-item">
            {data?.map((post: any, index: Number) => (
              <Post key={index} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
