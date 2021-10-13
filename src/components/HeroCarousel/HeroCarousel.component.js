<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";
=======
import React from "react";
import HeroSlider from "react-slick";
>>>>>>> 5858dbdf47712999d557b92b5badb0f517fd068d

//component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
<<<<<<< HEAD

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);

        };
        requestNowPlayingMovies();
    }, []);

=======
>>>>>>> 5858dbdf47712999d557b92b5badb0f517fd068d
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

<<<<<<< HEAD
    /*const images = [
=======
    const images = [
>>>>>>> 5858dbdf47712999d557b92b5badb0f517fd068d
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1630636755810-0d1a9b556512?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1630601698490-b7bf0b6295ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1630630911008-f89ba252906a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",

<<<<<<< HEAD
    ] */
=======
    ]
>>>>>>> 5858dbdf47712999d557b92b5badb0f517fd068d

    return (
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {
                images.map((image) => (
                    <div className="w-full h-44 md:80 py-3">
<<<<<<< HEAD
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                        alt="testing" className="w-full h-full rounded-md" />
=======
                        <img src={image} alt="testing" className="w-full h-full rounded-md" />
>>>>>>> 5858dbdf47712999d557b92b5badb0f517fd068d

                    </div>
                ))
            }

        </HeroSlider>

        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
            {
                images.map((image) => (
                    <div className="w-full h-96 px-2 py-3">
<<<<<<< HEAD
                        <img src= {`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                        alt="testing" className="w-full h-full rounded-md" />
=======
                        <img src={image} alt="testing" className="w-full h-full rounded-md" />
>>>>>>> 5858dbdf47712999d557b92b5badb0f517fd068d

                    </div>
                ))
            }

        </HeroSlider>

        </div>
        
        </>
    );
}

export default HeroCarousal;