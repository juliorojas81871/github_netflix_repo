import React, { useState, useCallback, useEffect, useRef } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("Netflix");
  const [empty, setEmpty] = useState(false);

  const controller = useRef(new AbortController());

  const onSearch = useCallback((string) => {
    controller.current.abort();

    controller.current = new AbortController();
    setSearchValue(string);
    fetch(`https://api.github.com/orgs/${string}/repos?per_page=5`, {
      signal: controller.current.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
        setData(sorted);
        setEmpty(false);
      })
      .catch(() => setEmpty(true));
  }, []);

  useEffect(() => {
    onSearch("Netflix");
  }, []);

  return (
    <div>
      <Navbar searchValue={searchValue} setSearchValue={onSearch} />
      <div className="flex flex-col gap-10 h-full max-w-xl mx-auto py-5">
        {empty ? (
          <p className="mt-2 text-2xl">Doesn't Exist</p>
        ) : (
          data.map(
            ({
              language,
              name,
              id,
              description,
              stargazers_count,
              forks_count,
              created_at,
              commits_url,
            }) => (
              <Card
                name={name}
                key={id}
                description={description}
                language={language}
                stargazers_count={stargazers_count}
                forks_count={forks_count}
                created_at={created_at}
                comments_url={commits_url}
                empty={empty}
                searchValue={searchValue}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default App;
