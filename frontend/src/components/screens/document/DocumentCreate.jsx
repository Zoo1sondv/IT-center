import { CreateContent } from '@components/index';
import { useMyContext } from '@store/context/store';
import documentApi from '@services/api/documentApi';
import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

function DocumentCreate() {
  const { setIsLoadingPage } = useMyContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleCreateDocument = useCallback(
    async (values) => {
      try {
        setIsLoadingPage(true);
        const response = await documentApi.createDocument({
          title: values.title,
          content_post: values.content,
          tag: values.tag,
        });
        if (response) {
          enqueueSnackbar('Tạo bài viết thành công 🎉🎉🎉', {
            variant: 'success',
          });
          navigate('/documentation/me');
        }
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
        console.error(error);
      } finally {
        setIsLoadingPage(false);
      }
    },
    [enqueueSnackbar, navigate, setIsLoadingPage],
  );

  return <CreateContent title="bài viết" onSubmit={handleCreateDocument} />;
}

export default DocumentCreate;
