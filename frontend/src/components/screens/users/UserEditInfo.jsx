import BoyIcon from '@mui/icons-material/Boy';
import BuildIcon from '@mui/icons-material/Build';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useMyContext } from '@store/context/store';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import userApi from '@services/api/userApi';
import constantKeys from '@config/constantKeys';

function UserEditInfo() {
  const location = useLocation();
  const pathname = location.pathname;
  const { enqueueSnackbar } = useSnackbar();
  const { setIsLoadingPage } = useMyContext();
  const userInfo = useSelector((state) => state.user.current).user;

  const formik = useFormik({
    initialValues: {
      email: userInfo.email || '',
      username: userInfo.name || '',
      birthDay: '',
      gender: 'male',
      phone: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Định dạng email không hợp lệ')
        .required('Email là bắt buộc.'),
      username: Yup.string().required('Username là bắt buộc.'),
      birthDay: Yup.string().matches(
        constantKeys.REGEX_DATE,
        'Vui lòng nhập đúng định dạng',
      ),
      phone: Yup.string().matches(
        constantKeys.PHONE,
        'Vui lòng nhập đúng định dạng',
      ),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoadingPage(true);
        const res = await userApi.updateInfo({
          gender: values.gender,
          birth_date: values.birthDay,
          phone: values.phone,
        });
        if (res) {
          enqueueSnackbar('Cập nhật thành công 🎉🎉🎉', {
            variant: 'success',
          });
        }
      } catch (error) {
        enqueueSnackbar('Cập nhật thất bại, vui lòng điền đúng!', {
          variant: 'error',
        });
      } finally {
        setIsLoadingPage(false);
      }
    },
  });

  return (
    <div className="account-info d-flex flex-wrap">
      <div className="col-12 col-lg-3">
        <div className="m-4">
          <div className="fw-bold h5 bg-warning p-2 d-flex justify-content-center rounded-2">
            <BuildIcon className="pe-2" />
            CÀI ĐẶT
          </div>
          <div className="rounded-2 bg-white px-4 py-2">
            <Link
              to="/users/edit"
              className={classNames('account-info__item', {
                active: pathname === '/users/edit',
              })}>
              <div className="my-2">
                <InfoIcon className="pe-2" /> Thông tin
              </div>
            </Link>
            <Link
              to="/users/edit/info"
              className={classNames('account-info__item', {
                active: pathname === '/users/edit/info',
              })}>
              <div className="my-2">
                <EditIcon className="pe-2" /> Thay đổi thông tin
              </div>
            </Link>
            <Link
              to="/users/edit/password"
              className={classNames('account-info__item', {
                active: pathname === '/users/edit/password',
              })}>
              <div className="my-2">
                <PasswordIcon className="pe-2" /> Thay đổi mật khẩu
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="m-4">
          <div className="fw-bold h5 bg-warning p-2 d-flex justify-content-center rounded-2">
            THAY ĐỔI THÔNG TIN
          </div>
          <div className="rounded-2 bg-white px-4 py-2">
            <div className="card mt-4 mb-5">
              <div className="card-body">
                <div className="form-group mt-2">
                  <label htmlFor="email" className="fs-5 text-dark mb-2">
                    Email:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <EmailIcon />
                    </span>
                    <input
                      name="email"
                      type="email"
                      className="form-control fs-5"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      disabled
                    />
                  </div>
                  {formik.errors.email && formik.touched.email && (
                    <div className="mt-2 text-danger">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="username" className="fs-5 text-dark mb-2">
                    Username:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <PersonIcon />
                    </span>
                    <input
                      name="username"
                      type="text"
                      className="form-control fs-5"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      disabled
                    />
                  </div>
                  {formik.errors.username && formik.touched.username && (
                    <div className="mt-2 text-danger">
                      {formik.errors.username}
                    </div>
                  )}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="birthday" className="fs-5 text-dark mb-2">
                    Ngày sinh:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <CalendarMonthIcon />
                    </span>
                    <input
                      name="birthDay"
                      type="text"
                      placeholder="yyyy-mm-dd"
                      className="form-control fs-5"
                      value={formik.values.birthDay}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.birthDay && formik.touched.birthDay && (
                    <div className="mt-2 text-danger">
                      {formik.errors.birthDay}
                    </div>
                  )}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="gender" className="fs-5 text-dark mb-2">
                    Giới tính:
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <BoyIcon />
                    </span>
                    <select
                      name="gender"
                      type="text"
                      className="form-control fs-5"
                      onChange={formik.handleChange}
                      value={formik.values.gender}>
                      <option value="male">nam</option>
                      <option value="female">nu</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="phone" className="fs-5 text-dark mb-2">
                    Số điện thoại
                  </label>
                  <div className={'input-group h-50px'}>
                    <span className="input-group-text">
                      <PhoneIphoneIcon />
                    </span>
                    <input
                      name="phone"
                      type="text"
                      className="form-control fs-5"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.phone && formik.touched.phone && (
                    <div className="mt-2 text-danger">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
                <div className="d-grid mt-3">
                  <button
                    className="btn btn-info text-white btn-block py-2 fs-5 fw-bold"
                    onClick={() => formik.handleSubmit()}>
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEditInfo;
