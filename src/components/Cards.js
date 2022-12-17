import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// const items = [{
//   src:'images/img-5.jpeg',
//   text:'Register your employees, visitors and customers into the system with their FingerPrint Data',
//   label:'Add Your Users into the System',
//   path:'/services',
// },

// ]

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Product!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../src/assets/images/img-5.jpeg'
              text='Register your employees, visitors and customers into the system with their FingerPrint Data'
              label='Add Your Users into the System'
              path='/services'
            />
            <CardItem
              // src='../../assets/images/img-3.jpg'
              src='../assets/images/img-3.jpg'
              text='Authenticate your employees, visitors and customers with the FingerPrint.'
              label='Authentication'
              path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../assets/images/img-6.jpeg'
              text='Gather and analyze data of personals check-in and check-cut time with provided Extensive Tools and UI'
              label='Analyze Check-In and Check-Out Data'
              path='/services'
            />
            <CardItem
              src='../../assets/images/img-7.jpg'
              text='Provide protection to your and your users data and privacy with the provided security techniques and tools'
              label='Data Protection and Secure Privacy'
              path='/services'
            />
            {/* <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
            {/* items.map( (item) => {}) */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;