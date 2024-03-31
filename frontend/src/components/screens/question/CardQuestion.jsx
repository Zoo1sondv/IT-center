import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { randomNumber } from '@utils/numberCommon';
import 'moment/locale/vi';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function CardQuestion({ data = [], onSubmit }) {
  return (
    data.length > 0 &&
    data.map((item, index) => (
      <div key={index} className="d-flex bg-white mt-3 rounded-2">
        <div className="d-flex flex-nowrap justify-content-center align-items-center p-3">
          <div className="pe-3">
            <div className="d-flex justify-content-center align-items-center text-success">
              <span>{randomNumber(0, 5)}</span>
              <ArrowDropUpIcon />
            </div>
            <div className="d-flex justify-content-center align-items-center text-danger">
              <span>{randomNumber(0, 2)}</span>
              <ArrowDropDownIcon />
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center pe-3">
            {randomNumber(0, 3)}
            <div className="text-center">trả lời</div>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center text-danger">
            {randomNumber(0, 20)} <div className="text-center">lượt xem</div>
          </div>
        </div>
        <div className="d-flex flex-column p-3">
          <Link
            to={`/question/${item.id}`}
            onClick={() => onSubmit(item.title)}
            className="text-dark fw-bold text-decoration-none">
            <span>{item.title}</span>
          </Link>
          <div>
            <Link
              to={`/tags/${item.tag.name}?tab=question`}
              className="btn btn-warning text-decoration-none py-0 px-2 me-2">
              {item.tag.name}
            </Link>
          </div>

          <div className="d-flex  align-items-end mt-2">
            <Link to={`/users/${item.user.id}`} className="avatar">
              <img
                src={require('@assets/img/avatar.png')}
                alt="avatar"
                className="avatar__img"
              />
              <div className="avatar__name">{item.user.name}</div>
            </Link>
            <span>đã hỏi khoảng</span>
            <Moment locale="vi" fromNow className="ms-1">
              {item.created_at}
            </Moment>
          </div>
        </div>
      </div>
    ))
  );
}

export default CardQuestion;
