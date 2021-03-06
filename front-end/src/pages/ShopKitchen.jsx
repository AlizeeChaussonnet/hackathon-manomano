import React from "react";
import ShowerScreen from "../assets/image/showerscreen.png";
import Vasquesdb from "../assets/image/vasquesdb.png";
import Robinet from "../assets/image/robinet.png";
import Mirror from "../assets/image/miroir.png";
import Return from "../Components/Return";
import Navigation from "../Components/Navbar";
import { Link } from "react-router-dom";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import "../App.css";

const ShopKitchen = () => {
  return (
    <>
      <Navigation />
      <Link to="/kitchen">
        <Return />
      </Link>
      <div className=" flex justify-center my-6">
        <img
          className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
          src="https://i.pinimg.com/564x/0f/a5/d0/0fa5d0f5b41a4274bdc3a4ebf9962412.jpg"
        />
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <div className="relative">
              <div className="overflow-auto h-80">
                <table className="w-full text-sm lg:text-base " cellspacing="0">
                  <thead>
                    <tr className="h-12 uppercase">
                      <th className="hidden md:table-cell"></th>
                      <th className="text-left">Product</th>
                      <th className="lg:text-right text-left pl-5 lg:pl-0">
                        <span className="lg:hidden" title="Quantity">
                          Qtd
                        </span>
                        <span className="hidden lg:inline">Quantity</span>
                      </th>
                      <th className="hidden text-right md:table-cell">
                        Unit price
                      </th>
                      <th className="text-right">Total price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src={ShowerScreen}
                            className="w-20 h-16 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <p className="mb-2 md:ml-4">
                            Shower screen
                            <QuestionMarkCircleIcon className="h-5 w-5 text-[#0c193a]" />
                          </p>
                          <form action="" method="POST">
                            <button
                              type="submit"
                              className="text-gray-700 md:ml-4"
                            >
                              <small>(Remove item)</small>
                            </button>
                          </form>
                        </a>
                      </td>
                      <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              value="1"
                              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          120.00???
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          120.00???
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src={Robinet}
                            className="w-20 h-16 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <p className="mb-2 md:ml-4">
                            Tap
                            <QuestionMarkCircleIcon className="h-5 w-5 text-[#0c193a]" />
                          </p>
                          <form action="" method="POST">
                            <button
                              type="submit"
                              className="text-gray-700 md:ml-4"
                            >
                              <small>(Remove item)</small>
                            </button>
                          </form>
                        </a>
                      </td>
                      <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              value="1"
                              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          71,82???
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          71,82???
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src={Mirror}
                            className="w-20 rounded h-16"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <p className="mb-2 md:ml-4">
                          Mirror
                          <QuestionMarkCircleIcon className="h-5 w-5 text-[#0c193a]" />
                        </p>
                        <form action="" method="POST">
                          <button
                            type="submit"
                            className="text-gray-700 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </td>
                      <td className="justify-center md:justify-end md:flex md:mt-4">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              value="1"
                              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          113,99 ???
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          113,99 ???
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src={Vasquesdb}
                            className="w-20 h-16 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <p className="mb-2 md:ml-4">
                          White round basin
                          <QuestionMarkCircleIcon className="h-5 w-5 text-[#0c193a]" />
                        </p>
                        <form action="" method="POST">
                          <button
                            type="submit"
                            className="text-gray-700 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </td>
                      <td className="justify-center md:justify-end md:flex md:mt-8">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              value="1"
                              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          69.00???
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          69.00???
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <div className="section-shop">
                  <h1 className="ml-2 font-bold text-white uppercase">
                    Order Details
                  </h1>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">
                    Shipping and additionnal costs are calculated based on
                    values you have entered
                  </p>
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      374,81 ???
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Tax
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    374,81 ???
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    449,772 ???
                  </div>
                </div>
                <a href="#">
                  <button className="procceed-payment">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span className="ml-2 mt-5px">Procceed to checkout</span>
                  </button>
                </a>
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="section-shop">
                  <h1 className="ml-2 font-bold text-white uppercase">
                    Instruction for seller
                  </h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
                </div>
                <div>
                  <div className="section-shop">
                    <h1 className="ml-2 font-bold text-white uppercase">
                      Installation by a professional
                    </h1>
                  </div>
                  <section className="container mx-auto ml-6 my-8">
                    <label
                      for="checkbox"
                      className="relative flex-inline items-center isolate p-4 rounded-2xl"
                    >
                      <input
                        id="checkbox"
                        type="checkbox"
                        className="relative peer z-20 text-purple-600 rounded-md focus:ring-0 mr-1"
                      />
                      <span className="relative z-20 w-full">
                        {" "}
                        I would like to entrust the installation to a
                        professional (50???)
                      </span>
                      <div className="absolute inset-0 bg-white peer-checked:bg-teal-50 peer-checked:border-teal-300 z-10 border rounded-2xl"></div>
                    </label>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopKitchen;
