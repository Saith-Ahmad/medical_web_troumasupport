import { useState } from "react";

function PriceCount() {
  const [minPrice, setMinPrice] = useState(10); 
  const [maxPrice, setMaxPrice] = useState(90); 

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="py-4 px-1 w-full">
      <div className="flex flex-col mb-4 gap-y-3 mt-5 w-full lg:min-w-[200px]">
        <label htmlFor="priceRange" className="mb-1 para-large">
          Price Per Session
        </label>

        <div className="flex justify-between text-sm">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>

        <input
          type="range"
          min="1"
          max="100"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="slider w-full"
        />
        
        <input
          type="range"
          min="1"
          max="100"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="slider w-full"
        />
      </div>
    </div>
  );
}

export default PriceCount;
