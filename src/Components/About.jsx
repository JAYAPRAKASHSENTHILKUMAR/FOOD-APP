import React from 'react'
import "../Components/about.css"
import pic from "../images/coffee.png"
import pic2 from '../images/beans.jpg'

import pic3 from '../images/coffee1.png'
export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1>COFFEE DAY</h1>
        <i>"sed coffee grounds have many practical uses, including as plant fertilizer or scrubbing agents …
Coffee is a popular beverage consumed all over the world."</i>
       </div>
       <div className='top1'>
        <img src={pic} alt=''/>
       <h1>DELECIOUS</h1>
        <i>"He uses coffee and used grounds to create intricate scenes – often using a single leaf as a canvas. The combination of scale and medium make this art far more eye-catching than any barista".</i>
       </div>
       <div className='top2'>
       <img src={pic2} alt=''/>
       <h1>USED ITEMS
</h1>
        <i>"coffee, beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin."</i>
       </div>
      
 
    </div>
   <div className='bottom'>
    <img src={pic3} alt=""/>
    <div>
    <h1> Coffee Shop </h1>
    <p>ITS A TASTY COFFEE IN COIMBATORE.WE THE TOP1 IN MAKING COFFEE IN COIMBATORE</p>
   
    </div>
    </div> 
   </div>
   </section>
  )
}
