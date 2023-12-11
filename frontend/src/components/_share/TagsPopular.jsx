import React from 'react';
import { Link } from 'react-router-dom';

function TagsPopular({ data = [] }) {
  return (
    <div className="tags-popular">
      <div className="tags-popular__title">TAG PHỔ BIẾN</div>
      <div className="tags-popular__list">
        {data.map((tag, index) => (
          <div key={index} className="tags-popular__list__item">
            <Link
              className="btn btn-warning me-2 px-2 py-0"
              to={`/tags/${tag.name}?tab=question`}>
              {tag.name}
            </Link>
            <div className="tags-popular__list__item--count">x {tag.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagsPopular;
