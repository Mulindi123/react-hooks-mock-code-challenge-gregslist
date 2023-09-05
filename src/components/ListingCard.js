import React, { useState } from "react";

function ListingCard({listing, onDelete}) {
const [isFavorite, setIsFavorite] = useState(false)

const toggleFavorite=()=>{
  setIsFavorite(!isFavorite)
}

function handleDelete(){
  fetch(`http://localhost:6001/listings/${listing.id}`,{
    method: "DELETE",
  })
  .then((response)=>{
    if(response.ok){
      onDelete(listing.id)
    }else{
      alert("Error deleting listing")
    }
  })
  .catch(error=>console.log(error))
}

  return (
    <li className="card" >
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "★" : "☆"}
        </button>
        
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
