import BuildIcon from '@mui/icons-material/Build';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import PasswordIcon from '@mui/icons-material/Password';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoyIcon from '@mui/icons-material/Boy';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useMyContext } from '@store/context/store';

function UserInfoAccount() {
  const location = useLocation();
  const pathname = location.pathname;
  const { setResetInfo, userInfo } = useMyContext();

  useEffect(() => {
    setResetInfo(true);
  }, [setResetInfo]);

  return (
    <div className="account-info d-flex flex-wrap">
      <div className="col-12 col-lg-3">
        <div className="m-4">
          <div className="fw-bold h5 bg-warning p-2 d-flex justify-content-center rounded-2">
            <BuildIcon className="pe-2" />
            CÀI ĐẶT
          </div>
          <div className="rounded-2 bg-white px-4 py-2">
            <Link
              to="/users/edit"
              className={classNames('account-info__item', {
                active: pathname === '/users/edit',
              })}>
              <div className="my-2">
                <InfoIcon className="pe-2" /> Thông tin
              </div>
            </Link>
            <Link
              to="/users/edit/info"
              className={classNames('account-info__item', {
                active: pathname === '/users/edit/info',
              })}>
              <div className="my-2">
                <EditIcon className="pe-2" /> Thay đổi thông tin
              </div>
            </Link>
            <Link
              to="/users/edit/password"
              className={classNames('account-info__item', {
                active: pathname === '/users/edit/password',
              })}>
              <div className="my-2">
                <PasswordIcon className="pe-2" /> Thay đổi mật khẩu
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="m-4">
          <div className="fw-bold h5 bg-warning p-2 d-flex justify-content-center rounded-2">
            THÔNG TIN TÀI KHOẢN
          </div>
          <div className="rounded-2 bg-white px-4 py-2">
            <div className="card mt-4 mb-5">
              <div className="card-body">
                {/* <div className="form-group mt-2">
                  <label htmlFor="username" className="fs-5 text-dark mb-2">
                    Ảnh đại diện:
                  </label>
                  <div
                    className={
                      'input-group h-50px d-flex justify-content-center'
                    }>
                    {avatar ? (
                      <img src={avatar} alt="avatar" width={50} height={50} />
                    ) : (
                      'Không có'
                    )}
                  </div>
                </div> */}
                <div className="form-group mt-2">
                  <label htmlFor="email" className="fs-5 text-dark mb-2">
                    Email:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <EmailIcon />
                    </span>
                    <input
                      name="email"
                      type="email"
                      className="form-control fs-5"
                      value={userInfo.email}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="username" className="fs-5 text-dark mb-2">
                    Username:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <PersonIcon />
                    </span>
                    <input
                      name="username"
                      type="text"
                      className="form-control fs-5"
                      value={userInfo.name}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="username" className="fs-5 text-dark mb-2">
                    Ngày sinh:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <CalendarMonthIcon />
                    </span>
                    <input
                      name="username"
                      type="date"
                      className="form-control fs-5"
                      value={userInfo.birth_date}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="username" className="fs-5 text-dark mb-2">
                    Giới tính:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <BoyIcon />
                    </span>
                    <input
                      name="username"
                      type="text"
                      className="form-control fs-5"
                      value={userInfo.birth_date === 1 ? 'nữ' : 'nam'}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="username" className="fs-5 text-dark mb-2">
                    Số điện thoại
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <PhoneIphoneIcon />
                    </span>
                    <input
                      name="username"
                      type="text"
                      className="form-control fs-5"
                      value={userInfo.phone}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoAccount;
