import React from "react";


function Search({searchTerm,setSearchTerm}) {
  
  function handleChange(e) {
    // Update the searchTerm state with the current input value
    setSearchTerm(e.target.value);
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    // setSearchTerm(e.target.value);
  }

  return (
   
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
