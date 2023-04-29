import React, {useEffect} from 'react'
import './main.scss'
import image  from '../../Assets/image 1.jpeg'
import image2 from '../../Assets/image 2.jpeg'
import image3 from '../../Assets/image 3.jpeg'
import image12 from '../../Assets/image 12.jpeg'
import image5  from '../../Assets/image 5.jpeg'
import image6 from '../../Assets/image 6.jpeg'
import image7  from '../../Assets/image 7.webp'
import image8 from '../../Assets/image 8.webp'
import image9  from '../../Assets/image 9.jpeg'

import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import Abs from 'aos'
import 'aos/dist/aos.css'
import Aos from 'aos'


const Data = [
  {
    id:1,
    imageSrc: image ,
    destTitle: 'London',
    location: 'England',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
  },


  {
    id:2,
    imageSrc: image2 ,
    destTitle: 'California',
    location: 'Wstern US',
    grade: 'CULTURAL RELAX',
    fees: '$950',
    description: 'California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles.'
  },

  {
    id:3,
    imageSrc: image3,
    destTitle: 'Oceania',
    location: 'Canberra',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'Oceania is a geographical region that is described as a continent in some parts of the world.'
  },

  {
    id:4,
    imageSrc: image12,
    destTitle: 'Indonesia',
    location: 'Jakarta',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.'
  },

  {
    id:5,
    imageSrc: image5,
    destTitle: 'Europe',
    location: 'Brussels',
    grade: 'CULTURAL RELAX',
    fees: '$750',
    description: 'Europe is a continent comprising the westernmost peninsulas of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.'
  },
  
  {
    id:6,
    imageSrc: image6,
    destTitle: 'Singapore',
    location: 'Singapore',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Singapore, officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. '
  },
  
  {
    id:7,
    imageSrc: image7,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is one of the Best travel destination in the world. This place is known for its luxurious stays and advantures activities.'
  },

  {
    id:8,
    imageSrc: image8,
    destTitle: 'Dubai',
    location: 'Emirate',
    grade: 'CULTURAL RELAX',
    fees: '$400',
    description: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.'
  },

  {
    id:9,
    imageSrc: image9,
    destTitle: 'U.S.',
    location: 'Washington DC',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.'
  },
]

 const Main = () => {

   // Lets create a react hook to add a scroll
    //  animation.....

    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])



  return (
    <section className='main container section'>

      <div className='secTitle'>
       <h3 data-aos="fade-right"
        className='title'>
          Most Visited Destination
       </h3>
      </div>

      <div className="secContent grid">
         
         {
            Data.map(({ id, imageSrc, destTitle, location, grade,
              fees, description }) =>{
                return(
                  <div key={id}
                  data-aos='fade-up'
                  className='singleDestination'>
                    <div className="imageDiv">
                      <img src={imageSrc} alt="" />
                    </div>
                   
                    <div className="cardInfo">
                      <h4 className='destTitle'>{destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon' />
                      <span className='name'>{location}</span>
                      </span>
                      
                      <div className="fees flex">
                        <div className="grade">
                             <span>{grade}
                             <small>+1</small>
                             </span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon' />
                      </button>

                    </div>
                  </div>
                )
              })
         }


      </div>


    </section>
  )
}

export default Main
