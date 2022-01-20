import React from 'react';

const Kitchen = () => {
    return (
        <div>
        <div>
          <section className="py-48 bg-white flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div className="-mt-20 flex justify-end">
                <img
                  className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                  src="https://i.pinimg.com/750x/6d/b0/28/6db02804b04b4a4e124d98e520f039cd.jpg"
                />
              </div>
              <div className="flex justify-start">
                <img
                  className="rounded-lg object-cover overflow-hidden"
                  src="https://i.pinimg.com/750x/3d/5a/ef/3d5aefdd218c28629ad1cbb3279097f5.jpg"
                />
              </div>
              <div className="-mt-64 flex justify-start">
                <img
                  className="rounded-lg object-cover overflow-hidden"
                  src="https://i.pinimg.com/564x/25/1a/2e/251a2e85ec9aebcef4e3ad5effd6766f.jpg"
                />
              </div>
              <div className="flex justify-start -mr-28 ml-28">
                <img
                  className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                  src="https://i.pinimg.com/564x/d8/be/df/d8bedfcbf6c4d5e1229ed365c3d414aa.jpg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Kitchen;