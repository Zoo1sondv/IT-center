import Comment from '@components/_share/Comment';
import InfoMini from '@components/_share/InfoMini';
import TitleDetailPage from '@components/_share/TitleDetailPage';
import questionApi from '@services/api/questionApi';
import { useMyContext } from '@store/context/store';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailQuestionPage({ onSubmit }) {
  const { id } = useParams();
  const { setIsLoadingPage } = useMyContext();
  const [questionDetailData, setQuestionDetailData] = useState({});

  const getQuestionDetailData = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const data = await questionApi.getDetailQuestion({ id: id });
      setQuestionDetailData(data);
    } catch (error) {
      setQuestionDetailData({});
      console.error(error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [id, setIsLoadingPage]);

  useEffect(() => {
    getQuestionDetailData();

    return () => {
      setQuestionDetailData({});
      onSubmit();
    };
  }, [getQuestionDetailData, onSubmit]);

  return (
    !_.isEmpty(questionDetailData) && (
      <div className="d-flex flex-wrap my-4">
        <div className="col-lg-9">
          <div className="m-1">
            <TitleDetailPage data={questionDetailData} />
            <div className="d-flex flex-fill bg-secondary h-2px opacity-25"></div>
            <div className="bg-white p-4">{questionDetailData.content}</div>
            <Comment className="my-4" />
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="m-1">
            <InfoMini />
          </div>
        </div>
      </div>
    )
  );
}

export default DetailQuestionPage;
