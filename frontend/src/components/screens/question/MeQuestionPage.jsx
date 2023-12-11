import questionApi from '@services/api/questionApi';
import { useMyContext } from '@store/context/store';
import { useSnackbar } from 'notistack';
import React, { useCallback, useEffect, useState } from 'react';
import CardQuestion from './CardQuestion';

function MeQuestionPage({ valueSearch, valueFilter, onSubmit }) {
  const { setIsLoadingPage } = useMyContext();
  const { enqueueSnackbar } = useSnackbar();
  const [meQuestionData, setMeQuestionData] = useState([]);

  const handleMeDocument = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const data = await questionApi.getMeQuestion({
        title: valueSearch,
        order_by_created_at: valueFilter,
      });
      setMeQuestionData(data);
    } catch (error) {
      setMeQuestionData([]);
      enqueueSnackbar(error.message, { variant: 'error' });
    } finally {
      setIsLoadingPage(false);
    }
  }, [enqueueSnackbar, setIsLoadingPage, valueFilter, valueSearch]);

  useEffect(() => {
    handleMeDocument();

    return () => {
      setMeQuestionData([]);
    };
  }, [handleMeDocument]);

  return (
    <div className="d-flex flex-column flex-fill">
      {meQuestionData && meQuestionData.length > 0 ? (
        <CardQuestion data={meQuestionData} onSubmit={onSubmit} />
      ) : (
        <div className="bg-white rounded-2 p-2 mt-4">Không có câu hỏi nào.</div>
      )}
    </div>
  );
}

export default MeQuestionPage;
