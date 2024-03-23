import React from 'react';
import { calculateTimeSince, formatNumber } from '../../utils/index';
import { Link } from '@/navigation';

const Post = ({ post }: any) => {
  const { _id, title, comments, likes, user, cover, description, createdAt, tags } = post;
  const userCurrent = {};
  const countLike = formatNumber(likes);
  const countComment = formatNumber(+comments);
  const timeSince = calculateTimeSince(createdAt);

  // const handleToWallPage = () => {
  //   if (!userCurrent) {
  //     dispatch(showModalSignInRequest(true));
  //   }
  // };

  return (
    <li key={_id} className="list-item col-4 col-lg-6 col-md-12">
      <div className="card">
        <div className="card-img">
          <Link
            href={{
              pathname: '/detail/[pageId]',
              params: {pageId: _id}
            }}
          >
            <img src={cover} alt="" className="post-image" />
          </Link>
        </div>
        <div className="card-body post-content">
          <Link
            href={{
              pathname: '/detail/[pageId]',
              params: {pageId: _id}
            }}
          >
            <h2 className="card-title">{title}</h2>
          </Link>
          <ul className="card-tags">
            {tags.map((item: any, index: number) => (
              <li key={index} className="tag-item">{item}</li>
            ))}
          </ul>
          <p className="post-description" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="card-footer">
          <Link
            href='/'

            // href={userCurrent?.email === user?.email ? '/wall/me' : `/wall/${user?._id}`}
            className="post-creator-info"
            // onClick={handleToWallPage}
          >
            <div className="author-info">
              <h4 className="card-content author-name">
                {user?.displayName ? user?.displayName : user?.lastName}
              </h4>
              <p className="card-content post-sub-info">{timeSince}</p>
            </div>
          </Link>
          <div className="post-status-info">
            <div className="post-interact ">
              <p>
                {countLike} <i className="fal fa-heart"></i>
              </p>
              <p>
                {countComment} <i className="fal fa-comment"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Post;
