import React from "react";

const Pinterest = () => {
  return (
    <div>
      <section className="py-48 bg-white flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="-mt-20 flex justify-end">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            />
          </div>
          <div className="flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            />
          </div>
          <div className="-mt-64 flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            />
          </div>
          <div className="flex justify-start -mr-28 ml-28">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
            />
          </div>
          <div className="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
            <div className="space-y-4"></div>
            <div className="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
              <div></div>
              <div></div>
            </div>
            <div className="-mt-64 flex justify-start">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pinterest;
