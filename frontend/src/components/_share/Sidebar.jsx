import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const userInfo = useSelector((state) => state.user.current).user;

  return (
    <div className="sidebar-width">
      <div className="sidebar">
        <div className="sidebar__avatar">
          <Link to="/users/id">
            <img
              src={require('@assets/img/avatar.png')}
              alt="avatar"
              className="sidebar__avatar__img"
            />
            <div className="sidebar__avatar__name text-center">
              {userInfo.name}
            </div>
          </Link>
        </div>
        <div className="sidebar__pages">
          <div className="mt-4 ms-3 fw-bold text-secondary">PAGES</div>
          <div className="break-line"></div>
          <Link
            to="/learn"
            className={classNames('sidebar__pages__page', {
              active: pathname.includes('/learn'),
            })}>
            <MenuBookOutlinedIcon />
            <div className={'ps-2 mt-1'}>KHÓA HỌC</div>
          </Link>
          <Link
            to="/question"
            className={classNames('sidebar__pages__page', {
              active: pathname.includes('/question'),
            })}>
            <HelpOutlineOutlinedIcon />
            <div className={'ps-2 mt-1'}>HỎI ĐÁP</div>
          </Link>

          <Link
            to="/documentation"
            className={classNames('sidebar__pages__page', {
              active: pathname.includes('/documentation'),
            })}>
            <DescriptionOutlinedIcon />
            <div className={'ps-2 mt-1'}>BÀI VIẾT</div>
          </Link>
          <Link
            to="/tags"
            className={classNames('sidebar__pages__page', {
              active: pathname.includes('/tags'),
            })}>
            <SellOutlinedIcon />
            <div className={'ps-2 mt-1'}>TAG</div>
          </Link>
          <Link
            to="/users?tab=user"
            className={classNames('sidebar__pages__page', {
              active: pathname.includes('/users'),
            })}>
            <PeopleAltOutlinedIcon />
            <div className={'ps-2 mt-1'}>ITER</div>
          </Link>
          <Link
            to="/about"
            className={classNames('sidebar__pages__page', {
              active: pathname.includes('/about'),
            })}>
            <InfoOutlinedIcon />
            <div className={'ps-2 mt-1'}>VỀ ITCENTER</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
