import React from 'react';
import GoogleMapReact from 'google-map-react'
import Image from "react-bootstrap/Image";
import capsule from "./assets/capsule.png"
import PropTypes from 'prop-types'
import {useDownrange, useMissionData} from "./MissionData";
import LatLon from "geodesy/latlon-ellipsoidal-vincenty";


const KSC = {
    lat: 28.6082,
    lng: -80.60415
};

const Capsule = () => <Image className="Capsule" src={capsule}/>;

export const Map = (props) => {
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
                    <Capsule lat={props.location.lat} lng={props.location.lng}/>
                </GoogleMapReact>
            </div>
    );
}
Map.propTypes = {
    location: PropTypes.object
}