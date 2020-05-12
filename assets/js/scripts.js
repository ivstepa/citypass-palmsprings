//Google Maps
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

const locations = {
  res1: { lat: 44.845056, lng: 20.390421 },
  res2: { lat: 44.845199, lng: 20.373047 },
  res3: { lat: 44.851722, lng: 20.352757 },
  sho1: { lat: 44.853251, lng: 20.350204 },
  sho2: { lat: 44.855046, lng: 20.352607 },
  sho3: { lat: 44.854947, lng: 20.358272 }
}

class GMap {
  constructor(element, { locations, mapOptions }) {
    this.locations = locations;
    this.map = new google.maps.Map(element, mapOptions);
    this.markers = {};

    Object.entries(this.locations).forEach(([key, location]) => {
      this.markers[key] = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    });
  }

  activate(locationId) {
    this.locationId = locationId;

    const marker = this.markers[locationId];

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 2000);
    this.map.panTo(this.locations[locationId]);
  }
}

let map;

function initMap() {
  map = new GMap(document.getElementById('map'), {
    locations: locations,
    mapOptions: { center: new google.maps.LatLng(44.845056, 20.390421), zoom: 14, styles: styles }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-location]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      map.activate(trigger.dataset.location);
    });
  });

  //Initilaize Glider.js
  const sliders = document.querySelectorAll('.glide');
  const conf = {
    type: 'carousel',
    perView: 1
  };

  sliders.forEach(item => {
    new Glide(item, conf).mount();
  });

  //Enable popups
  (() => {
    const slider = document.querySelectorAll('#category-slider');
    if (!slider) {
      return;
    }

    slider.forEach(slide => {
      slide.addEventListener('click', (e) => {
        if (!e.target.dataset.popupTarget) {
        return;
        }
        e.preventDefault();
        const popup = document.querySelector(e.target.dataset.popupTarget);
        openPopup(popup);
      });

      document.addEventListener('click', (e) => {
        if ((!e.target.dataset.hasOwnProperty('closeButton')) && (!e.target.dataset.hasOwnProperty('location'))) {
          return;
        }

        e.preventDefault();
        const popup = e.target.closest('.popup');
        closePopup(popup);
        if (e.target.dataset.hasOwnProperty('location')) {
          scrollToMap();
        }
      });
    });
  }) ();

  function openPopup(popup) {
    if (!popup) {
      return;
    }
    popup.classList.add('active');
    document.body.style['overflow'] = 'hidden';
  }

  function closePopup(popup) {
    if (!popup) {
      return;
    }
    popup.classList.remove('active');
    document.body.style['overflow'] = 'auto';
  }

  function scrollToMap() {
    document.getElementById('map').scrollIntoView();
  }

  $(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'This Week': [moment().startOf('week'), moment().endOf('week')],
           'This Month': [moment().startOf('month'), moment().endOf('month')]
        }
    }, cb);

    cb(start, end);

});
});

