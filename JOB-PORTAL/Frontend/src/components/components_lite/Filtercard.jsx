import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Job Type",
    array: ["Full-time", "Part-time", "Internship", "Contract"],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setSelectedValues((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  // Reset all active filters at once
  const clearAll = () => {
    setSelectedValues([]);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValues));
  }, [selectedValues, dispatch]);

  const activeCount = selectedValues.length;

  return (
    <div className="w-full bg-white rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg flex items-center gap-2">
          Filter Jobs
          {activeCount > 0 && (
            <span className="bg-[#6B3AC2] text-white text-xs font-semibold rounded-full px-2 py-0.5">
              {activeCount}
            </span>
          )}
        </h1>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            Clear All
          </button>
        )}
      </div>
      <hr className="mt-3" />
      <div className="mt-5">
        {filterData.map((data, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-bold text-lg mb-2">{data.filterType}</h2>
            {data.array.map((item, indx) => {
              const itemId = `filter-${index}-${indx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <input
                    type="checkbox"
                    id={itemId}
                    value={item}
                    checked={selectedValues.includes(item)}
                    onChange={() => handleChange(item)}
                    className="w-4 h-4 text-[#6B3AC2] border-gray-300 rounded focus:ring-[#6B3AC2] cursor-pointer"
                  />
                  <label htmlFor={itemId} className="cursor-pointer text-gray-700">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
