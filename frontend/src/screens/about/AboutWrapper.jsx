import {
  AboutPage,
  ContactPage,
  DonatePage,
  SupporterPage,
  TabsPage,
  TitlePages,
} from '@components/index';
import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

function AboutWrapper() {
  const contents = {
    title: 'Về ITcenter',
    description:
      'Vì một nền giáo dục miễn phí cho bất cứ ai, ở bất cứ nơi nào.',
  };

  const menuTabs = useMemo(
    () => [
      { label: 'Về ITCenter', link: '/about' },
      { label: 'Người ủng hộ', link: '/about/supporters' },
      { label: 'Liên hệ - Góp ý', link: '/about/contact' },
      { label: 'Tài trợ', link: '/about/donate' },
    ],
    [],
  );

  return (
    <div className="d-flex flex-column flex-fill x-3 min-vh-100">
      <TitlePages contents={contents} isShowAction={false} />
      <TabsPage menuTabs={menuTabs} className={'justify-content-center m-0'} />
      <Routes>
        <Route path="" element={<AboutPage />} />
        <Route path="/supporters" element={<SupporterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </div>
  );
}

export default AboutWrapper;
