const SearchBar = () => {
    return (
        <form className="app-search d-none d-lg-block">
            <div className="position-relative">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                />

                <span className="uil-search"></span>
            </div>
        </form>
    );
};

export default SearchBar;