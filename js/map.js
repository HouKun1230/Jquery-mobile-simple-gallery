$(document).ready(function(){
  var latlng = new google.maps.LatLng(48.4212,-89.2606);

  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("mymap"),myOptions);
 });