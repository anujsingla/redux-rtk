import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Posts } from "./Posts";
import { Pokemon } from "./Pokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Posts /> */}
        <Pokemon />
      </header>
    </div>
  );
}

export default App;

/*
RTK Query

- It is used to fetch, mutate and cache the data.
- It is same like React Query.
- It is an optional addon included in the redux toolkit package.
- It provides various features like fetching the data, mutations,
re-fetching, cache, conditional fetching, error handling, polling.
- We will check with example

*/
