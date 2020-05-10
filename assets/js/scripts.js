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

    this.marker = new google.maps.Marker();

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

  (() => {
    const slider = document.getElementById('category-slider');
    if (!slider) {
      return;
    }

    slider.addEventListener('click', (e) => {
      if (!e.target.dataset.popupTarget) {
        return;
      }
      e.preventDefault();
      const popup = document.querySelector(e.target.dataset.popupTarget);
      openPopup(popup);
    });

      document.addEventListener('click', (e) => {
      console.log(e.target.dataset);
      if (!e.target.dataset.hasOwnProperty('closeButton')) {
        return;
      }
      e.preventDefault();
      const popup = e.target.closest('.popup');
      console.log(popup);
      closePopup(popup);
    });
  }) ();

  function openPopup(popup) {
    if (!popup) {
      return;
    }
    popup.classList.add('active');
  }

  function closePopup(popup) {
    popup.classList.remove('active');
    console.log(popup);
  }

});

