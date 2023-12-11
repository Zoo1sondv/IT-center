import {
  DetailTagsPage,
  MenuPages,
  TagsPage,
  TitlePages,
} from '@components/index';
import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function TagsWrapper() {
  // const [valueSearch, setValueSearch] = useState('');

  const contents = {
    title: 'Tags',
    description: 'Từ khóa phân loại câu hỏi, bài viết.',
  };

  const [menu, setMenu] = useState({
    link1: '/tags',
    name1: 'Tags',
    name2: '',
  });

  const handleClickRoot = () => {
    setMenu({ ...menu, name2: '' });
  };

  const handleClickCard = useCallback((value) => {
    setMenu((prev) => ({ ...prev, name2: value }));
  }, []);

  // const handleSearch = useCallback(() => {
  //   (value) => {
  //     setValueSearch(value);
  //   };
  // }, []);

  return (
    <div className="d-flex flex-column flex-fill x-3 min-vh-100">
      <TitlePages contents={contents} isShowAction={false} />
      <div className="mx-4 mt-4">
        <MenuPages menu={menu} onClick={handleClickRoot} />
        {/* <SearchPages
          className={'mt-4'}
          onSubmit={handleSearch}
          placeHolder="Tìm tag..."
        /> */}
        <Routes>
          <Route path="" element={<TagsPage onSubmit={handleClickCard} />} />
          <Route
            path="/:id"
            element={<DetailTagsPage onSubmit={handleClickCard} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default TagsWrapper;
