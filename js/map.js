function iniciarMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(19.304740, -99.203767),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'img/';
  
  var icons = {
    tienda1: {
      icon: iconBase + 'favicon.png',
      info: '666666 - PROMOACTIVADOR ZONA CENTRO'
    },
    tienda2: {
      icon: iconBase + 'chedraui.png',
      info: '777777 - CHEDRAUI ZONA CENTRO'
    },
    tienda3: {
      icon: iconBase + 'sams.png',
      info: '888888 - SAMS ZONA CENTRO'
    }
  };
  var features = [
    {
      position: new google.maps.LatLng(19.304809, -99.2040453),
      type: 'tienda1'
    },
      {
      position: new google.maps.LatLng(19.3036745, -99.2002704),
      type: 'tienda2'
    },
      {
      position: new google.maps.LatLng(19.3060093, -99.2036983),
      type: 'tienda3'
    }
  ];
  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });

    var ventana = '<div class="info_content"><h3>' + icons[feature.type].info + '</h3><p>AUTOSERVICIOS</p></div>'
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infoWindow.setContent(ventana);
        infoWindow.open(map, marker);
      }
    })(marker, i));
  });
}