import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function TabsPage({ menuTabs, className }) {
  const location = useLocation();
  const pathname = location.pathname;
  const query = location.search;

  return (
    <div className={classNames('menu-tabs', { [className]: className })}>
      <div className="tabs">
        {menuTabs.map((item, index) => (
          <div
            key={index}
            className={classNames('tabs__tab', {
              'tabs__tab--active': pathname + query === item.link,
            })}>
            <Link
              to={item.link}
              className={classNames({
                'tabs__tab--active': pathname + query === item.link,
              })}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabsPage;
