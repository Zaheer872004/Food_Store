

const SearchBar = () => {
    return (
      <div className="searchh-container">
        <form action="#" method="get">
          <input type="text" className="search-input" name="q" placeholder="Search for products..." />
          <input type="submit" className="search-button" value="Search" />
        </form>
      </div>
    );
  }
  
  export default SearchBar;