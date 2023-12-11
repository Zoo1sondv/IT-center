import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsIcon from '@mui/icons-material/Reviews';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { useSelector } from 'react-redux';
import 'moment/locale/vi';
import Moment from 'react-moment';

function UserInfoPage() {
  const userInfo = useSelector((state) => state.user.current).user;

  return (
    <div className=" d-flex flex-wrap">
      <div className="col-lg-8">
        <div className="row m-4 d-flex flex-wrap justify-content-center align-items-center">
          <Link to={'/question/me'} className={'user-info'}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <HelpOutlineOutlinedIcon />
              {userInfo?.post_quantity || 0} <div>Bài viết</div>
            </div>
          </Link>
          <Link to={'/documentation/me'} className={'user-info'}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <DescriptionOutlinedIcon />
              {userInfo?.qa_quantity || 0} <div>Câu hỏi</div>
            </div>
          </Link>
          <Link to={'/'} className={'user-info'}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <ForumIcon /> {userInfo?.comment_quantity || 0}{' '}
              <div>Bình luận</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="m-4">
          <div className="fw-bold h5 bg-warning p-2 d-flex justify-content-center rounded-2">
            <InsertChartIcon className="pe-2" />
            THỐNG KÊ
          </div>
          <div className="rounded-2 bg-white px-4 py-2">
            <div className="my-2">
              <ReviewsIcon className="pe-2" /> <strong>0</strong> điểm uy tín
            </div>
            <div className="my-2">
              <VisibilityIcon className="pe-2" /> <strong>123</strong> lượt xem
              hồ sơ
            </div>
            <div className="my-2">
              <AccessAlarmIcon className="pe-2" /> Xem lần cuối{' '}
              <strong>22 phút trước</strong>
            </div>
            <div className="my-2">
              <EventAvailableIcon className="pe-2" /> Tham gia{' '}
              <strong>
                <Moment locale="vi" fromNow className="ms-1">
                  {userInfo.created_at}
                </Moment>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoPage;
