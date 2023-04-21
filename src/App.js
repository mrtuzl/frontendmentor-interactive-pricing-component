
import { useState } from 'react';
import './App.css';
import tick from './images/icon-check.svg';

function App() {

  const [value, setValue] = useState(3);
  const [billing, setBilling] = useState("month");

  function handlePrice(e) {
    e.preventDefault();
    setValue(e.target.value)
  }

  function handleBilling() {

    setBilling(current => billing === "month" ? "year" : "month")
  }

var view;
var price;
if (billing === "month") {
  switch (value) {
    case "1":
    view = "10K PAGEVIEWS";
    price = "$8.00";
    break;
    case "2":
    view = "50K PAGEVIEWS";
    price = "$12.00";
    break;
    case "3":
    view = "100K PAGEVIEWS";
    price = "$16.00";
    break;
    case "4":
    view = "500K PAGEVIEWS";
    price = "$24.00";
    break;
    case "5":
    view = "1M PAGEVIEWS";
    price = "$36.00";
    break;

default:
  view = "100K PAGEVIEWS";
    price = "$16.00";
  break;
}
} else {
  switch (value) {
    case "1":
    view = "10K PAGEVIEWS";
    price = "$6.00";
    break;
    case "2":
    view = "50K PAGEVIEWS";
    price = "$9.00";
    break;
    case "3":
    view = "100K PAGEVIEWS";
    price = "$12.00";
    break;
    case "4":
    view = "500K PAGEVIEWS";
    price = "$18.00";
    break;
    case "5":
    view = "1M PAGEVIEWS";
    price = "$27.00";
    break;

default:
  view = "100K PAGEVIEWS";
    price = "$12.00";
  break;
}
}

  return (
 <div className='container'>
        <div className='title'> 
          <h1> Simple, traffic-based pricing </h1>
          <div className='trial'>
            <span> Sign-up for our 30-day trial.</span> 
            <span> No credit card required.</span>
          </div>
        </div>

    <div className='box'> 
          <div className='info'>
              <span className='view'> {view} </span>  
          <div className='price'> 
                <span className='dollar'> {price} </span>
                <span className='billing'> / {billing} </span>
          </div>
          </div>
     <div className='inpt'>
         <input
          className='input'
          type='range'
          onChange={handlePrice}
          min={1}
          max={5}
          step={1}
          value={value}
          ></input>
      </div>
      

    <div className='discount'> 
        <span> Monthly billing</span>
        <label className="switch">
        <input type="checkbox" onChange={handleBilling}/>
        <span className="slider round"></span>
        </label>
        <span>Yearly billing</span>
        <span className='dis'> 25% <span className='hide'> discount  </span></span>
    </div>

    <div className='advantages'> 
      <div className='leftside'> 
          <div className='adv'> 
              <img src={tick} alt='tick'/>
              <span> Unlimited websites</span>
          </div>
          <div className='adv'> 
              <img src={tick} alt='tick'/>
              <span> 100% data ownership </span>
          </div>
          <div className='adv'> 
              <img src={tick} alt='tick'/>
              <span> Email reports </span>
          </div>
      </div>
      <div className='rightside'> 
        <button className='btn'> Start my trial </button>
      </div>
    </div>

   </div>
 </div>
  );
}

export default App;
