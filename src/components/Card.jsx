import React from "react";

const Card = ({
  name,
  description,
  language,
  stargazers_count,
  forks_count,
  created_at,
  comments_url,
}) => {
  return (
    <div className="flex flex-col border-b-2 border-gray-400 pb-6 ">
      <div className="flex items-center gap-2">
        <p className="flex gap-2 items-center text-md font-bold text-primary">
          {name}{" "}
        </p>
        <p className="font-medium text-xs text-gray-400 block">
          Language: {language}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex gap-2 items-center text-md font-bold text-primary">
          Star: {stargazers_count}
        </p>
        <p className="font-medium text-xs text-gray-400 block">
          Fork: {forks_count}
        </p>
      </div>
      <p className="font-medium text-xs text-gray-400 block">
        Created: {created_at}
      </p>
      <p className="mt-2 font-normal">{description}</p>

      <p>{comments_url}</p>
    </div>
  );
};

export default Card;
