import React from 'react';
import './SpotForm.css';

export default function SpotForm({
  // setOwnerId,
  // setLat,
  // setLng,
  setSize,
  setDetails,
  setNickname,
  setPrice,
  handleSubmit,
}) {
  return (
    <form className="spot-form" onSubmit={handleSubmit}>
      <label htmlFor="nickname">Enter a Nickname for Your Spot</label>
      <input
        type="text"
        name="nickname"
        placeholder="Enter Spot Nickname"
        onChange={(e) => setNickname(e.target.value)}
      />
      <label htmlFor="price">Price per Hour</label>
      <select name="price" onChange={(e) => setPrice(e.target.value)}>
        <option value="5">$5/hr</option>
        <option value="10">$10/hr</option>
        <option value="15">$15/hr</option>
        <option value="20">$20/hr</option>
      </select>
      <label htmlFor="size">Spot Size</label>
      <select name="size" onChange={(e) => setSize(e.target.value)}>
        <option value="compact">compact</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="trailer">trailer</option>
      </select>
      <label htmlFor="details">Spot Description</label>
      <textarea
        name="details"
        id="details"
        cols="30"
        rows="10"
        onChange={(e) => setDetails(e.target.value)}
      ></textarea>
      {/* <label htmlFor="image">Upload Image</label> */}
      {/* <input type="file" name="image" /> */}
      <button>Save Spot</button>
    </form>
  );
}
