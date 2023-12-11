import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/vi';

function CardUser({ data }) {
  return (
    <div className="d-flex flex-wrap mt-2">
      {data &&
        data.map((user, index) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
            <div className="d-flex align-items-center bg-white p-2 m-2 rounded-2">
              <Link
                to={`/users/${user.id}`}
                className="d-flex flex-column align-items-center pe-2">
                <img
                  src={require('@assets/img/avatar.png')}
                  alt="avatar"
                  style={{ width: '40px' }}
                  className="avatar__img"
                />
              </Link>
              <div className="d-flex flex-column">
                <Link
                  to="/users/id"
                  className=" mt-2 text-info text-decoration-none">
                  {user.name}
                </Link>
                <div className="mt-2">
                  <b>0</b> điểm
                </div>

                <div style={{ fontSize: '12px' }} className="d-flex my-1">
                  <span className="d-flex flex-wrap align-items-center me-2">
                    <SaveAsOutlinedIcon className="pe-1" />
                    khoảng
                    <Moment locale="vi" fromNow className="ms-1">
                      {user.created_at}
                    </Moment>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CardUser;
