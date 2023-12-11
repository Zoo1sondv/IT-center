import tagsApi from '@services/api/tagsApi';
import { useMyContext } from '@store/context/store';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function TagsPage({ onSubmit }) {
  const { setIsLoadingPage } = useMyContext();
  const [tagData, setTagData] = useState([]);

  const getAllTags = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const tagData = await tagsApi.getAllTag({
        order_by_created_at: 'desc',
      });
      setTagData(tagData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [setIsLoadingPage]);

  useEffect(() => {
    getAllTags();

    return () => {
      setTagData([]);
    };
  }, [getAllTags]);

  return (
    <div className="d-flex flex-wrap">
      {!_.isEmpty(tagData) &&
        tagData.map((tag, index) => (
          <div className="col-12 col-sm-6 col-lg-3 col-xl-2" key={index}>
            <div className="row mt-4 bg-white rounded-2 m-2 p-2">
              <Link
                to={`/tags/${tag.name}?tab=question`}
                onClick={() => onSubmit(tag.name)}
                className="btn btn-warning text-decoration-none text-nowrap py-0 px-2 me-2">
                Tag: {tag.name}
              </Link>
              <div className="d-flex flex-column justify-content-center align-items-center p-2">
                <div>
                  <b>{tag.tag_for_qa}</b> - Câu hỏi
                </div>
                <div>
                  <b>{tag.tag_for_post}</b> - Bài viết
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TagsPage;
