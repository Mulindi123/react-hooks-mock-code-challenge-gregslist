import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";


function ListingsContainer({searchTerm}) {
const [listings, setListings] =useState([])


  const filtered = listings.filter((listing)=>
  listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(r=>r.json())
  .then(data=>setListings(data))
}, [])

  return (
    <main>
      <ul className="cards">
        {filtered.map((listing)=>{
          return(
            <ListingCard listing={listing} key={listing.id} 
            
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
