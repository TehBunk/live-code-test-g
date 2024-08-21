import React from "react";
import "./styles.css";
import {
  calcAllTimeGDP,
  calcHistoricalAvgPopulation,
  findCountryWithHighestPopulationForYear,
  findYearWithHighestCombinedGDP,
} from "./utils";

// Task Goal: Create a list of countries as well as some generic helper functions
// Use typesript to make all of the following requirements type-safe.

// Requirements:
// 1. Create types for the data in "countries.ts"
// 2. Using the provided "countries.ts" dataset, load the data as if you were fetching it from an API and store it in state. (Fake API call)
//    - Implement fake error handling
//    - Implement fake loading state
// 3. Complete the two fake requests in the component below
//    - Add a fake PUT request, and update the country in state
//    - Add a fake DELETE request and remove the country from state
// 4. Code Splitting/Lazy Loading
//    - Import & Render ReallyLargeComponent.tsx component (below) without causing the entire page to load.
// 5. Complete the helper functions that are commented out below (imported from utils/index.ts)
// 6. Display the countries as a list, include the "name", "total_gdp", "population"
//
// Bonus / if time permits
// Searching/pagination functionality (dicuss)
// - Describe implemenation/handling of state when it's on API
// - Describe implemenation/handling of state when it's NOT on API

export default function App() {
  // const [selectedYear, setSelectedYear] = React.useState<number>(2022)

  // Helper/Utility functions
  // calcAllTimeGDP();
  // calcHistoricalAvgPopulation();
  // findCountryWithHighestPopulationForYear(year);
  // findYearWithHighestCombinedGDP();

  // Fake API request, and update the state
  // const updateCountry = (country: Country) => {}
  // const deleteCountry = (country: Country) => {}

  return (
    <div className="App">
      <h1>Hello World</h1>
      <>{/* Countries list here */}</>
      <div style={{ border: "1px solid gray" }}>
        {/* <ReallyLargeComponent /> */}
      </div>
    </div>
  );
}
