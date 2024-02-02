import { useState } from "react";
import './carousel.css';

const Carousel = ({ pics }) => {

    const [index, setIndex] = useState(0);

    const carouselPic = {
        backgroundImage: `url(${pics[index].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

    const previousImage = () => {
        let activePic = index
        if (activePic === 0) {
            setIndex(pics.length - 1)
        } else {
            let activePic = (index - 1)
            setIndex(activePic)
        }
    }

    const nextImage = () => {
        let activePic = (index + 1)
        setIndex(activePic)
        if (activePic > (pics.length - 1)) {
            setIndex(0)
        }
    }

    return (
        <div className="carouselPics" style={carouselPic}>
            <div className="leftArrow" onClick={previousImage}>&lt;</div>
            <div className="rightArrow" onClick={nextImage}>&gt;</div>
        </div>
    )
}

export default Carousel;