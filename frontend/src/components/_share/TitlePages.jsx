import classNames from 'classnames';
import React from 'react';

function TitlePages({ isShowAction = true, contents, children }) {
  return (
    <div className="title-pages">
      <div
        className={classNames('p-5 d-lg-flex align-items-center', {
          'justify-content-between': isShowAction,
          'justify-content-center': !isShowAction,
        })}>
        <div
          className={classNames({
            'd-flex flex-column align-items-center': !isShowAction,
          })}>
          <h1 className="h2 text-white fw-bold mb-10">{contents.title}</h1>
          <h2 className="h5 text-white opacity-75">{contents.description}</h2>
        </div>
        {isShowAction && (
          <div className="opacity-75">{children ? children : null}</div>
        )}
      </div>
    </div>
  );
}

export default TitlePages;
