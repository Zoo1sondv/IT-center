import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ModeIcon from '@mui/icons-material/Mode';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
var classNames = require('classnames');

function ContactPage() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      title: '',
      content: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Họ tên là bắt buộc.'),
      email: Yup.string().required('Email là bắt buộc.'),
      phone: Yup.string().required('Số điện thoại là bắt buộc.'),
      title: Yup.string().required('Tiêu đề là bắt buộc.'),
      content: Yup.string().required('Nội dung là bắt buộc.'),
    }),
    onSubmit: async (values) => {
      console.log('values', values);
    },
  });

  return (
    <div className="d-flex flex-wrap">
      <div className="col-lg-6">
        <div className="m-4 bg-white">
          <div className="bg-info text-dark fw-bold p-2 rounded-2">
            <SendOutlinedIcon className="pe-1" /> GỬI THÔNG TIN LIÊN HỆ - GÓP Ý
          </div>
          <div className="p-3 fs-14">
            Góp ý hoặc liên hệ cho ITCenter nếu bạn có nhu cầu về dịch vụ, quảng
            cáo hoặc những thắc mắc khác.
          </div>
          <div className="p-3">
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-2">
                <div className="d-flex align-items-center text-dark mb-2">
                  <BadgeOutlinedIcon className="bg-info me-2 rounded-2" />
                  Họ tên:
                </div>
                <div
                  className={classNames('input-group h-50px', {
                    'is-valid':
                      formik.errors.fullName && formik.touched.fullName,
                  })}>
                  <input
                    name="fullName"
                    type="text"
                    className="form-control"
                    placeholder={'Tên của bạn'}
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.fullName && formik.touched.fullName && (
                  <div className="mt-2 text-danger">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>
              <div className="mt-2">
                <div className="d-flex align-items-center text-dark mb-2">
                  <EmailOutlinedIcon className="bg-info me-2 rounded-2" />
                  Email:
                </div>
                <div
                  className={classNames('input-group h-50px', {
                    'is-valid': formik.errors.email && formik.touched.email,
                  })}>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder={'Email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                  <div className="mt-2 text-danger">{formik.errors.email}</div>
                )}
              </div>
              <div className="mt-2">
                <div className="d-flex align-items-center text-dark mb-2">
                  <LocalPhoneOutlinedIcon className="bg-info me-2 rounded-2" />
                  Điện thoại:
                </div>
                <div
                  className={classNames('input-group h-50px', {
                    'is-valid': formik.errors.phone && formik.touched.phone,
                  })}>
                  <input
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder={'Số điện thoại'}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.phone && formik.touched.phone && (
                  <div className="mt-2 text-danger">{formik.errors.phone}</div>
                )}
              </div>
              <div className="mt-2">
                <div className="d-flex align-items-center text-dark mb-2">
                  <TitleOutlinedIcon className="bg-info me-2 rounded-2" />
                  Tiêu đề:
                </div>
                <div
                  className={classNames('input-group h-50px', {
                    'is-valid': formik.errors.title && formik.touched.title,
                  })}>
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder={'Tiêu đề'}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.title && formik.touched.title && (
                  <div className="mt-2 text-danger">{formik.errors.title}</div>
                )}
              </div>
              <div className="form-group mt-3">
                <div className="d-flex align-items-center text-dark mb-2">
                  <ModeIcon className="bg-info me-2 rounded-2" />
                  Nội dung:
                </div>
                <div
                  className={classNames('input-group h-50px', {
                    'is-valid': formik.errors.content && formik.touched.content,
                  })}>
                  <textarea
                    name="content"
                    className="p-3"
                    rows="5"
                    cols="50"
                    placeholder={`Nội dung của bạn`}
                    style={{ resize: 'none' }}
                    value={formik.values.content}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.content && formik.touched.content && (
                  <div className="mt-2 text-danger">
                    {formik.errors.content}
                  </div>
                )}
              </div>
              <div className="d-grid mt-3">
                <button
                  className="btn btn-info text-white btn-block py-2 fw-bold"
                  type="submit">
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="m-4 bg-white">
          <div className="bg-info text-dark fw-bold p-2 rounded-2">
            <InfoIcon className="pe-1" /> THÔNG TIN LIÊN HỆ KHÁC
          </div>
          <div className="p-3 fs-14">
            Mọi thông tin đóng góp ý kiến hoặc hỗ trợ, người dùng có thể liên hệ
            trực tiếp qua các kênh sau:
          </div>
          <div className="p-3">
            <div className="mb-3 text-truncate">
              <FacebookOutlinedIcon style={{ fontSize: '40px' }} />
              <Link
                to="https://www.facebook.com/doansonbn"
                target="_blank"
                className="text-decoration-none text-info">
                https://www.facebook.com/sondoanbn
              </Link>
            </div>
            <div className="mb-3 text-truncate">
              <LocalPhoneOutlinedIcon style={{ fontSize: '40px' }} />
              (+84) 347 200 992
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
