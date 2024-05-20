import './App.css'
import 'leaflet/dist/leaflet.css';
import searchicon from './images/icon-arrow.svg'
import Map from './Map'
import axios from 'axios'
import { useState} from 'react';
function App() {
  const [searchIP, newSearchIp] = useState('')
  const [ipDetails, newIPDetails]= useState({
    ip: '192.168.122.174',
    city: 'Brooklyn',
    region: 'NY',
    country: 'US',
    postal: '10001',
    zone: '-05:00',
    isp: 'SpaceX Starlink',
    lat:9,
    long:9
  })
  const submitIP = async (e)=>{
    e.preventDefault();
   
   try {
     const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_XjxKO2tjaNWlRCrOXSAUnvHhaOIg5&ipAddress=${searchIP}`);
     console.log(response)
     newIPDetails({
      ip: response.data.ip,
      city: response.data.location.city,
      region: response.data.location.region,
      country: response.data.location.country,
      postal: response.data.location.postalCode,
      zone: response.data.location.timezone,
      isp: response.data.isp,
      lat:response.data.location.lat,
      long:response.data.location.lng
     })
  }
  catch(e){
    console.log(e)
    if(e.response.data.code === 422){
      alert("Invalid IP Address")
    }
    console.log(e.response.data.code)
  }
  }
  return (
    <>
      <header>
        <h1 className=''>IP Address Tracker</h1>
        <form action="">
        <input type="text" placeholder='Search for any IP address or domain' onChange={(e)=>{newSearchIp(e.target.value)}}/>
          <button  onClick={submitIP}><img src={searchicon}/></button>
        </form>
        <div className="details">
          <div className="item ip">
            <h2>IP Address</h2>
            <p>{ipDetails.ip}</p>
          </div>
          <div className="item location">
            <h2>LOCATION</h2>
            <p>{ipDetails.city}, {ipDetails.region}, {ipDetails.country}, {ipDetails.postal}</p>
          </div>
          <div className="item timezone">
            <h2>TIMEZONE</h2>
            <p>UTC{ipDetails.zone}</p>
          </div>
              <div className="item isp">
                <h2>ISP</h2>
                <p>{ipDetails.isp}</p>
              </div>
         
        </div>
       
      </header>
      <Map location={[ipDetails.lat,ipDetails.long]}></Map>
    </>
  )

}

export default App
