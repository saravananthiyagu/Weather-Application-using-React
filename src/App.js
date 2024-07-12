import './App.css';
import Axios from 'axios';
import {useState} from 'react';

function App() {

  const [city, setCity] = useState('');
  const [data, setdata] = useState({});

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=chennai&units=Metric&appid=3610b35fd2e1a27914db44e4ec3fe405';

  //Getting data from api using function
  const search = async () => {
    try{
      
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=3610b35fd2e1a27914db44e4ec3fe405`);
      setdata(response.data);
      console.log(data);
    }
    catch(err){
      alert('Please enter city name correctly')
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <br/>

      <div className="search">
        <input type="text" placeholder="Enter location" value={city} onChange = {e => setCity(e.target.value)} 
        />
        <br/><br/>
        <button onClick={search}>Fetch</button>
        <br/><br/>
      </div>

      <div className='data'>
          <h2>Location : {data.name}</h2>
          <br/>
          {data.weather ? <h2>{data.weather[0].description}</h2> : null}
      </div>

        <div className='container'>
          <div className='temp'>
            {data.main ? <p><b>{data.main.temp} ° C</b></p> : null}
            <p>Temperature</p>
          </div>
          <div className='humidity'>
            {data.main ? <p> <b>{data.main.humidity}% </b></p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p><b>{data.wind.speed} MPH </b></p> : null}
            <p>Wind speed</p>
          </div>
        </div>

     </div>
    
  );
}

export default App;
