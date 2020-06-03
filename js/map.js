function iniciarMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(19.304740, -99.203767),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'img/';
  
  var icons = {
    tienda1: {
      icon: iconBase + 'logo_italika1.png'
    },
    tienda2: {
      icon: iconBase + 'logo_italika1.png'
    },
    tienda3: {
      icon: iconBase + 'logo_italika1.png'
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
  });
}