import { LearnPage, PlaylistItemPage } from '@components/index';
import { LearnContextProvider } from '@store/context/screens/learnStore';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function LearnWrapper() {
  return (
    <LearnContextProvider>
      <Routes>
        <Route path="" element={<LearnPage />} />
        <Route path="/:id" element={<PlaylistItemPage />} />
      </Routes>
    </LearnContextProvider>
  );
}

export default LearnWrapper;
