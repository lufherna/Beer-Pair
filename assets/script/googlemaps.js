
      // var map;
      // var infoWindow;
      // var localStore;
      // //var localeSearch = $("#marketSearch").val().trim();

      //   $(document).ready(function() {
      //       $('#map').hide();
      //     });
     
      //   //event delegation
      //    $(document).on("click", "#storeSearch", initMap)

      //     function initMap() {
      //         $("#map").show();
      //         map = new google.maps.Map(document.getElementById('map'), {
      //           center: {lat: -34.397, lng: 150.644},
      //           zoom: 13
      //         });

      //       //HTML 5 geolocation 
      //        if (navigator.geolocation) {
      //           navigator.geolocation.getCurrentPosition(function(position) {
      //             var userLocation = {
      //               lat: position.coords.latitude,
      //               lng: position.coords.longitude
      //             };

      //           //sets local store var to user's location
      //           localStore = localStorage.setItem('key', userLocation);

      //             var request = {
      //               location: userLocation,
      //               radius: '5000',
      //               query: 'supermarket',
      //               }

      //           service = new google.maps.places.PlacesService(map);
      //           service.textSearch(request, callback);

      //           infoWindow = new google.maps.InfoWindow;

      //           infoWindow.setPosition(userLocation);
      //           infoWindow.setContent('There you Are!');
      //           infoWindow.open(map);
      //           map.setCenter(userLocation);

                
      //         })

      //       //callback function that'll run results 
      //         function callback(results, status) {
      //           console.log(results)
      //           if (status === google.maps.places.PlacesServiceStatus.OK) {
      //             for (var i = 0; i < 10; i++) {
      //               createMarker(results[i]);
      //               }
      //             }

      //         //create markers based on callback function and location
      //        function createMarker(place) {
      //             var placeLoc = place.geometry.location;
      //             var infowindow = new google.maps.InfoWindow()
      //             var marker = new google.maps.Marker({
      //               map: map,
      //               position: place.geometry.location
      //             });

      //             google.maps.event.addListener(marker, 'click', function() {
      //             infowindow.setContent(place.name);
      //             infowindow.open(map, this);
      //             });
      //           }
      //       }
      //     }
      //   }
