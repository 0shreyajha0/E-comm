import React ,{useState} from "react";
import '../card/cards.css'
const Card = ({ imgSrc, labelFor, id }) => (
  <label htmlFor={labelFor} id={id}>
    <div className="card">
      <div className="image">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  </label>
);


const CardSlider = ({ images }) => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  const handleSlideChange = (index) => {
    setSelectedSlide(index + 1);
  };
    return (
      <div className='scontainer'>

    
      <div className="container">
        {images.map((image, index) => (
          <input 
            key={index}
            type="radio"
            name="slider"
            className="d-none xy"
            id={`s${index + 1}`}
            checked={selectedSlide === index + 1}
            onChange={() => handleSlideChange(index)}
          />
        ))}
  
        <div className="cards">
          {images.map((image, index) => (
            <Card key={index} imgSrc={image} labelFor={`s${index + 1}`} id={`slide${index + 1}`} />
          ))}
        </div>
  
        <div className="slider-buttons">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`slider-button ${selectedSlide === index + 1 ? 'active' : ''}`}
              style={{ marginRight: '10px', width: '10px', height: '12px',border: '1px solid rgba(169, 169, 169, 0.7)', borderRadius: '50%',backgroundColor: 'rgba(130, 130, 130, 0.3)' }}
            >
            
            </button>
          ))}
        </div>
      </div>
      </div>
    );
  };

  export default CardSlider