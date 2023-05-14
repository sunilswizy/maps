export interface ILocation {
    location: {
        lat: number,
        log: number
    },
    markerContent(): string
}

class CustomMap {
    private googleMap: google.maps.Map;

    constructor(element: HTMLElement) {
        this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
              lat: 0,
              lng: 0,
            },
        });        
    }

    addMarker(marker: ILocation) {
        let mapMarker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.log
            }
        });

        mapMarker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: marker.markerContent()
            });

            infoWindow.open(this.googleMap, mapMarker);
        })
    }   
}


export default CustomMap;