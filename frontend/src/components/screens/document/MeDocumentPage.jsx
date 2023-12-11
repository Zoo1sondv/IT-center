import React, { useCallback, useEffect, useState } from 'react';
import CardDocument from './CardDocument';
import { useMyContext } from '@store/context/store';
import documentApi from '@services/api/documentApi';
import { useSnackbar } from 'notistack';

function MeDocumentPage({ valueSearch, valueFilter, onSubmit }) {
  const { setIsLoadingPage } = useMyContext();
  const { enqueueSnackbar } = useSnackbar();
  const [meDocumentData, setMeDocumentData] = useState([]);

  const getMeDocument = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const data = await documentApi.getMeDocument({
        title: valueSearch,
        order_by_created_at: valueFilter,
      });
      setMeDocumentData(data.data);
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    } finally {
      setIsLoadingPage(false);
    }
  }, [enqueueSnackbar, setIsLoadingPage, valueFilter, valueSearch]);

  useEffect(() => {
    getMeDocument();

    return () => {
      setMeDocumentData([]);
    };
  }, [getMeDocument]);

  return (
    <div className="d-flex flex-column flex-fill">
      {meDocumentData && meDocumentData?.length > 0 ? (
        <CardDocument data={meDocumentData} onSubmit={onSubmit} />
      ) : (
        <div className="bg-white rounded-2 p-2 mt-4">
          Không có bài viết nào.
        </div>
      )}
    </div>
  );
}

export default MeDocumentPage;
