import React from 'react';
import GoogleMapReact from 'google-map-react'
import Image from "react-bootstrap/Image";
import capsule from "./assets/capsule.png"

const KSC = {
    lat: 28.6080,
    lng: -80.6047
};

const Capsule = () => <Image src={capsule} width={20} height={20}/>;

export const Map = (met) => {
    const location = {
        lat: KSC.lat + Math.max(0, (met * 0.0002)),
        lng: KSC.lng + Math.max(0, (met * 0.0001))
    }

    return (
            // Important! Always set the container height explicitly
            <div style={{height: '100%', width: '100%'}}>
                <GoogleMapReact
                        bootstrapURLKeys={{key: "AIzaSyCvcqPLVfUMZdwaXIJej3oZsRpQbTw_KFs"}}
                        defaultCenter={KSC}
                        defaultZoom={2}
                >
                    <Capsule lat={location.lat} lng={location.lng}/>
                </GoogleMapReact>
            </div>
    );
}