import {
  hamburger_url,
  logo_url,
  suggestions_api,
  user_Icon,
} from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toogleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { addSuggestion } from "../utils/searchCacheSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const cacheItems = useSelector((store) => store.cache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheItems[searchQuery]) {
        setSuggestions(cacheItems[searchQuery]);
      } else {
        FetchSuggestionApi();
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const FetchSuggestionApi = async () => {
    try {
      const response = await fetch(suggestions_api + searchQuery);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();

      setSuggestions(json[1] || []); // Ensure it defaults to an empty array
      console.log(json[1]);
      dispatch(addSuggestion({ [searchQuery]: json[1] }));
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
      setSuggestions([]); // Reset suggestions on error
    }
  };

  const handleClick = () => {
    // Toggle the state
    dispatch(toogleMenu());
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white shadow-lg sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img
          onClick={handleClick}
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
          src={hamburger_url}
          alt="Menu"
        />
        <Link to="/">
          <img className="w-20 h-auto" src={logo_url} alt="Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <div className="flex items-center">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-96 h-10 border border-gray-300 focus:border-blue-500 bg-gray-100 rounded-l-full px-4 outline-none transition-all duration-300 ease-in-out"
            placeholder="Search..."
          />
          <button className="h-10 bg-blue-500 text-white rounded-r-full px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            🔎
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* User Icon */}
      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:shadow-md transition-shadow duration-300"
          src={user_Icon}
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Header; 
