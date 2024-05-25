import React from 'react';
import './propertyForm.css';

const PropertyForm = (props) => {
  return (
    <div className='propertyForm'>
      <form>
        <div className='propertyForm-background'>
          <fieldset className='propertyForm-fieldset'>
            <div className='propertyForm-close-btn' onClick={props.toggle}>&times;</div>
            <div className='propertyForm-legend'><b>Add Property</b></div>
            <div className='propertyForm-label'>
              <label>Location</label><br></br>
              <input type="text" placeholder="Enter Location" required></input><br></br>
            </div>
            <div className='propertyForm-label'>
              <label>Area</label><br></br>
              <input type="text" placeholder="Enter Area" required></input>
            </div>
            <div className='propertyForm-label'>
              <label>Bedroom Count</label><br></br>
              <input type="number" placeholder="Bedroom" required></input>
            </div>
            <div className='propertyForm-label'>
              <label>Bathroom  Count</label><br></br>
              <input type="number" placeholder="Bathroom" required></input>
            </div>
            <div className='propertyForm-label'>
              <label>Landmark</label><br></br>
              <input type="text" placeholder="Enter Landmark" required></input>
            </div>
            <div className='propertyForm-buttons'>
              <input type="reset" value="RESET"></input>
              <input className='propertyForm-buttons-add' type="submit" value="ADD NEW"></input>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default PropertyForm