import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  const dataHandler = async () => {
    await fetch("https://api.github.com/orgs/Netflix/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
        setData(sorted);
      });
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <div className="bg-[#0D1117] text-white">
      <div className="flex flex-col gap-10 h-full max-w-md mx-auto">
        {data.map(
          ({
            language,
            name,
            id,
            description,
            stargazers_count,
            forks_count,
            created_at,
            comments_url,
          }) => (
            <Card
              name={name}
              key={id}
              description={description}
              language={language}
              stargazers_count={stargazers_count}
              forks_count={forks_count}
              created_at={created_at}
              comments_url={comments_url}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
