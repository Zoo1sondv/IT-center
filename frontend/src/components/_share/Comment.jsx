import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

function Comment({ className }) {
  const userInfo = useSelector((state) => state.user.current);

  return (
    <div
      className={classNames(
        'd-flex align-items-center bg-white p-3 rounded-2 cursor-pointer text-dark',
        { [className]: className },
      )}>
      <div className="pe-2">
        <img
          src={require('@assets/img/avatar.png')}
          alt="avatar"
          style={{ width: '40px' }}
          className="avatar__img"
        />
      </div>
      <div className="d-flex flex-column flex-fill">
        <div>{userInfo?.name || ''}</div>
        <div className="px-3 py-2 bg-light text-secondary">Thêm bình luận</div>
        <div className="d-flex">
          <div className="btn btn-info mt-2">
            <ReplyOutlinedIcon className="pe-1" />
            Nhận xét
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
