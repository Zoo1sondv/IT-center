import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import React from 'react';

function CardPlaylistVideo({ dataCardPlaylist, handleClickPlaylistItem }) {
  const handleClickCardPlaylist = (dataItem) => {
    if (handleClickPlaylistItem) handleClickPlaylistItem(dataItem);
  };

  return (
    dataCardPlaylist !== [] &&
    dataCardPlaylist.map((dataItem) => (
      <div className={'col-12 col-sm-6 col-lg-4 col-xl-3'} key={dataItem.id}>
        <div
          className="card-playlist"
          onClick={() => handleClickCardPlaylist(dataItem)}>
          <img
            src={dataItem.snippet.thumbnails.medium.url}
            alt={dataItem.snippet.title}
          />
          <div className="content">
            <div className="content__title fs-5 fw-bold">
              {dataItem.snippet.title}
            </div>
            <div className="content__description">
              {dataItem.snippet.description}
            </div>
            <div className="content__extend">
              <div className="content__extend__count">
                <LibraryBooksIcon />
                <b className="ms-2 me-1">{dataItem.contentDetails.itemCount}</b>
                Bài học
              </div>
              <div className="content__extend__author">
                <PersonPinIcon className="me-2" />
                Tác Giả:
                <b className="ms-1">{dataItem.snippet.channelTitle}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

export default CardPlaylistVideo;
