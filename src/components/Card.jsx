import React, { useState, useEffect } from "react";
import Commit from "./Commit";

const Card = ({
  name,
  description,
  language,
  stargazers_count,
  forks_count,
  created_at,
  searchValue,
}) => {
  const [commit, setCommit] = useState(false);
  const [commitData, setCommitData] = useState([]);

  const handleCommit = async () => {
    await fetch(
      `https://api.github.com/repos/${searchValue}/${name}/commits?per_page=5`
    )
      .then((res) => res.json())
      .then((data) => setCommitData(data));
  };

  useEffect(() => {
    handleCommit();
  }, [commit]);

  return (
    <div className="flex flex-col border-b-2 border-gray-400 pb-10 mx-2 ">
      <div className="flex items-center gap-2">
        <p className="flex gap-2 items-center text-md font-bold text-primary">
          {name}{" "}
        </p>
        <p className="smalltext">Language: {language}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="smalltext">Star: {stargazers_count}</p>
        <p className="smalltext">Fork: {forks_count}</p>
      </div>
      <p className="smalltext">Created: {created_at}</p>
      <p className="mt-2 font-normal">{description}</p>
      <div className="flex mt-4">
        <button
          onClick={() => {
            setCommit(!commit);
            handleCommit();
          }}
          type="button"
          className="border-gray-300 border-2 text-md font-medium p-2 rounded w-44 outline-none hover:bg-[#12161B]"
        >
          {commit ? "close" : "commits"}
        </button>
      </div>
      {commit &&
        commitData.map(
          ({
            commit: { message },
            commit: {
              author: { name },
            },
            commit: {
              author: { date },
            },
            sha,
          }) => (
           
              <Commit message={message} key={sha} sha={sha} date={date} name={name} />
          )
        )}
    </div>
  );
};

export default Card;
