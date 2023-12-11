import constantKeys from '@config/constantKeys';
import BuildIcon from '@mui/icons-material/Build';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import PasswordIcon from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import userApi from '@services/api/userApi';
import { useMyContext } from '@store/context/store';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

function UserEditPassword() {
  const location = useLocation();
  const pathname = location.pathname;
  const { enqueueSnackbar } = useSnackbar();
  const { setIsLoadingPage } = useMyContext();

  const formik = useFormik({
    initialValues: {
      passwordOld: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      passwordOld: Yup.string()
        .matches(
          constantKeys.REGEX_PASSWORD,
          'Sử dụng 8 ký tự trở lên với sự kết hợp của các chữ cái và số.',
        )
        .required('Mật khẩu là bắt buộc.'),
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
      console.log(values);
      try {
        setIsLoadingPage(true);
        const res = await userApi.changePassword({
          old_password: values.passwordOld,
          new_password: values.password,
          new_password_confirmation: values.passwordConfirm,
        });
        if (res) {
          enqueueSnackbar('Thay đổi thành công 🎉🎉🎉', {
            variant: 'success',
          });
        }
      } catch (error) {
        enqueueSnackbar('Thay đổi thất bại, vui lòng điền đúng!', {
          variant: 'error',
        });
      } finally {
        setIsLoadingPage(false);
      }
    },
  });

  const [isVisibility, setIsVisibility] = useState({
    passwordOld: false,
    password: false,
    confirmPassword: false,
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
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group mt-3">
                    <label
                      htmlFor="passwordOld"
                      className="fs-5 text-dark mb-2">
                      Mật Khẩu cũ:
                    </label>
                    <div
                      className={classNames('input-group h-50px', {
                        'is-valid':
                          formik.errors.passwordOld &&
                          formik.touched.passwordOld,
                      })}>
                      <span className="input-group-text">
                        <LockIcon />
                      </span>
                      <input
                        name="passwordOld"
                        type={isVisibility.passwordOld ? 'text' : 'password'}
                        className="form-control border-end-0 fs-5"
                        placeholder="Vui lòng nhập mật khẩu cũ"
                        value={formik.values.passwordOld}
                        onChange={formik.handleChange}
                      />
                      <span
                        className="input-group-text bg-transparent cursor-pointer"
                        onClick={() =>
                          setIsVisibility({
                            ...isVisibility,
                            passwordOld: !isVisibility.passwordOld,
                          })
                        }>
                        {isVisibility.passwordOld ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </span>
                    </div>
                    {formik.errors.passwordOld &&
                      formik.touched.passwordOld && (
                        <div className="mt-2 text-danger">
                          {formik.errors.passwordOld}
                        </div>
                      )}
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password" className="fs-5 text-dark mb-2">
                      Mật Khẩu mới:
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
                      Nhập Lại Mật Khẩu mới:
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
                        type={
                          isVisibility.passwordConfirm ? 'text' : 'password'
                        }
                        className="form-control border-end-0 fs-5"
                        placeholder="Vui lòng nhập lại mật khẩu mới"
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
                </form>
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

export default UserEditPassword;
