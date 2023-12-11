import React from 'react';
import { Link } from 'react-router-dom';

function SupporterPage() {
  const data = [
    {
      name: 'sonMMI',
      money: '300.000',
      time: '2',
      content: 'Cảm ơn ITCenter tạo ra một website rất tốt.',
    },
    {
      name: 'Đoàn',
      money: '200.000',
      time: '5',
      content: 'cảm ơn ITCenter tạo ra khóa học python',
    },
    {
      name: 'Nguyen Thanh Nhu ',
      money: '300.000',
      time: '3',
      content:
        'Chúc ITCenter ngày càng phát triển và thêm nhiều bài giảng hơn minh mong khoá PHP.',
    },
    {
      name: 'snowfox7111n',
      money: '200.000',
      time: '5',
      content: 'Cảm ơn các anh!',
    },
    {
      name: 'KhangNT',
      money: '300.000',
      time: '3',
      content: 'Chân thành cảm ơn ITCenter đã tạo ra các khóa học này..',
    },
    {
      name: 'Huyvu95',
      money: '500.000',
      time: '1',
      content:
        'cảm ơn ITCenter đã chia sẻ những bài học bổ ích tới cộng đồng. chúc đội ngũ team luôn mạnh khỏe mong ITCenter ngày càng phát triển.',
    },
  ];

  return (
    <div className="px-5 py-4 bg-white">
      <p className="mb-10">
        ITCenter muốn cảm ơn những người đã ủng hộ ITCenter và những người đã
        đồng hành cùng ITCenter xây dựng một cộng đồng giáo dục miễn phí.
      </p>
      <p className="mb-10">
        Đặc biệt, ITCenter xin gửi lời cảm ơn đến các cá nhân, tổ chức sau đây:
      </p>
      {data.map((item, index) => (
        <div key={index}>
          <div className="d-flex align-items-center bg-white p-2 m-2 rounded-2">
            <Link
              to="/users/id"
              className="d-flex flex-column align-items-center pe-2">
              <img
                src={require('@assets/img/avatar.png')}
                alt="avatar"
                style={{ width: '40px' }}
                className="avatar__img"
              />
            </Link>
            <div className="d-flex flex-column">
              <div className="d-flex flex-wrap align-items-center">
                <Link
                  to="/users/id"
                  className="text-info text-decoration-none pe-2">
                  {item.name}
                </Link>
                <span className="pe-1">đã ủng hộ</span>
                <span className="pe-1">
                  {item.money}
                  <sup>đ</sup>
                </span>
                <span className="text-muted fs-12">
                  {item.time}
                  tháng trước
                </span>
              </div>
              <div className="mt-2 fs-14">{item.content}</div>
            </div>
          </div>
          <div className="d-flex flex-fill bg-secondary h-2px opacity-25 mt-2"></div>
        </div>
      ))}

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
    </div>
  );
}

export default SupporterPage;
