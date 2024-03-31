import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { randomNumber } from '@utils/numberCommon';
import 'moment/locale/vi';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function TitleDetailPage({ data }) {
  return (
    <div className="d-flex bg-white rounded-2 p-4">
      <div className="d-flex flex-column justify-content-center align-items-center pe-3">
        <div className="btn btn-success mb-2">
          <span>{randomNumber(0, 5)}</span>
          <ArrowDropUpIcon />
        </div>
        <div className="btn btn-danger">
          <span>{randomNumber(0, 2)}</span>
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="text-dark fw-bold fs-5">{data.title}</div>
        <div style={{ fontSize: '12px' }} className={'d-flex my-1'}>
          <span className="d-flex flex-wrap align-items-center me-2">
            <SaveAsOutlinedIcon className="pe-1" />
            khoảng
            <Moment locale="vi" fromNow className="ms-1">
              {data.created_at}
            </Moment>
          </span>
          <span className="d-flex align-items-center me-2">
            <VisibilityOutlinedIcon className="pe-1" />
            {randomNumber(0, 20)}{' '}
            <div className="text-center ps-1">lượt xem</div>
          </span>
          <span className="d-flex align-items-center me-2">
            <CommentOutlinedIcon className="pe-1" />
            {data.comment_quantity} bình luận
          </span>
        </div>
        <div>
          <Link
            to={`/tags/${data.tag.name}?tab=question`}
            className="btn btn-warning text-decoration-none py-0 px-2 me-2">
            #{data.tag.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TitleDetailPage;
