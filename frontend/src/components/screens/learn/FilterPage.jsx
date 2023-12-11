import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import React from 'react';

function FilterPage({ menuFilter, onChange }) {
  const handleChoose = (e) => {
    if (onChange) {
      onChange(e.target.innerText.trim());
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mt-4">
        <div className="d-flex align-items-end fs-4 text-dark">
          <MenuBookOutlinedIcon style={{ fontSize: 38, marginRight: 8 }} />
          Khóa học
        </div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-dark rounded-4 d-flex align-items-center"
            id="topicBtn"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span className="ms-2 fw-bold d-md-flex">
              {menuFilter.title}:
              <span className="text-danger ms-1">
                {menuFilter.menus.length}
              </span>
            </span>
            <KeyboardArrowDownIcon className="d-md-flex" />
          </button>
          <div
            className="dropdown-menu dropdown-menu-end min-width-150 playlist"
            aria-labelledby="topicBtn">
            {menuFilter.menus.length > 0 &&
              menuFilter.menus.map((item, index) => (
                <div
                  className="dropdown-item d-flex align-items-center playlist__filter"
                  key={index}
                  value={item}
                  onClick={(e) => handleChoose(e)}>
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="d-flex flex-fill bg-secondary h-2px opacity-25 mt-2"></div>
    </>
  );
}

export default FilterPage;
