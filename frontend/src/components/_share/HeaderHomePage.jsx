import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { logout } from '@screens/auth/userSlice';
import { useMyContext } from '@store/context/store';
import _ from 'lodash';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

function HeaderHomePage({ className }) {
  const { isShowSidebar, setIsShowSidebar } = useMyContext();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const pathname = window.location.pathname;
  const pathAuth = pathname.includes('/auth');
  const isLoggedIn = !_.isEmpty(useSelector((state) => state.user.current));

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  const handleClickPageAuth = () => {
    if (pathAuth) enqueueSnackbar('Vui lòng đăng nhập', { variant: 'error' });
  };

  return (
    <header
      className={classNames('d-flex p-4 justify-content-between z-index-50', {
        [className]: className,
      })}>
      <div className={'d-flex align-items-center'}>
        {pathname !== '/' && !pathAuth && (
          <div
            className="btn btn-circle btn-outline-secondary text-white border-0 rounded-circle p-1"
            onClick={() => setIsShowSidebar(!isShowSidebar)}>
            <MenuIcon className="text-white fw-bold cursor-pointer" />
          </div>
        )}
        <Link to="/" className="pe-auto">
          <img
            src={require('../../assets/img/logoWhite.png')}
            alt="logo"
            height={40}
          />
        </Link>
        {(pathname === '/' || pathAuth) && (
          <div className="d-none d-lg-flex">
            <div
              className="d-flex justify-content-center ms-4"
              onClick={handleClickPageAuth}>
              <Link
                className={classNames(
                  'text-white fw-bold text-decoration-none p-3 bg-custom-dark',
                  {
                    'pe-none': pathAuth,
                  },
                )}
                to="/about">
                Giới thiệu
              </Link>
            </div>
            <div
              className="d-flex justify-content-center"
              onClick={handleClickPageAuth}>
              <Link
                className={classNames(
                  'text-white fw-bold text-decoration-none p-3 bg-custom-dark',
                  {
                    'pe-none': pathAuth,
                  },
                )}
                to="/learn">
                Khóa học
              </Link>
            </div>
            <div
              className="d-flex justify-content-center"
              onClick={handleClickPageAuth}>
              <Link
                className={classNames(
                  'text-white fw-bold text-decoration-none p-3 bg-custom-dark',
                  {
                    'pe-none': pathAuth,
                  },
                )}
                to="/question">
                Hỏi đáp
              </Link>
            </div>
            <div
              className="d-flex justify-content-center"
              onClick={handleClickPageAuth}>
              <Link
                className={classNames(
                  'text-white fw-bold text-decoration-none p-3 bg-custom-dark',
                  {
                    'pe-none': pathAuth,
                  },
                )}
                to="/documentation">
                Bài viết
              </Link>
            </div>
            <div
              className="d-flex justify-content-center"
              onClick={handleClickPageAuth}>
              <Link
                className={classNames(
                  'text-white fw-bold text-decoration-none p-3 bg-custom-dark',
                  {
                    'pe-none': pathAuth,
                  },
                )}
                to="/donate">
                Tài trợ
              </Link>
            </div>
            <div
              className="d-flex justify-content-center"
              onClick={handleClickPageAuth}>
              <Link
                className={classNames(
                  'text-white fw-bold text-decoration-none p-3 bg-custom-dark',
                  {
                    'pe-none': pathAuth,
                  },
                )}
                to="/about/contact">
                Liên hệ
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex align-items-center">
        <div
          className="d-flex justify-content-center"
          onClick={handleClickPageAuth}>
          <Link
            className={classNames(
              'btn btn-circle btn-outline-dark text-white border-0 rounded-circle p-2',
              {
                'pe-none': pathAuth,
              },
            )}
            to="/search">
            <SearchIcon />
          </Link>
        </div>

        <div className="btn-group" role="group" onClick={handleClickPageAuth}>
          <button
            type="button"
            className="btn btn-circle btn-outline-dark text-white border-0 rounded-circle p-2"
            id="createButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            disabled={pathAuth}>
            <CreateOutlinedIcon />
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end min-width-150"
            aria-labelledby="createButton">
            <li>
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/question"
                data-bs-toggle="btn-create-question">
                <HelpOutlineOutlinedIcon className="me-2" /> Đặt câu hỏi
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/documentation">
                <InsertDriveFileOutlinedIcon className="me-2" /> Viết bài
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/documentation">
                <ListOutlinedIcon className="me-2" /> Tạo series
              </Link>
            </li>
          </ul>
        </div>

        {isLoggedIn ? (
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-rounded text-white border-0  px-3 "
              id="accountBtn"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <AccountCircleIcon />
            </button>
            <div
              className="dropdown-menu dropdown-menu-end min-width-150"
              aria-labelledby="accountBtn">
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/users">
                <PermIdentityOutlinedIcon className="me-2" />
                Hồ Sơ
              </Link>
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/users/edit">
                <BuildOutlinedIcon className="me-2" /> Cài Đặt
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/"
                onClick={handleLogoutClick}>
                <LogoutOutlinedIcon className="me-2" /> Đăng Xuất
              </Link>
            </div>
          </div>
        ) : (
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-rounded btn-outline-dark text-white border-0 rounded-4 px-3 d-flex align-items-center"
              id="accountBtn"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <AccountCircleOutlinedIcon />
              <span className="ms-2 fw-bold d-none d-md-flex">Tài khoản</span>
              <KeyboardArrowDownIcon className="d-none d-md-flex" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-end min-width-150"
              aria-labelledby="accountBtn">
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/auth/login">
                <PermIdentityOutlinedIcon className="me-2" />
                Đăng nhập
              </Link>
              <Link
                className="dropdown-item d-flex align-items-center"
                to="/auth/register">
                <PersonAddAltOutlinedIcon className="me-2" /> Đăng ký
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderHomePage;
