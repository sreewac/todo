import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import '../Component/Carousel.css'
import {CarouselItem } from "../Services";

function ControlledCarousel() {

    const [index, setIndex] = useState(0);
     const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {CarouselItem.map((item)=>(
          <Carousel.Item key={item.content}>
            <img  className="d-block w-100" src={item.imageSrc} alt={item.alt}/>
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </Carousel.Caption>
          </Carousel.Item>

        ))}
      </Carousel>
    );
  }
  

  export default ControlledCarousel

