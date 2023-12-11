import EmailIcon from '@mui/icons-material/Email';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
var classNames = require('classnames');

function ForgotPasswordForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Định dạng email không hợp lệ')
        .required('Email là bắt buộc.'),
    }),
    onSubmit: async (values) => {
      if (onSubmit) {
        await onSubmit(values);
      }
    },
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
                <div className="mt-3  d-flex align-items-center fs-5">
                  Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một
                  liên kết để đặt lại mật khẩu của bạn.
                </div>
                <div className="form-group mt-2">
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

export default ForgotPasswordForm;
