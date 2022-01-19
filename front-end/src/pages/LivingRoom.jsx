import React from "react";

const LivingRoom = () => {
  return (
    <div>
      <div>
        <section className="py-48 bg-white flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="-mt-20 flex justify-end">
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/b3/4f/dc/b34fdcb5c6ab5e9c96c06332eda060fa.jpg"
              />
            </div>
            <div className="flex justify-start">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/736x/88/97/8a/88978a7bc69023d7e6c704bb8bbf207e.jpg"
              />
            </div>
            <div className="-mt-64 flex justify-start">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/564x/98/7f/cc/987fcc2dc4c6092840b1a22f1d70de33.jpg"
              />
            </div>
            <div className="flex justify-start -mr-28 ml-28">
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LivingRoom;
