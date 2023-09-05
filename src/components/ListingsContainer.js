import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({searchTerm}) {
const [listings, setListings] =useState([])
const [sortOrder, setSortOrder] = useState("asc")


  // const filtered = listings.filter((listing)=>
  // listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  // )

function handleDeleteListing(deletedListingId){
  setListings((prevListings)=>
  prevListings.filter((listing)=>listing.id !==deletedListingId)
  )
}

const toggleSortOrder =()=>{
  const newSortOrder=sortOrder==="asc"? "desc": "asc"
  setSortOrder(newSortOrder)
}

const sortedListings=[...listings].sort((a,b)=>{
  const compareValue= sortOrder=== "asc"? 1:-1
  return a.location.localeCompare(b.location)*compareValue
})


useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(r=>r.json())
  .then(data=>setListings(data))
}, [])

  return (
    <main>
      <button onClick={toggleSortOrder}>
        Sort by Location {sortOrder === "asc" ? "▲" : "▼"}
      </button>
      <ul className="cards">
        {sortedListings
          .filter((listing) =>
            listing.description.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((listing)=>{
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
