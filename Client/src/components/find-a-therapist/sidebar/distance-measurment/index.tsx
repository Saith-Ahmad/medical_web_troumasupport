import { useState } from "react";

function DistanceMeasurment() {
  const [distance, setDistance] = useState(10); 

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(Number(event.target.value)); 
  };
  

  return (
    <div className="p-4 w-full">
      <form className="flex flex-col mb-4 gap-y-3 mt-5">
        <label htmlFor="distance" className="mb-1 para-large">
          With-in <span className="bg-white px-3 py-2 rounded-lg min-w-[100px]">{distance}</span> miles
        </label>


        <input
          type="range"
          min="1"
          max="100" 
          value={distance}
          onChange={handleSliderChange}
          className="slider w-full min-w-[200px]"
          />
      </form>
    </div>
  );
}

export default DistanceMeasurment;
