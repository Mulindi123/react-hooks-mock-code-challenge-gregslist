import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
const [listings, setListings] =useState([])

useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(r=>r.json())
  .then(data=>setListings(data))
}, [])

  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>{
          return(
            <ListingCard listing={listing}/>
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
