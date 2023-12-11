import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="px-5 py-4 bg-white">
        <h3 className="text-center text-dark fw-bold">Tầm nhìn</h3>
        <p className="mb-10">
          Với mong muốn mang đến kiến thức chất lượng, miễn phí cho mọi người,
          với tâm huyết phá bỏ rào cản kiến thức từ việc giáo dục thu phí. Chúng
          tôi - ITCenter đã lập nên trang website này để thế giới phẳng hơn.
        </p>
        <p className="mb-10">
          Bất cứ ai có mong muốn khai phá thế giới. Phá bỏ mọi thứ ngăn cản sự
          phát triển tất yếu bền vững của xã hội đều là ITer (Thành viên của
          ITCenter).
        </p>
        <h6 className="fw-bold">GIÁO DỤC LÀ MIỄN PHÍ!</h6>
      </div>
      <div className="mt-4">
        <h3 className="text-center text-dark fw-bold my-5">Người sáng lập</h3>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <div className="col-sm-3"></div>
          <div className="col-sm-3">
            <div className="mx-4">
              <div className="about-page__img">
                <img src={require('@assets/img/avatar.png')} alt="avatar" />
              </div>
              <div className="about-page__info">
                <h5 className="about-page__info__name">Đoàn Văn Sơn</h5>
                <div className="about-page__info__desc">
                  Thiết kế website - Đồ họa - Phụ trách frontend
                </div>
              </div>
              <div className="about-page__contact">
                <div className="text-truncate">
                  <FacebookOutlinedIcon
                    style={{ fontSize: '36px' }}
                    className="me-2"
                  />
                  <Link
                    to="https://www.facebook.com/doansonbn"
                    target="_blank"
                    className="text-decoration-none text-info">
                    fb.com/doansonbn
                  </Link>
                </div>
                <div className="text-truncate mt-2">
                  <LocalPhoneOutlinedIcon
                    style={{ fontSize: '36px' }}
                    className="me-2"
                  />
                  (+84) 347 200 992
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="mx-4">
              <div className="about-page__img">
                <img src={require('@assets/img/avatar.png')} alt="avatar" />
              </div>
              <div className="about-page__info">
                <h5 className="about-page__info__name">Nguyễn Thịnh Khang</h5>
                <div className="about-page__info__desc">
                  Thiết kế database - Phụ trách backend
                </div>
              </div>
              <div className="about-page__contact">
                <div className="text-truncate">
                  <FacebookOutlinedIcon
                    style={{ fontSize: '36px' }}
                    className="me-2"
                  />
                  <Link
                    to="https://www.facebook.com/doansonbn"
                    target="_blank"
                    className="text-decoration-none text-info">
                    fb.com/nguyenthinhkhang
                  </Link>
                </div>
                <div className="text-truncate mt-2">
                  <LocalPhoneOutlinedIcon
                    style={{ fontSize: '36px' }}
                    className="me-2"
                  />
                  (+84) 347 200 123
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>

      <div className="mt-4 about-supporter">
        <div className="text-center text-white p-5">
          <h1>Tài trợ</h1>
          <p className="py-2">
            Hỗ trợ chúng tôi để cùng xây dựng một nền{' '}
            <strong>GIÁO DỤC MIỄN PHÍ</strong> cho bất cứ ai, ở bất cứ nơi nào.{' '}
            <br />
            Hoặc tham gia vào đội ngủ giảng viên, công tác viên, tình nguyện
            viên của chúng tôi.
          </p>
          <Link to="/about/donate" className="btn btn-light w-230px">
            Tài trợ
          </Link>
        </div>
      </div>
      <div className="pb-5">
        <div className="about-contact">
          <div className="bg-white opacity-75">
            <div className="p-5 text-center">
              <h1 className="text-dark">Liên hệ - Góp ý</h1>
              <p className="py-2">
                Góp ý hoặc liên hệ cho Kteam nếu bạn có nhu cầu về dịch vụ,
                quảng cáo hoặc những thắc mắc khác.
              </p>
              <Link to="/about/contact" className="btn btn-info w-230px">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
