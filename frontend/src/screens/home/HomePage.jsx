import { HeaderHomePage } from '@components/index';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      <HeaderHomePage />
      <div className="p-5 h-75">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-xl-5 d-flex flex-column">
            <div className="text-danger fw-bolder fs-5">KHÓA HỌC</div>
            <h1 className="fw-bolder text-white mb-4">
              Thư viện khóa học lập trình từ cơ bản đến nâng cao
            </h1>
            <span className="mb-3 text-secondary fs-5">
              Python ? C++? C# hay Java? <br />
              Bạn lựa chọn ngôn ngữ nào để bắt đầu chặng đường trở thành lập
              trình viên của mình?
            </span>
            <div className="w-25px mt-3">
              <Link
                className="btn btn-primary px-4 border-0 fw-bolder"
                to="/learn">
                Học ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
