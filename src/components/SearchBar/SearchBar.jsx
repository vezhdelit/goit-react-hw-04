import { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [localQuery, setLocalQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(localQuery);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
