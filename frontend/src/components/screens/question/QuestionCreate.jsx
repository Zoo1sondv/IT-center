import { CreateContent } from '@components/index';
import questionApi from '@services/api/questionApi';
import { useMyContext } from '@store/context/store';
import { useSnackbar } from 'notistack';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionCreate() {
  const { setIsLoadingPage } = useMyContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleCreateDocument = useCallback(
    async (values) => {
      try {
        setIsLoadingPage(true);
        const response = await questionApi.createQuestion({
          title: values.title,
          content_qa: values.content,
          tag: values.tag,
        });
        if (response) {
          enqueueSnackbar('Đặt câu hỏi thành công 🎉🎉🎉', {
            variant: 'success',
          });
          navigate('/question/me');
        }
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
      } finally {
        setIsLoadingPage(false);
      }
    },
    [enqueueSnackbar, navigate, setIsLoadingPage],
  );

  return <CreateContent title="câu hỏi" onSubmit={handleCreateDocument} />;
}

export default QuestionCreate;
