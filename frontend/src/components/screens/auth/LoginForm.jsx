import { constantKeys } from '@config';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
var classNames = require('classnames');

function LoginForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Định dạng email không hợp lệ')
        .required('Email là bắt buộc.'),
      password: Yup.string()
        .matches(
          constantKeys.REGEX_PASSWORD,
          'Sử dụng 8 ký tự trở lên với sự kết hợp của các chữ cái và số.',
        )
        .required('Mật khẩu là bắt buộc.'),
    }),
    onSubmit: async (values) => {
      if (onSubmit) {
        await onSubmit(values);
      }
    },
  });

  const [isVisibility, setIsVisibility] = useState(false);

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
                <div className="form-group mt-2">
                  <label htmlFor="email" className="fs-5 text-dark mb-2">
                    Email:
                  </label>
                  <div
                    className={classNames('input-group h-50px', {
                      'is-valid': formik.errors.email && formik.touched.email,
                    })}>
                    <span className="input-group-text">
                      <EmailIcon />
                    </span>
                    <input
                      name="email"
                      type="email"
                      className="form-control fs-5"
                      placeholder="Vui lòng nhập email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.email && formik.touched.email && (
                    <div className="mt-2 text-danger">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password" className="fs-5 text-dark mb-2">
                    Mật Khẩu:
                  </label>
                  <div
                    className={classNames('input-group h-50px', {
                      'is-valid':
                        formik.errors.password && formik.touched.password,
                    })}>
                    <span className="input-group-text">
                      <LockIcon />
                    </span>
                    <input
                      name="password"
                      type={isVisibility ? 'text' : 'password'}
                      className="form-control border-end-0 fs-5"
                      placeholder="Vui lòng nhập mật khẩu"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <span
                      className="input-group-text bg-transparent cursor-pointer"
                      onClick={() => setIsVisibility(!isVisibility)}>
                      {isVisibility ? (
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
                <div className="mt-3 form-check d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input mt-0 me-2"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Duy trì đăng nhập?
                  </label>
                </div>
                <div className="d-grid mt-3">
                  <button
                    className="btn btn-info text-white btn-block py-2 fs-5 fw-bold"
                    type="submit">
                    Đăng nhập
                  </button>
                </div>
                <p className="text-center mt-3">
                  Bạn chưa có tài khoản?{' '}
                  <Link
                    to="/auth/register"
                    className="text-info text-decoration-none">
                    Đăng ký!
                  </Link>
                </p>
                <p className="text-center m-0">
                  <Link
                    to="/auth/forgot-password"
                    className="text-info text-decoration-none">
                    Quên mật khẩu?
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

export default LoginForm;
