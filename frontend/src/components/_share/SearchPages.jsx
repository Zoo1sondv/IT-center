import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function SearchPages({
  onSubmit,
  placeHolder,
  className,
  isShowSearch = true,
}) {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: async (values) => {
      const search = values.search.trim();
      formik.setFieldValue('search', search);
      if (onSubmit) {
        await onSubmit(search);
      }
    },
  });

  return (
    isShowSearch && (
      <div className={classNames('form-group', { [className]: className })}>
        <div className="input-group h-50px">
          <input
            name="search"
            type="text"
            className="form-control border-end-0 fs-5"
            value={formik.values.search}
            placeholder={placeHolder}
            onChange={formik.handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                formik.handleSubmit();
              }
            }}
          />
          <span
            className="input-group-text cursor-pointer"
            onClick={formik.handleSubmit}>
            <SearchIcon />
          </span>
        </div>
      </div>
    )
  );
}

export default SearchPages;
