import React from 'react';
import { Link } from 'react-router-dom';

function InfoMini() {
  return (
    <div className="info-mini">
      <div className="info-mini__avatar">
        <Link to="/users" className="text-decoration-none">
          <img
            src={require('@assets/img/avatar.png')}
            alt="avatar"
            className="info-mini__avatar__img"
          />
          <div className="info-mini__avatar__name">Son MMI</div>
        </Link>
      </div>
      <div className="info-mini__content">
        <div className="d-flex flex-column justify-content-center align-items-center pe-3 text-center">
          <div className="mini-counts">
            <span>0</span>
          </div>
          <span>Bài viết</span>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center pe-3 text-center">
          <div className="mini-counts">
            <span>0</span>
          </div>
          <span>Câu hỏi</span>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center pe-3 text-center">
          <div className="mini-counts">
            <span>0</span>
          </div>
          <span>Bình luận</span>
        </div>
      </div>
    </div>
  );
}

export default InfoMini;
