import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function FilterTabsPage({
  menuTabs,
  menuFilter,
  onChange,
  isShowFilter = true,
}) {
  const location = useLocation();
  const pathname = location.pathname;
  const [chooseFilter, setChooseFilter] = useState(menuFilter.menus[0].label);

  const handleChoose = (value) => {
    if (onChange) {
      setChooseFilter(value.label);
      onChange(value.value);
    }
  };

  return (
    <div className="menu-tabs">
      <div>
        <div className="tabs">
          {menuTabs.map((item, index) => (
            <div
              key={index}
              className={classNames('tabs__tab', {
                'tabs__tab--active': pathname === item.link,
              })}>
              <Link
                to={item.link}
                className={classNames({
                  'tabs__tab--active': pathname === item.link,
                })}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {isShowFilter && (
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn d-flex align-items-center p-0 border-0"
            id="topicBtn"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span className="ms-2 fw-bold d-md-flex">
              {menuFilter.title}:
              <span className="text-danger ms-1">{chooseFilter}</span>
            </span>
            <KeyboardArrowDownIcon className="d-md-flex" />
          </button>
          <div
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="topicBtn">
            {menuFilter.menus.length > 0 &&
              menuFilter.menus.map((item, index) => (
                <div
                  className="dropdown-item d-flex align-items-center playlist__filter"
                  key={index}
                  value={item}
                  onClick={() => handleChoose(item)}>
                  {item.label}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterTabsPage;
