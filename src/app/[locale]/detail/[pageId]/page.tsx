import React, { useEffect, useState } from 'react';
import { getLocale, getTranslations } from 'next-intl/server';
import DetailClient from '@/partials/detail-client';

async function getData(id: string) {
  const locale = await getLocale();
  const res = await fetch(`https://boogle.onrender.com/api/posts/${id}`, {
    headers: {
      'language': locale
    }
  });
 
  if (!res.ok) {
    return;
  }
 
  const data = await res.json();
  return {
    ...data,
    locale,
  };
}

const Detail = async (props: { params: { pageId: string }}) => {
  const idPost = props.params.pageId;
  const post = await getData(idPost);
  const t = await getTranslations();

  if (!post) {
    return <></>
  }
  
  return (
    <DetailClient post={post}>
      <div className="detail-page">
        <div className="container">
          <div className="row">
            <aside className="author-interact">
              <ul className="interact-action-list">
              </ul>
            </aside>
            <article className="post-detail col-8 offset-2 col-lg-12 offset-lg-0">
              <h2>{t('lang_for')} {post.locale}</h2>
              <div className="post-header">
                <h2 className="post-title">{post.title}</h2>
              </div>
              <div className="author-detail">
                <ul className="author-info-list">
                  <li className="author-info-item">
                    <a
                      href=''
                      className="author-avatar"
                    >
                      <img
                        src={
                          post.user.picture
                            ? `${post.user.picture}`
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht9-qZYmqErdGMhJVbRf7BfhLRGspNWaFnR8nddu3x7Da7nqh23vsG6VWtG_VE9G9kLU&usqp=CAU'
                        }
                        alt={post.user?.displayName}
                      />
                    </a>
                  </li>
                  <li className="author-info-item">
                    <a
                      href={''}
                      className="text-primary author-name"
                    >
                      <h3>
                        {post.user?.displayName
                          ? post.user?.displayName
                          : post.user?.lastName}
                      </h3>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="post-image">
                <img
                  src={post.cover}
                  alt="post-cover"
                />
              </div>
              <div className="post-content">
                <div
                  className="post-description"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </div>
              <div className="post-footer">
                <ul className="interact-detail-list">
                  <li
                    className="interact-detail-item"
                    // onClick={handleLikePost}
                  >
                    10
                    {post.isLiked ? (
                      <i className="fas fa-heart"></i>
                    ) : (
                      <i className="fal fa-heart"></i>
                    )}
                  </li>
                  <li className="interact-detail-item">
                    10
                    <i className="fal fa-comment-alt-lines"></i>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </DetailClient>
  )
}

export default Detail;
