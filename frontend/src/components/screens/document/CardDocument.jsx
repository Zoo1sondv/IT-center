import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import { randomNumber } from '@utils/numberCommon';
import 'moment/locale/vi';
import Moment from 'react-moment';

function CardDocument({ data = [], onSubmit }) {
  return data.map((item, index) => (
    <div
      key={index}
      className="d-flex align-items-center bg-white mt-3 px-3 rounded-2">
      <div className="d-flex flex-column align-items-center pe-2">
        <img
          src={require('@assets/img/avatar.png')}
          alt="avatar"
          style={{ width: '40px' }}
          className="avatar__img"
        />
        <div className="avatar__name mt-2 text-center">
          {item?.user?.name || ''}
        </div>
      </div>
      <div className="d-flex flex-column p-3">
        <div className="d-flex align-items-center">
          <Link
            to={`/documentation/${item.id}`}
            onClick={() => onSubmit(item.title)}
            className="text-dark fw-bold text-decoration-none text-nowrap pe-2">
            <span>{item.title}</span>
          </Link>
          <Link
            to={`/tags/${item.tag.name}?tab=document`}
            className="btn btn-warning text-decoration-none text-nowrap py-0 px-2 me-2">
            {item.tag.name}
          </Link>
        </div>

        <div className="d-flex align-items-center">
          <Link
            to={`/documentation/${item.id}`}
            className="text-secondary text-decoration-none pe-2">
            <span className="fs-14">{item.content}</span>
          </Link>
        </div>

        <div className="d-flex align-items-end mt-2 fs-12">
          <div className={'d-flex my-1 fs-12'}>
            <div className="d-flex justify-content-center align-items-center text-success">
              <span>{randomNumber(0, 10)}</span>
              <ArrowDropUpIcon />
            </div>
            <div className="d-flex justify-content-center align-items-center text-danger">
              <span>{randomNumber(0, 10)}</span>
              <ArrowDropDownIcon />
            </div>
            <span className="d-flex align-items-center mx-2">
              <VisibilityOutlinedIcon className="pe-1" />
              <span>{randomNumber(0, 100)}</span>
            </span>
            <span className="d-flex align-items-center me-2">
              <CommentOutlinedIcon className="pe-1" />
              <span>{randomNumber(0, 5)}</span>
            </span>
            <span className="d-flex flex-wrap align-items-center me-2">
              <SaveAsOutlinedIcon className="pe-1" />
              <Moment locale="vi" fromNow className="ms-1">
                {item.created_at}
              </Moment>
            </span>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default CardDocument;
