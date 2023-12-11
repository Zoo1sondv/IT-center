import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="py-30 text-center">
      <div>
        <SearchIcon className=" text-primary" />
      </div>
      <h1 className="h2 font-w700 mt-30 mb-10">404!</h1>
      <h2 className="h3 font-w400 text-muted mb-50">
        Rất tiếc, nội dung này không tồn tại, hoặc đã được thay đổi. <br />
        Mời bạn quay lại trang chủ để truy cập.
      </h2>
      <Link className="btn  btn-rounded btn-primary" to="/">
        <i className="fa fa-arrow-left mr-10"></i> Quay lại trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
