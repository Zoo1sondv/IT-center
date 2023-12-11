import React, { createContext, useContext, useState } from 'react';

export const LearnStore = createContext();

export const useLearnContext = () => useContext(LearnStore);

export const LearnContextProvider = ({ children }) => {
  const [dataPlaylistItemContext, setDataPlaylistItemContext] = useState();

  const value = {
    dataPlaylistItemContext,
    setDataPlaylistItemContext,
  };

  return <LearnStore.Provider value={value}>{children}</LearnStore.Provider>;
};
