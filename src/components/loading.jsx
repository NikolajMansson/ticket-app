import React from 'react';

const Loading = () => {
    return (
      <div className="card position-relative overflow-hidden">
            <div className="card-body">...</div>
              <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center bg-white justify-content-center">
                  <div className="spinner-border text-primary" role="status">
              </div>
            </div>
        </div>
    );
}

export default Loading;