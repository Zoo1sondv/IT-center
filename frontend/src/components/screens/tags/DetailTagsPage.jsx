import TabsPage from '@components/_share/TabsPage';
import TagsPopular from '@components/_share/TagsPopular';
import tagsApi from '@services/api/tagsApi';
import { useMyContext } from '@store/context/store';
import _ from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardDocument from '../document/CardDocument';
import CardQuestion from '../question/CardQuestion';

function DetailTagsPage({ onSubmit }) {
  const location = useLocation();
  const { id } = useParams();
  const { setIsLoadingPage } = useMyContext();
  const [docData, setDocData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [tagData, setTagData] = useState([]);

  const menuTabs = useMemo(
    () => [
      { label: 'Câu hỏi', link: `${location.pathname}?tab=question` },
      { label: 'Bài viết', link: `${location.pathname}?tab=documentation` },
    ],
    [location.pathname],
  );

  const getTagsDetail = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const [docData, questionData, tagData] = await Promise.all([
        tagsApi.getTagForDocument({
          tag: id,
          order_by_created_at: 'desc',
        }),
        tagsApi.getTagForQuestion({
          tag: id,
          order_by_created_at: 'desc',
        }),
        tagsApi.getAllTag({
          order_by_created_at: 'desc',
        }),
      ]);

      setDocData(docData.data);
      setQuestionData(questionData.data);
      setTagData(tagData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [setIsLoadingPage, id]);

  useEffect(() => {
    getTagsDetail();

    return () => {
      setDocData([]);
      setQuestionData([]);
      setTagData([]);
    };
  }, [getTagsDetail]);

  return (
    <div className="d-flex flex-wrap mb-4">
      <div className="col-lg-9">
        <div className="m-1">
          <TabsPage menuTabs={menuTabs} />
          {location.search === '?tab=question' ? (
            questionData && !_.isEmpty(questionData) ? (
              <CardQuestion onSubmit={onSubmit} data={questionData} />
            ) : (
              <div className="bg-white rounded-2 p-2 mt-4">
                Không có câu hỏi nào.
              </div>
            )
          ) : docData && !_.isEmpty(docData) ? (
            <CardDocument onSubmit={onSubmit} data={docData} />
          ) : (
            <div className="bg-white rounded-2 p-2 mt-4">
              Không có bài viết nào.
            </div>
          )}
        </div>
      </div>
      <div className="col 12 col-lg-3">
        <div className="m-1 mt-4">
          <TagsPopular data={tagData} />
        </div>
      </div>
    </div>
  );
}

export default DetailTagsPage;
