import React from 'react';
import './SpotForm.css';

export default function SpotForm() {
  return (
    <form className="spot-form">
      <label htmlFor="nickname">Enter a Nickname for Your Spot</label>
      <input type="text" name="nickname" placeholder="Enter Spot Nickname" />
      <label htmlFor="price">Price per Hour</label>
      <select name="price">
        <option value="5">$5/hr</option>
        <option value="10">$10/hr</option>
        <option value="15">$15/hr</option>
        <option value="20">$20/hr</option>
      </select>
      <label htmlFor="details">Spot Description</label>
      <textarea name="details" id="details" cols="30" rows="10"></textarea>
      <label htmlFor="image">Upload Image</label>
      <input type="file" name="image" />
      <button>Save Spot</button>
    </form>
  );
}
