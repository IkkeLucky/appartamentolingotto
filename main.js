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
    },
    {
        locationName: 'Appartamento Ellero',
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


                


                const santaGiulia = {lat: 45.070845, lng: 7.696867};
                const stellone = {lat: 45.038638, lng: 7.670401};  
                const lingotto = {lat: 45.031976, lng: 7.669284}; 
                const ellero = {lat: 45.035144, lng:7.669833};



                const map = new google.maps.Map(mapCanvas, mapOptions);
                const marker = new google.maps.Marker({position: santaGiulia, map: map});
                const marker2 = new google.maps.Marker({position: stellone, map: map,});
                const marker3 = new google.maps.Marker({position: lingotto, map: map,});
                const marker4 = new google.maps.Marker({position: ellero, map: map,});

                const infoWindow = new google.maps.InfoWindow({
                    minWidth: 200,
                    maxWidth: 400
                })



                function createInfoWindow () {
                    const infoWindowContent = `
                    <div class="feh-content">
                        <img src="img/appartG/g1.webp" alt="third apartment">
                        <h3>Via Santa Giulia</h3>
                        <a href="singlepage-g.html" target="_blank"> Scopri </a>
                    </div>
                    `;
                    const infoWindowContent2 = `
                    <div class="feh-content">
                        <img src="img/appartH/h1.webp" style="width: 200px; height: 200px;" alt="third apartment">
                        <h3>Via Stellone</h3>
                        <a href="singlepage-h.html" target="_blank"> Scopri </a>
                    </div>
                    `;

                    const infoWindowContent3 = `
                    <div class="feh-content">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <h5>Home Lingotto</h5>
                        <a href="singlepage-b.html" target="_blank"> Scopri </a>
                        <img class="d-block w-100" src="img/appartB/b1.webp" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <h5>Via Genova 2P SX</h5>
                        <a href="singlepage-c.html" target="_blank"> Scopri </a>
                        <img class="d-block w-100" src="img/appartC/c1.webp" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <h5>Via Genova PT SX Itcilo</h5>
                        <a href="singlepage-d.html" target="_blank"> Scopri </a>
                        <img class="d-block w-100" src="img/appartD/d1.webp" alt="Third slide">
                      </div>
                      <div class="carousel-item">
                        <h5>La palazzina 1 piano SX</h5>
                        <a href="singlepage-e.html" target="_blank"> Scopri </a>
                        <img class="d-block w-100" src="img/appartE/e1.webp" alt="Third slide">
                      </div>
                      <div class="carousel-item">
                        <h5>Via Genova 1P DX</h5>
                        <a href="singlepage-f.html" target="_blank"> Scopri </a>
                        <img class="d-block w-100" src="img/appartF/f1.webp" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                    </div>
                    </div>
                    `;



                    const infoWindowContent4 = `
                    <div class="feh-content">
                        <img src="img/appartA/a1.webp" alt="third apartment">
                        <h3>Via Ellero</h3>
                        <a href="singlepage.html" target="_blank"> Scopri </a>
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

                    google.maps.event.addListener (marker4, 'click', function() {
                        infoWindow.setContent(infoWindowContent4);
                        infoWindow.open(map, marker4);
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
