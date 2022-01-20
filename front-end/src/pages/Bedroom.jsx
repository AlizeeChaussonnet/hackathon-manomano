import React from 'react';

const Bedroom = () => {
    return (
        <div>
        <div>
          <section className="py-48 bg-white flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div className="-mt-20 flex justify-end overflow-hidden" id="zoomIn">
                <img
                  className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                  src="https://i.pinimg.com/750x/00/62/6f/00626f929cc30cc32accaefa9d85f21f.jpg"
                />
              </div>
              <div className="flex justify-start overflow-hidden" id="zoomIn">
                <img
                  className="rounded-lg object-cover overflow-hidden"
                  src="https://i.pinimg.com/750x/66/c5/1d/66c51d6c87fbccb03766e741b6b41b9e.jpg"
                />
              </div>
              <div className="-mt-64 flex justify-start overflow-hidden" id="zoomIn">
                <img
                  className="rounded-lg object-cover overflow-hidden"
                  src="https://i.pinimg.com/750x/0f/22/56/0f2256f75b8c5503a2dbabc01090dd2a.jpg"
                />
              </div>
              <div className="flex justify-start -mr-28 ml-28 overflow-hidden" id="zoomIn">
                <img
                  className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                  src="https://i.pinimg.com/564x/e4/bc/07/e4bc07913934b6df55a54c469969d9bb.jpg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Bedroom;