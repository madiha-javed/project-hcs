
var loc=[
{
 "city_id":0,
 "city_name" : "Berlin", 
 "city_lat":52.520008,
 "city_lon":13.404954,

},
{
    "city_id":2,
    "city_name" : "Prague", 
    "city_lat":50.075539,
    "city_lon":14.437800,
   
   },
{
    "city_id":2,
    "city_name" : "Plovdiv", 
    "city_lat":42.144920,
    "city_lon":24.750320,
   
   },
   {
    "city_id":3,
    "city_name" : "Lahore", 
    "city_lat":31.520370,
    "city_lon":74.358749,
   
   }
];


var map = L.map('map').setView([0,0],1);
//map.setView([lat, lon], zoomlevel);
var marker= "";
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


for(let i=0; i<loc.length ; i++){
marker = L.marker([loc[i].city_lat, loc[i].city_lon]).addTo(map);
marker.bindPopup("<b>"+loc[i].city_name+"</b>").openPopup();
}
