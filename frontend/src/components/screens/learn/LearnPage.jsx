import {
  CardPlaylistVideo,
  FilterPage,
  MenuPages,
  SearchPages,
  TitlePages,
} from '@components/index';
import videoApi from '@services/api/learnApi';
import { useLearnContext } from '@store/context/screens/learnStore';
import { useMyContext } from '@store/context/store';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

function LearnPage() {
  const currentPage = useRef();
  const navigate = useNavigate();
  const { setIsLoadingPage } = useMyContext();
  const { setDataPlaylistItemContext } = useLearnContext();
  const [paramQuery, setParamQuery] = useState('học lập trình');
  const [dataCardPlaylist, setDataCardPlaylist] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const contents = {
    title: 'Tất cả khóa học',
    description:
      'Hàng trăm khóa học miễn phí được xây dựng bởi ITCenter và cộng đồng!',
  };

  const [menu, setMenu] = useState({
    link1: '/learn',
    name1: 'Khoá học',
    name2: '',
  });

  const menuFilter = {
    title: 'Chủ đề',
    menus: [
      'Lập Trình Java',
      'Lập Trình C++',
      'Lập Trình C# .Net',
      'Lập Trình PHP',
      'Lập Trình Python',
      'Lập Trình JavaScript',
      'Lập Trình Mobile',
      'Học Framework ReactJS',
      'Học Framework NodeJS',
      'Học Microsoft PowerPoint',
      'Học Microsoft Word',
      'Học Microsoft Excel',
      '',
    ],
  };

  const handleSearch = (value) => {
    currentPage.current = null;
    setDataCardPlaylist([]);
    setMenu((prev) => ({ ...prev, name2: value }));
    setParamQuery(value);
  };

  const handleClickRoot = () => {
    setMenu({ ...menu, name2: '' });
    setParamQuery('học lập trình');
  };

  const handleClickPlaylistItem = (dataPlaylistItem) => {
    setDataPlaylistItemContext(dataPlaylistItem);
    navigate(dataPlaylistItem.id);
  };

  const handleChangeFilter = (value) => {
    setDataCardPlaylist([]);
    currentPage.current = null;
    setMenu((prev) => ({ ...prev, name2: value }));
    setParamQuery(value);
  };

  const getSearchPlaylist = useCallback(async () => {
    try {
      if (!currentPage.current) setIsLoadingPage(true);
      const { data } = await videoApi.getSearch(
        paramQuery,
        currentPage.current,
      );
      if (data) {
        currentPage.current = data.nextPageToken;
        if (!data?.nextPageToken) setLoadMore(false);

        const results = await Promise.all(
          data.items.map((playlist) =>
            videoApi
              .getPlaylist(playlist.id.playlistId)
              .then(({ data }) => data.items[0]),
          ),
        );
        if (results) {
          setDataCardPlaylist((prev) => [...prev, ...results]);
        }
      }
    } catch (error) {
      console.error('Failed to fetch video', error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [paramQuery, setIsLoadingPage]);

  useEffect(() => {
    getSearchPlaylist();

    return () => {};
  }, [getSearchPlaylist]);

  return (
    <div className="d-flex flex-column flex-fill x-3">
      <TitlePages contents={contents} isShowAction={false} />
      <div className="mx-4 mt-4">
        <MenuPages menu={menu} onClick={handleClickRoot} />
        <SearchPages
          className={'mt-4'}
          onSubmit={handleSearch}
          placeHolder="Tìm khóa học..."
        />
        <FilterPage menuFilter={menuFilter} onChange={handleChangeFilter} />
        {dataCardPlaylist.length > 0 && (
          <InfiniteScroll
            dataLength={dataCardPlaylist.length}
            next={getSearchPlaylist}
            hasMore={loadMore}>
            <div className="d-flex flex-wrap mt-4 justify-content-around">
              <CardPlaylistVideo
                dataCardPlaylist={dataCardPlaylist}
                handleClickPlaylistItem={handleClickPlaylistItem}
              />
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}

export default LearnPage;
