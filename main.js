


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
                    center: new google.maps.LatLng(45.062880, 7.678361),
                    zoom: 13,
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

                const infoWindow = new google.maps.InfoWindow({
                    minWidth: 200,
                    maxWidth: 900
                })



                function createInfoWindow () {
                    const infoWindowContent = `
                    <div class="feh-content">
                        <img src="img/appa3.webp" alt="third apartment">
                        <h3>Apartment Porta Nuova</h3>
                        <a href="#">View in maps</a>
                    </div>
                    `;

                    const infoWindowContent2 = `
                    <div class="feh-content">
                        <img src="img/appb3.webp" alt="third apartment">
                        <h3>Apartment Parco Valentino</h3>
                    </div>
                    `;

                    const infoWindowContent3 = `
                    <div class="feh-content">
                        <img src="img/appc3.webp" alt="third apartment">
                        <h3>Apartment Lingotto</h3>
                    </div>
                    `;
                
                    google.maps.event.addListener (marker, 'click', function() {
                        infoWindow.setContent(infoWindowContent);
                        infoWindow.open(map, marker);
                    });

                    google.maps.event.addListener (marker2, 'click', function() {
                        infoWindow.setContent(infoWindowContent2);
                        infoWindow.open(map, marker2);
                    });

                    google.maps.event.addListener (marker3, 'click', function() {
                        infoWindow.setContent(infoWindowContent3);
                        infoWindow.open(map, marker3);
                    });

                    

                }


                createInfoWindow();

                

                
                bounds.extend(new google.maps.LatLng(marker['lat'], marker['lng']));
                bounds.extend(new google.maps.LatLng(marker2['lat'], marker['lng']));
                bounds.extend(new google.maps.LatLng(marker3['lat'], marker['lng']));



                
                map.fitBounds(bounds)

                

                infoWindow.addListener('closeclick', function() {
                    map.fitBounds(bounds);
                });

                const bounds = new google.maps.LatLngBounds();







                }
