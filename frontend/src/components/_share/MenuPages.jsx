import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';

function MenuPages({ menu, onClick }) {
  return (
    <nav className="menu-pages d-flex align-items-center bg-white p-2 rounded-3">
      <Link to="/">
        <HomeIcon />
      </Link>
      <>
        <ChevronRightIcon />
        <Link
          className="text-dark fw-bold text-decoration-none text-nowrap"
          to={menu.link1}
          onClick={onClick}>
          {menu.name1}
        </Link>
      </>

      {menu.name2 && (
        <>
          <ChevronRightIcon />
          <span className="text-dark text-decoration-none">{menu.name2}</span>
        </>
      )}
    </nav>
  );
}

export default MenuPages;
