import React from 'react';
import GoogleMapReact from 'google-map-react'
import Image from "react-bootstrap/Image";
import capsule from "./assets/capsule.png"

const KSC = {
    lat: 28.6080,
    lng: -80.6047
};

const Capsule = () => <Image src={capsule} width={20} height={20}/>;

export class SpacexMap extends React.Component {
    render() {
        return (
                // Important! Always set the container height explicitly
                <div style={{height: '100%', width: '100%'}}>
                    <GoogleMapReact
                            bootstrapURLKeys={{key: "AIzaSyCvcqPLVfUMZdwaXIJej3oZsRpQbTw_KFs"}}
                            defaultCenter={KSC}
                            defaultZoom={2}
                    >
                        <Capsule lat={KSC.lat} lng={KSC.lng}/>
                    </GoogleMapReact>
                </div>
        );
    }
}