import {
  DetailQuestionPage,
  FilterTabsPage,
  MeQuestionPage,
  MenuPages,
  QuestionCreate,
  QuestionPage,
  SearchPages,
  TitlePages,
} from '@components/index';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import React, { useCallback, useMemo, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

function QuestionWrapper() {
  const location = useLocation();
  const [valueSearch, setValueSearch] = useState('');
  const [valueFilter, setValueFilter] = useState('desc');

  const contents = {
    title: 'Hỏi đáp',
    description: 'Chia sẻ kiến thức, cùng nhau phát triển',
  };

  const children = (
    <Link to="create" className="btn btn-info text-white fw-bold">
      <HelpOutlineIcon className="me-1" />
      Đặt câu hỏi
    </Link>
  );

  const [menu, setMenu] = useState({
    link1: '/question',
    name1: 'Hỏi đáp',
    name2: '',
  });

  const menuTabs = useMemo(
    () => [
      { label: 'Tất cả', link: '/question' },
      { label: 'Câu hỏi của tôi', link: '/question/me' },
      { label: 'Đặt câu hỏi', link: '/question/create' },
    ],
    [],
  );

  const menuFilter = useMemo(
    () => ({
      title: 'Sắp xếp',
      menus: [
        { label: 'Mới nhất', value: 'desc' },
        { label: 'Cũ nhất', value: 'asc' },
      ],
    }),
    [],
  );

  const handleClickRoot = useCallback(() => {
    setMenu((prev) => ({ ...prev, name2: '' }));
  }, []);

  const handleClickCard = useCallback((value) => {
    setMenu((prev) => ({ ...prev, name2: value }));
  }, []);

  const handleSearch = useCallback((value) => {
    setValueSearch(value);
  }, []);

  const handleChangeFilter = useCallback((value) => {
    setValueFilter(value);
  }, []);

  return (
    <div className="d-flex flex-column flex-fill x-3 min-vh-100">
      <TitlePages contents={contents} children={children} />
      <div className="mx-4 mt-4">
        <MenuPages menu={menu} onClick={handleClickRoot} />
        <SearchPages
          className={'mt-4'}
          onSubmit={handleSearch}
          placeHolder="Tìm câu hỏi..."
          isShowSearch={
            location.pathname === '/question' ||
            location.pathname === '/question/me'
          }
        />
        <FilterTabsPage
          menuTabs={menuTabs}
          menuFilter={menuFilter}
          onChange={handleChangeFilter}
          isShowFilter={
            location.pathname === '/question' ||
            location.pathname === '/question/me'
          }
        />
        <Routes>
          <Route
            path=""
            element={
              <QuestionPage
                valueSearch={valueSearch}
                valueFilter={valueFilter}
                onSubmit={handleClickCard}
              />
            }
          />
          <Route
            path="/me"
            element={
              <MeQuestionPage
                valueSearch={valueSearch}
                valueFilter={valueFilter}
                onSubmit={handleClickCard}
              />
            }
          />
          <Route
            path="/:id"
            element={<DetailQuestionPage onSubmit={handleClickRoot} />}
          />
          <Route path="/create" element={<QuestionCreate />} />
        </Routes>
      </div>
    </div>
  );
}

export default QuestionWrapper;
