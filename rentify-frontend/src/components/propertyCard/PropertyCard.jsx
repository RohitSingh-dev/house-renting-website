import React from 'react';
import './propertyCard.css';

const PropertyCard = (props) => {
  return (
    <div className='propertyCard'>
      <form>
        <div className='propertyCard-background'>
          <fieldset className='propertyCard-fieldset'>
            <div className='propertyCard-fieldset-top'>
              <div className='propertyCard-legend'><h2>Property Details</h2></div>
              <div className='propertyCard-close-btn' onClick={props.toggle}>&times;</div>
            </div>
            <div className='propertyCard-fieldset-bottom'>
              <div>
                <div className='propertyCard-label'>
                  <label>Location:</label><br></br>
                  <input type="text" placeholder="Enter Location" value={props.propertyResponse.location}></input><br></br>
                </div>
                <div className='propertyCard-label'>
                  <label>Area:</label><br></br>
                  <input type="text" placeholder="Enter Area" value={props.propertyResponse.area}></input>
                </div>
                <div className='propertyCard-label'>
                  <label>Bedroom Count:</label><br></br>
                  <input type="number" placeholder="Bedroom" value={props.propertyResponse.bedroomNum}></input>
                </div>
                <div className='propertyCard-label'>
                  <label>Bathroom Count:</label><br></br>
                  <input type="number" placeholder="Bathroom" value={props.propertyResponse.bathroomNum}></input>
                </div>
                <div className='propertyCard-label'>
                  <label>Landmark:</label><br></br>
                  <input type="text" placeholder="Enter Landmark" value={props.propertyResponse.landmark}></input>
                </div>
              </div>
              <div>
                <div className='propertyCard-label'>
                  <label>Seller Firstname:</label><br></br>
                  <input type="text" placeholder="Enter Location" value={props.propertyResponse.sellerResponse.firstname}></input><br></br>
                </div>
                <div className='propertyCard-label'>
                  <label>Seller Lastname:</label><br></br>
                  <input type="text" placeholder="Enter Area" value={props.propertyResponse.sellerResponse.lastname}></input>
                </div>
                <div className='propertyCard-label'>
                  <label>Seller Email:</label><br></br>
                  <input type="text" placeholder="Bedroom" value={props.propertyResponse.sellerResponse.email}></input>
                </div>
                <div className='propertyCard-label'>
                  <label>Seller Phone:</label><br></br>
                  <input type="number" placeholder="Bathroom" value={props.propertyResponse.sellerResponse.phone}></input>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default PropertyCard