import React from "react";
import Poster from "../components/poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
    return (
        <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-8/12">
                <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
                <div className="flex flex-wrap">

                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg" 
                    title="Tvk Cultural presents Ponniyin Selvan" 
                    subtitle="Tamil ₹300" />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src= "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg" 
                    title= "Many faced of Korean storytelling" 
                    subtitle= "English ₹455" />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src= "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314727-qhmcpmappx-portrait.jpg"
                    title="Table Manners by Alan Ayckbourn"
                    subtitle="English ₹ 150 onwards" />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg" 
                    title="Ranga Shankara" 
                    subtitle="Kannada ₹ 150 onwards" />
                </div>

                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314527-exbxfrdxnw-portrait.jpg" 
                    title="TVK Presents Amarar Kalki in Sivagamiyin" 
                    subtitle="Tamil ₹ 199 " />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314866-xlqalwgant-portrait.jpg" 
                    title="April Fool" 
                    subtitle="Hindi/Telugu ₹ 150 " />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src= "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg" 
                    title= "Many faced of Korean storytelling" 
                    subtitle= "English ₹455" />
                </div>
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster 
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg" 
                    title="Ranga Shankara" 
                    subtitle="Kannada ₹ 150 onwards" />
                </div>

                
                </div>

                </div>

            <div className="lg:w-1/4">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div>
                    <div className="mb-5">
                    <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                    </div>
                    <div className="mb-5">
                    <PlaysFilter title="Language" tags={["Tamil","Kannada","English","Hindi","Telugu"]} />
                    </div>
                    <div className="mb-5">
                    <PlaysFilter title="Categories" tags={["Theatre"]} />
                    </div>
                    <div className="mb-5">
                    <PlaysFilter title="Genres" tags={["Drama","Adaptation","Historical","Online Streaming Plays"]} />
                    </div>
                    <div className="mb-5">
                    <PlaysFilter title="More Filters" tags={["Online Streaming","Kids Allowed","Outdoor Events"]} />
                    </div>
                    <div className="mb-5">
                    <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]} />
                    </div>
                </div>

           </div>


            </div>


        </div>
        </>
    )
};

export default Plays;