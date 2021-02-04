import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // state value, 0 based as arrays are 0 based (local data has 4 items in the array)
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index]


  // Function to check if index is higher than array index
  const checkNumber = (number) =>{
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  // Functions to change array's index
  const nextPerson = () => {
    setIndex((index)=> {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((index)=> {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  // Function for random review
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index) {
      randomNumber=index+1;
    }
    setIndex(checkNumber(randomNumber));
  };



  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"></img>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p classname="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight/>
      </button>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </div>
  </article>;
};

export default Review;
