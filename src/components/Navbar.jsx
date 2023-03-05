import React from "react";

const Navbar = ({searchValue, setSearchValue}) => {
  return (
    <div className="w-full flex justify-center border-b-2 border-gray-200 py-4 px-4 bg-[#12161B] ">
        <div className="bg-white rounded-full mr-2">
          <img src="/gihub.png" width={150} />
        </div>
        <input
          value={searchValue}
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-gray-800 p-3 text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[350px] rounded-md top-0"
          placeholder="Search Github"
        />
    </div>
  );
};

export default Navbar;
