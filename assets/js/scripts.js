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
  activity1: { lat: 33.740929, lng: -116.409774 },
  activity2: { lat: 33.795500, lng: -116.499842 },
  activity3: { lat: 33.821573, lng: -116.546991 },
  activity4: { lat: 33.824580, lng: -116.497739 },
  activity5: { lat: 33.833072, lng: -116.546967 },
  activity6: { lat: 33.801054, lng: -116.484926 },
  activity7: { lat: 33.820023, lng: -116.545981 },
  activity8: { lat: 33.819374, lng: -116.546503 },
  activity9: { lat: 33.858527, lng: -116.558577 },
  activity10: { lat: 33.792484, lng: -116.494132 },
  activity11: { lat: 33.824450, lng: -116.549795 },
  activity12: { lat: 33.832925, lng: -116.505018 },
  activity13: { lat: 33.811504, lng: -116.528309 },
  activity14: { lat: 33.823455, lng: -116.528766 },
  activity15: { lat: 33.811868, lng: -116.542563 },
  activity16: { lat: 33.909292, lng: -116.551905 },
  activity17: { lat: 33.849054, lng: -116.547855 },
  activity18: { lat: 33.825548, lng: -116.542738 },
  activity19: { lat: 33.908052, lng: -116.566898 },
  activity20: { lat: 33.823124, lng: -116.546190 },
  activity21: { lat: 33.800417, lng: -116.546162 },
  activity22: { lat: 33.826358, lng: -116.547366 }
  // activity23: { lat: , lng: },
  // activity24: { lat: , lng: },
  // activity25: { lat: , lng: },
  // activity26: { lat: , lng: },
  // activity27: { lat: , lng: },
  // activity28: { lat: , lng: },
  // activity29: { lat: , lng: },
  // activity30: { lat: , lng: },
};

class GMap {
  constructor(element, { locations, mapOptions }) {
    this.locations = locations;
    this.map = new google.maps.Map(element, mapOptions);
    this.markers = {};

    Object.entries(this.locations).forEach(([key, location]) => {
      this.markers[key] = new google.maps.Marker({
        position: location,
        icon: "assets/images/pin.png",
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
      e1: new Date(2020, 4, 15),
      e2: new Date(2020, 7, 1),
      e3: new Date(2020, 8, 1)
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



