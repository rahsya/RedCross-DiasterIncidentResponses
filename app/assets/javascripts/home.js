$(document).ready(function(){
  
  // disable scalability with javascript until gesturestart event fires // fixes iPad portrait-to-layout scaling bug
  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      var viewportmeta = document.querySelector('meta[name="viewport"]');
      if (viewportmeta) {
          viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
          document.body.addEventListener('gesturestart', function () {
              viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
          }, false);
      }
  }

$('#enddate').val(new Date().toJSON().slice(0,10));

});


function initialize() {
var map = new google.maps.Map(document.getElementById('googft-mapCanvas'), {
center: new google.maps.LatLng(41.850033, -87.6500523),
zoom: 12,
mapTypeId: google.maps.MapTypeId.ROADMAP
});
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

layer = new google.maps.FusionTablesLayer({
map: map,
heatmap: {enabled: false},
query: {
select: "col5",
from: "1Hdw41bWh2Kpy4fGmXgun9jvhLj-1VBvQDw2CdRY",
where: ""
},
options: {
styleId: 4,
templateId: 10
}
});


}
google.maps.event.addDomListener(window, 'load', initialize);



/*$('#mylocation').submit = function searchMyLocation(){
    var mylocation = $('#mylocation').val();
   layer.query.where = '"Zip Code" == mylocation';

  }
  layer.setMap(map);
}
*/

$('#mylocation').submit(function() {
var map = new google.maps.Map(document.getElementById('googft-mapCanvas'), {
center: new google.maps.LatLng(41.850033, -87.6500523),
zoom: 12,
mapTypeId: google.maps.MapTypeId.ROADMAP
});
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

      var mylocation = $('#myzip').val();
      mylocation += "";
      console.log(mylocation);
      layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: {enabled: false},
      query: {
      select: "col5",
      from: "1Hdw41bWh2Kpy4fGmXgun9jvhLj-1VBvQDw2CdRY",
      where: "'Zip Code' = '" + mylocation + "'",
      },
      options: {
      styleId: 4,
      templateId: 10
      }
      }); 
      return false;
});

$('#daterange').submit(function() {
var map = new google.maps.Map(document.getElementById('googft-mapCanvas'), {
center: new google.maps.LatLng(41.850033, -87.6500523),
zoom: 12,
mapTypeId: google.maps.MapTypeId.ROADMAP
});
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

      var startdate = $('#startdate').val();
      var enddate = $('#enddate').val();
      console.log(startdate);
      var dateQuery = "'Dispatch Date' >= '" + startdate + "' AND 'Dispatch Date' <= '" + enddate + "'";
      console.log(dateQuery);
      layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: {enabled: false},
      query: {
      select: "col5",
      from: "1Hdw41bWh2Kpy4fGmXgun9jvhLj-1VBvQDw2CdRY",
      where: dateQuery,
      },
      options: {
      styleId: 4,
      templateId: 10
      }
      }); 
      return false;
});
