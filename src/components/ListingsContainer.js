import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({searchTerm}) {
const [listings, setListings] =useState([])


  const filtered = listings.filter((listing)=>
  listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

function handleDeleteListing(deletedListingId){
  setListings((prevListings)=>
  prevListings.filter((listing)=>listing.id !==deletedListingId)
  )
}



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
              onDelete={handleDeleteListing}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
