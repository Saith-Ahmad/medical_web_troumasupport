import { Search } from "lucide-react";

function SearchByInterest() {
  return (
    <div className="container my-5">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <form className="flex flex-col gap-3 lg:flex-row justify-between items-center space-x-2">
          <div className="flex-grow relative">
            <input className="w-full p-3 pr-10 border rounded-lg font-light bg-white  focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-900" 
                placeholder="Search by interest"
            />
          </div>

          <button
            type="submit"
            className="lg:py-3 py-2 px-5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark flex gap-2 hvr-scl-primary"
          >
            Search
            <Search size={22} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchByInterest;
