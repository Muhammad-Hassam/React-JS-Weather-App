import './App.css';
import { useState,useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CloudIcon from '@material-ui/icons/Cloud';
import Button from '@material-ui/core/Button';
import { Opacity } from '@material-ui/icons';


const WeatherApp=()=> {

    const key = '87e794f41494a00278a7066a3e7e4d87';
    const [city, setCity] = useState('karachi');
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');

    useEffect(()=> {
      Weather()},[]);

const Weather=()=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;
  const promise=fetch(url)
promise.then((res)=>{
  const json=res.json()
  json.then(data=>{
    if(data.message==='city not found'){
      console.log('error')
    }
    else{
      setFeelsLike(data.main.feels_like);
      setMainTemp(data.main.temp);
      setDescription(data.weather[0].description);
      setMain(data.weather[0].main);
      setIconID(data.weather[0].icon);
    }
})
})
promise.catch((error)=>console.log(error))

}

const input={
  backgroundColor:'#fff',
  borderRadius: '7px'
}
const weather={
  marginTop: '1.0rem',
  padding: '1rem',
}
const clr={
  marginTop:'1.2rem',
  borderRadius: '2rem',
  padding:'2rem',
  background: 'rgba(255,255,255, 0.1)',
  
}
return (

  <>
 <Container justify="center" align='center' maxWidth='sm' style={clr}>

  <h1 className='main-Heading'>Weather App</h1>
  <Grid container spacing={0}>
  <Grid item xs={9} md={9}>
       <TextField
          value={city}
          onChange={e => setCity(e.target.value)}
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="filled"
          style={input}
        />
        </Grid>
        <Grid item xs={3} md={3}>
        <Button
        variant="contained"
        color="primary"
        onClick={()=> Weather()}
        endIcon={<CloudIcon/>}
        style={weather}
      >
        Weather
      </Button>

        
        </Grid>
        </Grid>

   
   
  <h1 className='temp'>{mainTemp} <sup>o</sup>C</h1>
  <h2>Feels like: {feels_like} Degrees Celsius</h2>
  <h2>Weather Parameter: {main}</h2>
  <h2>Description : {description}</h2>
 <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
 </Container> 
 
   </>
)

   

}

export default WeatherApp;
