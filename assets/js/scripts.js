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
            "color": "#529c8d59"
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
  activity1: {
    location: { lat: 33.740929, lng: -116.409774 },
    pin: 'assets/images/green-pin.png'
  },
  activity2: {
    location: { lat: 33.795500, lng: -116.499842 },
    pin: 'assets/images/orange-pin.png'
  },
  activity3: {
    location: { lat: 33.824580, lng: -116.497739 },
    pin: 'assets/images/blue-pin.png'
  },
  activity5: {
    location: { lat: 33.833072, lng: -116.546967 },
    pin: 'assets/images/pink-pin.png'
  },
  activity6: {
    location: { lat: 33.801054, lng: -116.484926 },
    pin: 'assets/images/pink-pin.png'
  },
  activity7: {
    location: { lat: 33.820023, lng: -116.545981 },
    pin: 'assets/images/pink-pin.png'
  },
  activity8: {
    location: { lat: 33.819374, lng: -116.546503 },
    pin: 'assets/images/pink-pin.png'
  },
  activity9: {
    location: { lat: 33.858527, lng: -116.558577 },
    pin: 'assets/images/pink-pin.png'
  },
  activity10: {
    location: { lat: 33.792484, lng: -116.494132 },
    pin: 'assets/images/pink-pin.png'
  },
  activity11: {
    location: { lat: 33.824450, lng: -116.549795 },
    pin: 'assets/images/pink-pin.png'
  },
  activity12: {
    location: { lat: 33.832925, lng: -116.505018 },
    pin: 'assets/images/pink-pin.png'
  },
  activity13: {
    location: { lat: 33.811504, lng: -116.528309 },
    pin: 'assets/images/pink-pin.png'
  },
  activity14: {
    location: { lat: 33.823455, lng: -116.528766 },
    pin: 'assets/images/pink-pin.png'
  },
  activity15: {
    location: { lat: 33.811868, lng: -116.542563 },
    pin: 'assets/images/pink-pin.png'
  },
  activity16: {
    location: { lat: 33.909292, lng: -116.551905 },
    pin: 'assets/images/pink-pin.png'
  },
  activity17: {
    location: { lat: 33.849054, lng: -116.547855 },
    pin: 'assets/images/pink-pin.png'
  },
  activity18: {
    location: { lat: 33.825548, lng: -116.542738 },
    pin: 'assets/images/pink-pin.png'
  },
  activity19: {
    location: { lat: 33.908052, lng: -116.566898 },
    pin: 'assets/images/pink-pin.png'
  },
  activity20: {
    location: { lat: 33.823124, lng: -116.546190 },
    pin: 'assets/images/pink-pin.png'
  },
  activity21: {
    location: { lat: 33.800417, lng: -116.546162 },
    pin: 'assets/images/pink-pin.png'
  },
  activity22: {
    location: { lat: 33.826358, lng: -116.547366 },
    pin: 'assets/images/pink-pin.png'
  },
  restaurant1: {
    location: { lat: 33.825548, lng: -116.542738 },
    pin: 'assets/images/blue-pin.png'
  },
  restaurant2: {
    location: { lat: 33.8228005, lng: -116.5784875 },
    pin: 'assets/images/blue-pin.png'
  },
  restaurant3: {
    location: { lat: 33.8237328, lng: -116.5494426 },
    pin: 'assets/images/blue-pin.png'
  },
  restaurant4: {
    location: { lat: 33.8224049, lng: -116.5482715 },
    pin: 'assets/images/blue-pin.png'
  },
  restaurant5: {
    location: { lat: 33.83418, lng: -116.5486948 },
    pin: 'assets/images/blue-pin.png'
  },
  restaurant6: {
    location: { lat: 33.8326959, lng: -116.5487097 },
    pin: 'assets/images/blue-pin.png'
  },
  restaurant7: {
    location: { lat: 33.8210364, lng: -116.5486592 },
    pin: 'assets/images/blue-pin.png'
  },
  trail1: {
    location: { lat: 33.8171946, lng: -116.5270641 },
    pin: 'assets/images/green-pin.png'
  },
  trail2: {
    location: { lat: 33.7497215, lng: -116.5431385 },
    pin: 'assets/images/green-pin.png'
  },
  trail3: {
    location: { lat: 33.8099974, lng: -116.5549416 },
    pin: 'assets/images/green-pin.png'
  },
  trail4: {
    location: { lat: 33.8236881, lng: -116.5516245 },
    pin: 'assets/images/green-pin.png'
  },
  trail5: {
    location: { lat: 33.7497215, lng: -116.5431385 },
    pin: 'assets/images/green-pin.png'
  },
  trail6: {
    location: { lat: 33.7933265, lng: -116.5652725 },
    pin: 'assets/images/green-pin.png'
  },
  trail7: {
    location: { lat: 33.820415, lng: -116.548699 },
    pin: 'assets/images/green-pin.png'
  },
  instagrammable1: {
    location: { lat: 33.7952328, lng: -116.50202 },
    pin: 'assets/images/orange-pin.png'
  },
  instagrammable2: {
    location: { lat: 33.8171946, lng: -116.5270641 },
    pin: 'assets/images/orange-pin.png'
  },
  instagrammable3: {
    location: { lat: 33.8328845, lng: -116.549177 },
    pin: 'assets/images/orange-pin.png'
  },
  instagrammable4: {
    location: { lat: 33.819827, lng: -116.5481482 },
    pin: 'assets/images/orange-pin.png'
  },
  instagrammable5: {
    location: { lat: 33.8191686, lng: -116.5486591 },
    pin: 'assets/images/orange-pin.png'
  },
  instagrammable6: {
    location: { lat: 33.8242, lng: -116.552037 },
    pin: 'assets/images/orange-pin.png'
  },
  instagrammable7: {
    location: { lat: 33.7497215, lng: -116.5431385 },
    pin: 'assets/images/orange-pin.png'
  }
};

class GMap {
  constructor(element, { locations, mapOptions }) {
    this.locations = locations;
    this.map = new google.maps.Map(element, mapOptions);
    this.markers = {};

    Object.entries(this.locations).forEach(([key, info]) => {
      this.markers[key] = new google.maps.Marker({
        position: info.location,
        map: this.map,
        icon: info.pin
      });
    });
  }

  activate(locationId) {
    this.locationId = locationId;

    const marker = this.markers[locationId];
    console.log(marker);

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 2000);
    this.map.panTo(this.locations[locationId].location);
    this.map.setZoom(16);
  }
}

let map;

function initMap() {
  map = new GMap(document.getElementById('map'), {
    locations: locations,
    mapOptions: { center: new google.maps.LatLng(33.815922, -116.528206), zoom: 11, styles: styles }
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
    perView: 1,
    swipeThreshold: 80,
    touchAngle: 25,
    animationDuration: 100,
    animationTimingFunc: 'ease-in'
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

  //Scroll to map
  function scrollToMap() {

    $('html, body').animate({
        scrollTop : $('#map').offset().top - 100
    }, 500);
  };

  //Date Range Picker
  $(function() {

    const start = moment();
    const end = moment().add(29, 'days');

    const eventDates = {
      e1: new Date(2020, 4, 25),
      e2: new Date(2020, 5, 18),
      e3: new Date(2020, 5, 19),
      e4: new Date(2020, 5, 20),
      e5: new Date(2020, 5, 22)
    };

    function addDates(dates) {
      Object.entries(dates).forEach(([event, date]) => {
        document.getElementById(event).getElementsByTagName('span')[0].innerHTML = new Intl.DateTimeFormat('en-US').format(date);
      });
    };

    addDates(eventDates);

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

    updateEvents(start, end);

    //Filter events
    $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
      updateEvents(picker.startDate, picker.endDate);
    });

    function updateEvents(startDate, endDate) {
      let hasEvents = false;
      Object.entries(eventDates).forEach(([event, date]) => {
        const state = (date >= startDate) && (date <= endDate);

        document.getElementById(event).classList.toggle('active', state);
        hasEvents = hasEvents || state;
      });

      document.getElementById('noevents').classList.toggle('active', !hasEvents);
    }
  });
});



