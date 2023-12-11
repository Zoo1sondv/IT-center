import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingPage() {
  return (
    <div className="d-flex align-items-center justify-content-center position-fixed top-0 left-0 bg-secondary opacity-75 h-100 w-100 z-index-100">
      <Spinner
        animation="border"
        role="status"
        style={{ width: '8rem', height: '8rem', color: '#ffffff' }}></Spinner>
    </div>
  );
}

export default LoadingPage;
