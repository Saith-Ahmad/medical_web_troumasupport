import { Search } from "lucide-react"; // Import the magnifying glass icon from lucide-react

function TherapistSearch() {
  return (
    <div className="container px-5 my-5">
      <h3 className="heading-4 text-center lg:text-start mb-2">
        Find a Therapist in <span className="text-primary">Your City</span>
      </h3>

      <div className="min-h-[100px] bg-white shadow-lg py-3 flex flex-col justify-center p-5 rounded-xl">
        <form className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Therapist Name Select */}
          <select className="flex-1 md:mr-2 mb-2 md:mb-0 p-2 border border-gray-300 rounded-md min-h-[60px]  focus:border-primary  focus:outline-none focus:border-none focus:ring focus:ring-primary">
            <option value="" disabled selected>Select Therapist</option>
            <option value="therapist1">Therapist 1</option>
            <option value="therapist2">Therapist 2</option>
            <option value="therapist3">Therapist 3</option>
            <option value="therapist4">Therapist 4</option>
          </select>

          {/* Location Select */}
          <select className="flex-1 md:mr-2 mb-2 md:mb-0 p-2 border border-gray-300 rounded-md min-h-[60px] focus:border-primary focus:outline-none focus:border-none focus:ring focus:ring-primary ">
            <option value="" disabled selected>Select Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
            <option value="location4">Location 4</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex text-xl items-center justify-center px-4 py-2 text-white bg-primary min-h-[60px] font-semibold rounded-lg hover:bg-primary-dark  gap-2 hvr-scl-primary"
          >
            Get Help
            <Search className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TherapistSearch;
