import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CreateBox({ title = 'câu hỏi' }) {
  const userInfo = useSelector((state) => state.user.current);

  return (
    <Link
      to="create"
      className="d-flex align-items-center bg-white p-3 rounded-2 cursor-pointer text-decoration-none text-dark">
      <div className="pe-2">
        <img
          src={require('@assets/img/avatar.png')}
          alt="avatar"
          style={{ width: '40px' }}
          className="avatar__img"
        />
      </div>
      <div className="d-flex flex-column flex-fill">
        <div>{userInfo.user.name}</div>
        <div className="px-3 py-2 bg-light text-secondary">
          Tạo {title} của bạn
        </div>
      </div>
    </Link>
  );
}

export default CreateBox;
