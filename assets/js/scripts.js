const styles = [
      {
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#003333"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffc6aa"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f8f6f2"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#f64f91"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "saturation": -100
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#8cbcf6"
          }
        ]
      }
];

class GMap {
  constructor(element, { locations, mapOptions }) {
    this.locations = locations;
    this.map = new google.maps.Map(element, mapOptions);

    this.markers = new google.maps.Marker();

  }

  activate(location) {
    this.clear();

    if (!this.locations.hasOwnProperty(location)) {
      return;
    }

    this.marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => this.marker.setAnimation(null), 2000);

    this.marker.setPosition(this.locations[location]);
    this.marker.setMap(this.map);
    this.map.panTo(this.locations[location]);
  }

  clear() {
    this.marker.setAnimation(null);
    this.marker.setMap(null);
  }
}

let map;

function initMap() {
  map = new GMap(document.getElementById('map'), {
    locations: {
      res1: { lat: 44.845056, lng: 20.390421 },
      res2: { lat: 44.845199, lng: 20.373047 }
    },
    mapOptions: { center: new google.maps.LatLng(44.845056, 20.390421), zoom: 16, styles: styles }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-location]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      map.activate(trigger.dataset.location);
    });
  });
});



// var map;
//   function initMap() {

//   map = new google.maps.Map(
//       document.getElementById('map'),
//       {center: new google.maps.LatLng(33.740867, -116.409742), zoom: 16, styles: styles});

//   var iconBase =
//     'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

//   var icons = {
//     parking: {
//       icon: iconBase + 'parking_lot_maps.png'
//     },
//     library: {
//       icon: iconBase + 'library_maps.png'
//     },
//     info: {
//       icon: iconBase + 'info-i_maps.png'
//     }
//   };

//   var features = [
//     {
//       position: new google.maps.LatLng(-33.91721, 151.22630),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91539, 151.22820),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91747, 151.22912),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91910, 151.22907),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91725, 151.23011),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91872, 151.23089),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91784, 151.23094),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91682, 151.23149),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91790, 151.23463),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91666, 151.23468),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.916988, 151.233640),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
//       type: 'library'
//     }
//   ];

//   // Create markers.
//   for (var i = 0; i < features.length; i++) {
//     var marker = new google.maps.Marker({
//       position: features[i].position,
//       icon: icons[features[i].type].icon,
//       map: map
//     });
//   };
// }




// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//         center: new google.maps.LatLng(-33.91722, 151.23064),
//         zoom: 16,
//         styles:
//         [
//           {
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.country",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.land_parcel",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.locality",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.locality",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#003333"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.neighborhood",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.province",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "landscape.man_made",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#ffc6aa"
//               }
//             ]
//           },
//           {
//             "featureType": "landscape.natural.terrain",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#f8f6f2"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.attraction",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "color": "#f64f91"
//               }
//             ]
//           },
//           {
//             "featureType": "road",
//             "elementType": "labels.icon",
//             "stylers": [
//               {
//                 "saturation": -100
//               }
//             ]
//           },
//           {
//             "featureType": "water",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#8cbcf6"
//               }
//             ]
//           }
//         ]
//   });

//   var locations = [
//     new google.maps.LatLng(33.740867, -116.409742),
//     new google.maps.LatLng(33.795438, -116.499810),
//     new google.maps.LatLng(33.824607, -116.497793),
//     new google.maps.LatLng(33.907981, -116.566930),
//   ];

//   var icon = "/assets/images/pin.png";
// }
