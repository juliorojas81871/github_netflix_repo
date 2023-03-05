import React from "react";

const Commit = ({ name, date, sha, message }) => {
  return (
    <div className="mx-5 my-5 max-w-md border-b border-gray-400 pb-10">
      <div className="flex items-center gap-2">
        <p className="flex gap-2 items-center text-md font-bold text-primary">
          {name}
        </p>
        <p className="smalltext">Created: {date}</p>
      </div>
      <p className="smalltext">{sha}</p>
      <p className="flex mt-4">{message}</p>
    </div>
  );
};

export default Commit;
