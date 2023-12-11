import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ModeIcon from '@mui/icons-material/Mode';
import TitleIcon from '@mui/icons-material/Title';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
var classNames = require('classnames');

function CreateContent({ title = 'Câu hỏi', onSubmit }) {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      tag: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Tiêu đề là bắt buộc.'),
      content: Yup.string().required('Nội dung là bắt buộc.'),
      tag: Yup.string().required('Thẻ tag là bắt buộc.'),
    }),
    onSubmit: async (values) => {
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center flex-column bg-white my-4 px-3 rounded-2">
      <div className="text-dark fw-bold p-2 mt-4 fs-5">
        TẠO {title.toUpperCase()} MỚI
      </div>
      <div className="row mb-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-2">
            <div className="d-flex align-items-center text-dark mb-2">
              <TitleIcon className="bg-info me-2 rounded-2" />
              Tiêu đề:
            </div>
            <div
              className={classNames('input-group h-50px', {
                'is-valid': formik.errors.title && formik.touched.title,
              })}>
              <input
                name="title"
                type="title"
                className="form-control"
                placeholder={`Mô tả ngắn gọn, cụ thể về tiêu đề ${title} của bạn`}
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
                rows="10"
                cols="50"
                placeholder={`Nội dung ${title} của bạn`}
                style={{ resize: 'none' }}
                value={formik.values.content}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.content && formik.touched.content && (
              <div className="mt-2 text-danger">{formik.errors.content}</div>
            )}
          </div>

          <div className="form-group mt-3">
            <div className="d-flex align-items-center text-dark mb-2">
              <LocalOfferIcon className="bg-info me-2 rounded-2" />
              Thẻ Tag:
            </div>
            <div
              className={classNames('input-group h-50px', {
                'is-valid': formik.errors.tag && formik.touched.tag,
              })}>
              <input
                name="tag"
                className="form-control "
                placeholder={`Tag ${title}`}
                value={formik.values.tag}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.tag && formik.touched.tag && (
              <div className="mt-2 text-danger">{formik.errors.tag}</div>
            )}
          </div>

          <div className="d-grid mt-3">
            <button
              className="btn btn-info text-white btn-block py-2 fw-bold"
              type="submit">
              Gửi xét duyệt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContent;
