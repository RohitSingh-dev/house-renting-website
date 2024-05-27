import React, { useContext, useState } from 'react';
import './propertyForm.css';
import { UserContext } from '../../context/UserContext';

const PropertyForm = (props) => {
  const [location, setLocation]= useState("");
  const [area, setArea]= useState("");
  const [bedroomNum, setBedroomNum]= useState(null);
  const [bathroomNum, setBathroomNum]= useState(null);
  const [landmark, setLandmark]= useState("");
  const user = useContext(UserContext);

  let handleRegister = async (e)=> {
    console.log("Inside handleRegister");
    e.preventDefault();
    try{
      let res= await fetch("/property/create",{
        method: "POST",
        body: JSON.stringify({
          location: location,
          area: area,
          bedroomNum: bedroomNum,
          bathroomNum: bathroomNum,
          landmark: landmark,
          seller: {
            id: user.currentUser?.userId,
          },
        }),
        headers: {'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(user.currentUser?.userToken)
        },
      });
      let resJSON= await res.text();
      if(res.status===201){
        console.log(resJSON);
        setLocation("");
        setArea("");
        setBedroomNum("");
        setBathroomNum(null);
        setLandmark("");
        alert("Property Registered successfuly");
      }
      else{
        alert("Invalid Input");
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='propertyForm'>
      <form onSubmit={handleRegister}>
        <div className='propertyForm-background'>
          <fieldset className='propertyForm-fieldset'>
            <div className='propertyForm-close-btn' onClick={props.toggle}>&times;</div>
            <div className='propertyForm-legend'><b>Add Property</b></div>
            <div className='propertyForm-label'>
              <label>Location</label><br></br>
              <input type="text" placeholder="Enter Location" value={location} onChange={(e)=> setLocation(e.target.value)} required></input><br></br>
            </div>
            <div className='propertyForm-label'>
              <label>Area</label><br></br>
              <input type="text" placeholder="Enter Area" value={area} onChange={(e)=> setArea(e.target.value)} required></input>
            </div>
            <div className='propertyForm-label'>
              <label>Bedroom Count</label><br></br>
              <input type="number" placeholder="Bedroom" value={bedroomNum} onChange={(e)=> setBedroomNum(e.target.value)} required></input>
            </div>
            <div className='propertyForm-label'>
              <label>Bathroom  Count</label><br></br>
              <input type="number" placeholder="Bathroom" value={bathroomNum} onChange={(e)=> setBathroomNum(e.target.value)} required></input>
            </div>
            <div className='propertyForm-label'>
              <label>Landmark</label><br></br>
              <input type="text" placeholder="Enter Landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} required></input>
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