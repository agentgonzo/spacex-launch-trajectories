import React from 'react';
import GoogleMapReact from 'google-map-react'
import Image from "react-bootstrap/Image";
import capsule from "./assets/capsule.png"
import PropTypes from 'prop-types'


const KSC = {
    lat: 28.6082,
    lng: -80.60415
};

const Capsule = () => <Image className="Capsule" src={capsule}/>;

export const Map = (props) => {
    const location = {
        lat: KSC.lat + Math.max(0, (props.met * 0.0002)),
        lng: KSC.lng + Math.max(0, (props.met * 0.0001))
    }

    const getMapOptions = (maps) => {
        return  {
            fullscreenControl: false,
            mapTypeId: maps.MapTypeId.SATELLITE,
            mapTypeControlOptions: {
                style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: maps.ControlPosition.TOP_LEFT,
                mapTypeIds: [
                    maps.MapTypeId.ROADMAP,
                    maps.MapTypeId.SATELLITE,
                    maps.MapTypeId.HYBRID
                ]
            },
        }
    }

    return (
            // Important! Always set the container height explicitly
            <div style={{height: '100%', width: '100%'}}>
                <GoogleMapReact
                        options={getMapOptions}
                        bootstrapURLKeys={{key: "AIzaSyCvcqPLVfUMZdwaXIJej3oZsRpQbTw_KFs"}}
                        defaultCenter={KSC}
                        defaultZoom={6}
                >
                    <Capsule lat={location.lat} lng={location.lng}/>
                </GoogleMapReact>
            </div>
    );
}
Map.propTypes = {
    met: PropTypes.number
}