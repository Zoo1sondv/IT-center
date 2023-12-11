import Comment from '@components/_share/Comment';
import InfoMini from '@components/_share/InfoMini';
import TitleDetailPage from '@components/_share/TitleDetailPage';
import documentApi from '@services/api/documentApi';
import { useMyContext } from '@store/context/store';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailDocumentPage({ onSubmit }) {
  const { id } = useParams();
  const { setIsLoadingPage } = useMyContext();
  const [documentDetailData, setDocumentDetailData] = useState({});

  const getDocumentDetailData = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const data = await documentApi.getDetailDocument({ id: id });
      setDocumentDetailData(data);
    } catch (error) {
      setDocumentDetailData({});
      console.error(error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [id, setIsLoadingPage]);

  useEffect(() => {
    getDocumentDetailData();

    return () => {
      setDocumentDetailData({});
      onSubmit();
    };
  }, [getDocumentDetailData, onSubmit]);

  return (
    !_.isEmpty(documentDetailData) && (
      <div className="d-flex flex-wrap my-4">
        <div className="col-lg-9">
          <div className="m-1">
            <TitleDetailPage data={documentDetailData} />
            <div className="d-flex flex-fill bg-secondary h-2px opacity-25"></div>
            <div className="bg-white p-4">{documentDetailData.content}</div>
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

export default DetailDocumentPage;
