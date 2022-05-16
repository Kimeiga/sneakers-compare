import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const ImgCarousel = (props) => {
    let sneaker = props.sneaker;

    const images = () => {
        if (sneaker?.imageLinks.length > 0) {
            return (
                sneaker.imageLinks.map(image => (
                    <Carousel.Item>
                        <img class='goat-images' src={image} alt="goat-images"></img>
                    </Carousel.Item>
                )));
        }
        else {
            console.log(props);
            return (
                <Carousel.Item>
                    <img class={props.imageClass} src={props.image} alt="carousel item"></img>
                </Carousel.Item>
            )
        }
    }

    return (
        <Carousel>
            {images()}
        </Carousel>
    );
}
export default ImgCarousel