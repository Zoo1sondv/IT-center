import { MenuPages, TitlePages } from '@components/index';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import videoApi from '@services/api/learnApi';
import { useMyContext } from '@store/context/store';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';

function PlaylistItemPage() {
  const currentPage = useRef();
  const { id } = useParams();
  const { setIsLoadingPage } = useMyContext();
  const [playlistData, setPlaylistData] = useState([]);
  const [videoPlay, setVideoPlay] = useState();
  const [loadMore, setLoadMore] = useState(true);

  const contents = {
    title: 'Tất cả khóa học',
    description:
      'Hàng trăm khóa học miễn phí được xây dựng bởi ITCenter và cộng đồng!',
  };

  const menu = useMemo(
    () => ({
      link1: '/learn',
      name1: 'Khoá học',
      name2: videoPlay?.snippet?.title || '',
    }),
    [videoPlay],
  );

  const getPlaylistItemPage = useCallback(async () => {
    try {
      if (!currentPage.current) setIsLoadingPage(true);
      const { data } = await videoApi.getPlaylistItem(id, currentPage.current);
      if (data) {
        if (!data?.nextPageToken) setLoadMore(false);
        setPlaylistData((prev) => [...prev, ...data.items]);
        setVideoPlay((prev) => (prev ? prev : data.items[0]));
        currentPage.current = data.nextPageToken;
      }
    } catch (error) {
      console.error('Failed to fetch video', error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [id, setIsLoadingPage]);

  useEffect(() => {
    getPlaylistItemPage();
  }, [getPlaylistItemPage]);

  const handleClickRoot = useCallback(() => {
    setVideoPlay();
  }, []);

  return (
    <div className="d-flex flex-column flex-fill x-3">
      <TitlePages contents={contents} isShowAction={false} />
      <div className="mx-4 mt-4">
        <MenuPages menu={menu} onClick={handleClickRoot} />
        {playlistData && videoPlay && (
          <div className="d-flex flex-wrap mt-5 mb-3">
            <div className="col-12 col-lg-8">
              <div className="video">
                <iframe
                  className="video__iframe"
                  src={`https://www.youtube.com/embed/${videoPlay.snippet.resourceId.videoId}?autoplay=1`}
                />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="ps-3">
                <div className="d-flex justify-content-center align-items-center fw-bold text-white bg-info py-2 rounded-top">
                  <FormatListBulletedIcon />
                  DANH SÁCH BÀI HỌC
                </div>
                <div className="playlist bg-white px-3 py-2 rounded-bottom">
                  <InfiniteScroll
                    dataLength={playlistData.length}
                    next={getPlaylistItemPage}
                    hasMore={loadMore}>
                    {playlistData.map((item, index) => (
                      <div
                        key={item.snippet.position}
                        className={'playlist__lesson'}
                        onClick={() => setVideoPlay(playlistData[index])}>
                        {item.snippet.position + 1}
                        {'. '}
                        {item.snippet.title}
                      </div>
                    ))}
                  </InfiniteScroll>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaylistItemPage;
