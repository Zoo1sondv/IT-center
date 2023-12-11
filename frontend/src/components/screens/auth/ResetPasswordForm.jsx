import constantKeys from '@config/constantKeys';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
var classNames = require('classnames');

function ResetPasswordForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          constantKeys.REGEX_PASSWORD,
          'Sử dụng 8 ký tự trở lên với sự kết hợp của các chữ cái và số.',
        )
        .required('Mật khẩu là bắt buộc.'),
      passwordConfirm: Yup.string()
        .matches(
          constantKeys.REGEX_PASSWORD,
          'Sử dụng 8 ký tự trở lên với sự kết hợp của các chữ cái và số.',
        )
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
        .required('Nhập lại mật khẩu là bắt buộc.'),
    }),
    onSubmit: async (values) => {
      if (onSubmit) {
        await onSubmit(values);
      }
    },
  });

  const [isVisibility, setIsVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mt-5">
            <Link to="/">
              <img
                className="opacity-75"
                height={75}
                src={require('../../../assets/img/ITCenterBlack.png')}
              />
            </Link>
          </div>
          <div className="card mt-4 mb-5">
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-3 fw-bold d-flex align-items-center justify-content-center fs-4">
                  THAY ĐỔI MẬT KHẨU.
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password" className="fs-5 text-dark mb-2">
                    Mật Khẩu Mới:
                  </label>
                  <div
                    className={classNames('input-group h-50px', {
                      'is-valid': formik.errors.email && formik.touched.email,
                    })}>
                    <span className="input-group-text">
                      <LockIcon />
                    </span>
                    <input
                      name="password"
                      type={isVisibility.password ? 'text' : 'password'}
                      className="form-control border-end-0 fs-5"
                      placeholder="Vui lòng nhập mật khẩu mới"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <span
                      className="input-group-text bg-transparent cursor-pointer"
                      onClick={() =>
                        setIsVisibility({
                          ...isVisibility,
                          password: !isVisibility.password,
                        })
                      }>
                      {isVisibility.password ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </span>
                  </div>
                  {formik.errors.password && formik.touched.password && (
                    <div className="mt-2 text-danger">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label
                    htmlFor="passwordConfirm"
                    className="fs-5 text-dark mb-2">
                    Nhập Lại Mật Khẩu:
                  </label>
                  <div
                    className={classNames('input-group h-50px', {
                      'is-valid':
                        formik.errors.passwordConfirm &&
                        formik.touched.passwordConfirm,
                    })}>
                    <span className="input-group-text">
                      <LockIcon />
                    </span>
                    <input
                      name="passwordConfirm"
                      type={isVisibility.passwordConfirm ? 'text' : 'password'}
                      className="form-control border-end-0 fs-5"
                      placeholder="Vui lòng nhập lại mật khẩu"
                      value={formik.values.passwordConfirm}
                      onChange={formik.handleChange}
                    />
                    <span
                      className="input-group-text bg-transparent cursor-pointer"
                      onClick={() =>
                        setIsVisibility({
                          ...isVisibility,
                          passwordConfirm: !isVisibility.passwordConfirm,
                        })
                      }>
                      {isVisibility.passwordConfirm ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </span>
                  </div>
                  {formik.errors.passwordConfirm &&
                    formik.touched.passwordConfirm && (
                      <div className="mt-2 text-danger">
                        {formik.errors.passwordConfirm}
                      </div>
                    )}
                </div>
                <div className="d-grid mt-3">
                  <button
                    className="btn btn-info text-white btn-block py-2 fs-5 fw-bold"
                    type="submit">
                    Xác Nhận
                  </button>
                </div>
                <p className="text-center mt-3">
                  Bạn đã có tài khoản?{' '}
                  <Link
                    to="/auth/login"
                    className="text-info text-decoration-none">
                    Đăng Nhập!
                  </Link>
                </p>
                <p className="text-center m-0">
                  <Link
                    to="/auth/register"
                    className="text-info text-decoration-none">
                    Đăng ký tài khoản mới?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
