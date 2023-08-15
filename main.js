


const markers = [
    {
        locationName: 'Appartamento Lingotto',
        lat: 45.039753, 
        lng: 7.670123,
        address: 'Lingotto, Torino',
    },
    {
        locationName: 'Appartamento Nuova',
    lat: 45.065196,  
    lng: 7.674213,
    address: 'Porta Nuova, Torino',
},
    {
        locationName: 'Appartamento Parco',
    lat: 45.061133, 
    lng: 7.688669,
    address: 'Valentino, Torino',
    }
];


            function initMap() {


                const mapCanvas = document.getElementById("map");


                const mapOptions = {
                    center: new google.maps.LatLng(45.070379, 7.677555),
                    zoom: 12,
                    gestureHandling: "greedy",
                    disableDefaultUI: true,
                    markers
                };


                const portaNuova = {lat: 45.065196, lng: 7.674213};
                const parco = {lat: 45.061133, lng: 7.688669};
                const lingotto = {lat: 45.039753, lng: 7.670123};

                const map = new google.maps.Map(mapCanvas, mapOptions);
                const marker = new google.maps.Marker({position: portaNuova, map: map});
                const marker2 = new google.maps.Marker({position: parco, map: map});
                const marker3 = new google.maps.Marker({position: lingotto, map: map});

            }



 const infoWindow = new google.maps.infoWindow({
        minWidth: 200,
        maxWidth: 200
    })
   


//     for(let i=0; i < markers.length; i++) {
//         const marker = new google.maps.Marker({
//             position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
//             map: map
//         });


//         function createInfoWindow () {
//             const infoWindowContent = `

//             `
//         }
//     }



// }