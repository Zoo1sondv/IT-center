import { CardDocument, CreateBox, TagsPopular } from '@components/index';
import documentApi from '@services/api/documentApi';
import tagsApi from '@services/api/tagsApi';
import { useMyContext } from '@store/context/store';
import React, { useCallback, useEffect, useState } from 'react';

function DocumentPage({ valueSearch, valueFilter, onSubmit }) {
  const { setIsLoadingPage } = useMyContext();
  const [docData, setDocData] = useState();
  const [tagData, setTagData] = useState([]);

  const getAllDocument = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const [documentData, tagData] = await Promise.all([
        documentApi.getSearchDocument({
          title: valueSearch,
          order_by_created_at: valueFilter,
        }),
        tagsApi.getAllTag({
          order_by_created_at: valueFilter,
        }),
      ]);
      setDocData(documentData.data);
      setTagData(tagData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [setIsLoadingPage, valueFilter, valueSearch]);

  useEffect(() => {
    getAllDocument();

    return () => {
      setDocData();
      setTagData([]);
    };
  }, [getAllDocument]);

  return (
    <div className="d-flex flex-wrap mt-4">
      <div className="col-sm-9">
        <div className="m-1">
          <CreateBox title="bài viết" />
          {docData && docData.length > 0 ? (
            <CardDocument data={docData} onSubmit={onSubmit} />
          ) : (
            <div className="bg-white rounded-2 p-2 mt-4">
              Không có bài viết nào.
            </div>
          )}
        </div>
      </div>
      <div className="col-12 col-sm-3">
        <div className="m-1">
          <TagsPopular data={tagData} />
        </div>
      </div>
    </div>
  );
}

export default DocumentPage;
