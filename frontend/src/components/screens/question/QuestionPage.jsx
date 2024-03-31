import { CardQuestion, CreateBox, TagsPopular } from '@components/index';
import questionApi from '@services/api/questionApi';
import tagsApi from '@services/api/tagsApi';
import { useMyContext } from '@store/context/store';
import React, { useCallback, useEffect, useState } from 'react';

function QuestionPage({ valueSearch, valueFilter, onSubmit }) {
  const { setIsLoadingPage } = useMyContext();
  const [questionData, setQuestionData] = useState([]);
  const [tagData, setTagData] = useState([]);

  const getAllQuestion = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const [questionData, tagData] = await Promise.all([
        questionApi.getSearchQuestion({
          title: valueSearch,
          order_by_created_at: valueFilter,
        }),
        tagsApi.getAllTag({
          order_by_created_at: valueFilter,
        }),
      ]);

      setQuestionData(questionData.data);
      setTagData(tagData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [setIsLoadingPage, valueFilter, valueSearch]);

  useEffect(() => {
    getAllQuestion();

    return () => {
      setQuestionData([]);
      setTagData([]);
    };
  }, [getAllQuestion]);

  return (
    <div className="d-flex flex-sm-column-reverse flex-lg-row flex-wrap mt-4">
      <div className="col-sm-12 col-lg-9">
        <div className="m-1">
          <CreateBox title="câu hỏi" />
          {questionData && questionData.length > 0 ? (
            <CardQuestion data={questionData} onSubmit={onSubmit} />
          ) : (
            <div className="bg-white rounded-2 p-2 mt-4">
              Không có câu hỏi nào.
            </div>
          )}
        </div>
      </div>
      <div className="col-sm-12 col-lg-3">
        <div className="m-1">
          <TagsPopular data={tagData} />
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
