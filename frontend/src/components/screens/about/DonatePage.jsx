import React from 'react';

function DonatePage() {
  return (
    <div className="px-5 py-4 bg-white">
      <h3 className="text-center text-dark fw-bold my-4">
        ỦNG HỘ CHUYỂN KHOẢN TRỰC TIẾP
      </h3>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="m-2">
          <img
            src={require('@assets/img/donatevcb.jpg')}
            alt="donate tp back"
            style={{ width: '250px' }}
          />
        </div>
        <div className="m-2">
          <img
            src={require('@assets/img/donatetp.jpg')}
            alt="donate tp back"
            style={{ width: '250px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default DonatePage;
