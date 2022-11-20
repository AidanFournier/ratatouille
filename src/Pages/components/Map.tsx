import { useState, useRef, useEffect } from 'react';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
var marker = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiYWlkenNoYWtlIiwiYSI6ImNsYW93NzBtZTBtNHYzdG9hM21tNHB0ZjkifQ.h-TKUdMdz0KeFbwbAzdtGg';

type MapProps = {
    restaurants: {[key: string]: any}
}

export function Map ({restaurants}: MapProps) {
    const mapContainer = useRef<any>(null);
    const map = useRef<any>(null);
    const [ coords, setCoords ] = useState({
        lat: 35.6762,
        long: 139.6503,
        zoom: 10
    })

    console.log(restaurants);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [restaurants[0].geocode.lon, restaurants[0].geocode.lat],
            zoom: coords.zoom
        });
    }, );

    useEffect(() => {
        document.querySelectorAll(".mapboxgl-marker").forEach(el => el.remove());

        restaurants.map((restaurant: {[key: number]: any}) => {
            var marker = new mapboxgl.Marker()
                .setLngLat([restaurant.geocode.lon, restaurant.geocode.lat])
                .setPopup(
                    new mapboxgl.Popup({ offset: 30 })
                        .setHTML('<h4>' + 'Tokyo' + '<h4>')
                )
                .addTo(map.current)
        });
    }, [restaurants]);

    return (
        <div ref={mapContainer} style={{width: '100%', height:'50vh'}}></div>
    )
}