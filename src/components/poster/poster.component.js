import React from "react";

const Poster = (props) => {
    return(
        <>
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-80">
<<<<<<< HEAD
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
            alt={props.original_title} className="w-full h-full rounded-xl"/>
=======
            <img src={props.src} alt={props.title} className="w-full h-full rounded-xl"/>
>>>>>>> 5858dbdf47712999d557b92b5badb0f517fd068d
            </div>
            <h3
            className={`text-lg font-bold ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}>{props.title}</h3>
            <p 
            className={`text-sm font-bold ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}>{props.subtitle}</p>
        </div>
        </>
    )
};

export default Poster;