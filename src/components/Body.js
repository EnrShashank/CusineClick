import { useState } from "react";
import { resturantList } from "../config";
import ResturantCard from "./ResturantCard";

function filterData(searchText,resturants) {
    const filterData = resturants.filter((resturant)=>
    resturant.data.name.includes(searchText)
    );

    return filterData;
}

const Body = () => {
    const[resturants,setResturants]=useState(resturantList); // return[variable name, function to update the variable]
    const[searchText,setSearchText]=useState();

    return (

        <>
        <div className="search-container">
           <input type="text" 
           className="search-input" 
           placeholder="Search"
           value={searchText}
           onChange={(e)=>{
            setSearchText(e.target.value);
           }}
            />
            <button className="search-btn"
            onClick={()=>{
           const data = filterData(searchText,resturants);
           setResturants(data);
            }}
            >
                Search
                </button>
        </div>
      <div className="resturant-list">
          {resturants.map((resturant) => {
  return <ResturantCard {...resturant.data} key={resturant.data.id} />
       })}
      </div>
      </>
    );
  };
  export default Body;