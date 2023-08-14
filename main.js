function initMap() {
    
//     const markers = [
//         {
//         locationName: 'Appartamento Lingotto',
//         lat: 45.039753, 
//         lng: 7.670123,
//         address: 'Lingotto, Torino',
//         },
//         {
//         locationName: 'Appartamento Nuova',
//         lat: 45.065196,  
//         lng: 7.674213,
//         address: 'Porta Nuova, Torino',
//         },
//         {
//         locationName: 'Appartamento Parco',
//         lat: 45.061133, 
//         lng: 7.688669,
//         address: 'Valentino, Torino',
//         }
// ];



    const centerMap = { lat:45.070379, lng:7.677555 }

    const mapOptions = {
        center: centerMap,
        zoom: 10,
        disableDefaultUI: true
    }

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);


    // const infoWindow = new google.maps.infoWindow({
    //     minWidth: 200,
    //     maxWidth: 200
    // })


    // for(let i=0; i < markers.length; i++) {
    //     const marker = new google.maps.Marker({
    //         position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
    //         map: map
    //     });


    //     function createInfoWindow () {
    //         const infoWindowContent = `

    //         `
    //     }
    // }



}