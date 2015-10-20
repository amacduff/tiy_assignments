function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(30.2720096, -97.754792),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    map.set('styles', [
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [
				{ color: '#A6653F' },
				{ weight: 0.5 }
			]
		}, {
			featureType: 'road',
			elementType: 'labels',
			stylers: [
				{ saturation: -100 },
				{ invert_lightness: true }
			]
		}, {
			featureType: 'landscape',
			elementType: 'geometry',
			stylers: [
				{ color: '#F2DEC4' },
			]
		}, {
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [
				{ color: '#D9C5A0' },
			]
		}
	]);
}
google.maps.event.addDomListener(window, 'load', initialize);