import React from "react";

function App() {
  const APP_ID = "93efe5e7";
  const APP_KEY = "184d313c90f01c78661e98dc4971cf1a";

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
