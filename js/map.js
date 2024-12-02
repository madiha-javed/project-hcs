
var loc=[
{
 "city_id":0,
 "city_name" : "berlin", 
 "city_lat":52.520008,
 "city_lon":13.404954,

},
{
    "city_id":2,
    "city_name" : "prague", 
    "city_lat":50.075539,
    "city_lon":14.437800,
   
   },
{
    "city_id":2,
    "city_name" : "plovdiv", 
    "city_lat":42.144920,
    "city_lon":24.750320,
   
   },
   {
    "city_id":3,
    "city_name" : "lahore", 
    "city_lat":31.520370,
    "city_lon":74.358749,
   
   }
];


//var map = L.map('map').setView([56.243350,57.552330], 13);
var map= L.map('map').fitWorld();
var marker= "";
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


for(let i=0; i<loc.length ; i++){
marker = L.marker([loc[i].city_lat, loc[i].city_lon]).addTo(map);
marker.bindPopup("<b>"+loc[i].city_name+"</b>").openPopup();
}
