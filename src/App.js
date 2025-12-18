
import './App.css';
import Header from"./Header.js" ; 
import Post from './Post.js';
import Send from './Send.js';
import Map from './Map.js'
import State from './State.js';
import './Style.css';
import Pray from './Pray.js';
import { useEffect, useState } from 'react';
function App() {

  const[namePrayer, setNamePrayer]=useState({})
  const[dataTime , setDataTime]=useState("")
  const[City , setCity]=useState("Cairo")

  const cities=[
    {name:" القاهره", value:"Cairo"},
    {name:" الاسكندريه", value:"Alexandria"},
    {name:" الجيزه", value:"Giza"},
    {name:" المنصوره", value:"Mansoura"},
    {name:" اسوان", value:"Aswan"},
    {name:" الاقصر", value:"Luxor"}

  ]

useEffect(() => {
  const fetchPrayer = async () => {
    try {
      const response = await fetch(
  `https://api.aladhan.com/v1/timingsByCity?city=${City}&country=Egypt&method=5`
);


      const data_prayer = await response.json();

      setNamePrayer(data_prayer.data.timings);
      setDataTime(data_prayer.data.date.gregorian.date);

    } catch (error) {
      console.log(error);
    }
  };
  
  fetchPrayer();
}, [City]);



  const formatTime = (time)=>{
    if(!time){
      return"00:00"
    }
    let [hours , minutes]= time.split(":").map(Number)
    const pard = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
   return (
  <span style={{ direction: "ltr", display: "inline-block" }}>
    {`${hours}:${minutes < 10 ? "0" + minutes : minutes} ${pard}`}
  </span>
);

  }



  return (
    <section>
      <div className='container'>
      <div className='sec-first'>
        <div className='city'>
          <h2> المدينة </h2>
          <select onChange={(e) => setCity(e.target.value)}>
            {cities.map((city_obj) => (
              <option key={city_obj.value} value={city_obj.value} >{city_obj.name}</option>
            ))}
          </select>
        </div>

        <div className='date'>
          <h2> التاريخ </h2>
          <h2> {dataTime}</h2>
        </div>
        
        <div>
         <hr/> 
      </div>
      </div>
      <Pray name="الفجر" time={formatTime(namePrayer.Fajr)}/>
      <Pray name="الظهر" time={formatTime(namePrayer.Dhuhr)}/>
      <Pray name="العصر" time={formatTime(namePrayer.Asr)}/>
      <Pray name="المغرب" time={formatTime(namePrayer.Maghrib)}/>
      <Pray name="العشاء" time={formatTime(namePrayer.Isha)}/>
    </div>
    </section>
  );
}

export default App;
