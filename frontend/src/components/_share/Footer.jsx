import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white d-flex flex-fill mt-5">
      <div className="p-4 col-12">
        <div className="d-flex flex-column">
          <div className="mb-3">
            <Link to="/" className="pe-auto">
              <img
                src={require('../../assets/img/logoBlack.png')}
                alt="logo"
                height={40}
              />
            </Link>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <p className="mb-2 text-dark fw-bold">Thông tin ITCenter</p>
              <ul className="list-unstyled mb-3 fs-14">
                <li className="mb-1">
                  <Link to="/about" className="text-muted text-decoration-none">
                    Về ITCenter
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/about/contact"
                    className="text-muted text-decoration-none">
                    Liên hệ
                  </Link>
                </li>
              </ul>
              <p className="mb-2 text-dark fw-bold">Đóng góp từ cộng đồng</p>
              <ul className="list-unstyled mb-3 fs-14">
                <li className="mb-1">
                  <Link
                    to="/about/donate"
                    className="text-muted text-decoration-none">
                    Tài trợ
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/about/supporters"
                    className="text-muted text-decoration-none">
                    Người ủng hộ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="mb-2 text-dark fw-bold">Lĩnh vực</p>
              <ul className="list-unstyled mb-3 fs-14">
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Lập trình
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Microsoft Office
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    IT &amp; Phần mềm
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Đồ họa hình ảnh
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Ngoại ngữ
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Tin tức
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="mb-2 text-dark fw-bold">Khoá học</p>
              <ul className="list-unstyled mb-3 fs-14">
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Microsoft Word
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Microsoft Excel
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Lập trình Java
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Lập trình Python
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Lập trình Javascript
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/learn" className="text-muted text-decoration-none">
                    Lập trình Android
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="mb-2 text-dark fw-bold">Cộng đồng</p>
              <ul className="list-unstyled mb-3 fs-14">
                <li className="mb-1">
                  <Link
                    to="/question"
                    className="text-muted text-decoration-none">
                    Hỏi đáp
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/documentaion"
                    className="text-muted text-decoration-none">
                    Bài viết
                  </Link>
                </li>
              </ul>
              <p className="mb-2 text-dark fw-bold">Kết nối với ITCenter</p>
              <ul className="list-unstyled mb-3 fs-14">
                <li className="mb-1">
                  <Link
                    to="/about/contact"
                    className="text-muted text-decoration-none">
                    Liên lạc
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/about/contact"
                    className="text-muted text-decoration-none">
                    Góp ý
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="mb-10">
            <span>ITCenter by Sondv © 2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
