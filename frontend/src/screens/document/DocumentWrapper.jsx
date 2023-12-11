import {
  DetailDocumentPage,
  DocumentCreate,
  DocumentPage,
  FilterTabsPage,
  MeDocumentPage,
  MenuPages,
  SearchPages,
  TitlePages,
} from '@components/index';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import React, { useCallback, useMemo, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

function DocumentWrapper() {
  const location = useLocation();
  const [valueSearch, setValueSearch] = useState('');
  const [valueFilter, setValueFilter] = useState('desc');

  const contents = {
    title: 'Bài viết',
    description:
      'Kho tài liệu và bài viết được chia sẻ, đánh giá bởi cộng đồng',
  };

  const children = (
    <Link to="create" className="btn btn-info text-white fw-bold">
      <ControlPointIcon className="me-1" />
      Viết bài
    </Link>
  );

  const [menu, setMenu] = useState({
    link1: '/documentation',
    name1: 'Bài viết',
    name2: '',
  });

  const menuTabs = useMemo(
    () => [
      { label: 'Bài viết', link: '/documentation' },
      { label: 'Bài viết của tôi', link: '/documentation/me' },
      { label: 'Tạo bài viết', link: '/documentation/create' },
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
          placeHolder="Tìm bài viết..."
          isShowSearch={
            location.pathname === '/documentation' ||
            location.pathname === '/documentation/me'
          }
        />
        <FilterTabsPage
          menuTabs={menuTabs}
          menuFilter={menuFilter}
          onChange={handleChangeFilter}
          isShowFilter={
            location.pathname === '/documentation' ||
            location.pathname === '/documentation/me'
          }
        />
        <Routes>
          <Route
            path=""
            element={
              <DocumentPage
                valueSearch={valueSearch}
                valueFilter={valueFilter}
                onSubmit={handleClickCard}
              />
            }
          />
          <Route
            path="/me"
            element={
              <MeDocumentPage
                valueSearch={valueSearch}
                valueFilter={valueFilter}
                onSubmit={handleClickCard}
              />
            }
          />
          <Route
            path="/:id"
            element={<DetailDocumentPage onSubmit={handleClickRoot} />}
          />
          <Route path="/create" element={<DocumentCreate />} />
        </Routes>
      </div>
    </div>
  );
}

export default DocumentWrapper;
