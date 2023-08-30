ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32643").setExtent([74.004627, 15.293951, 394122.906250, 1692210.875000]);
var wms_layers = [];

var lyr_curtorim_cog_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ec2-13-235-246-32.ap-south-1.compute.amazonaws.com:8080/geoserver/Curtorim/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "curtorim_cog",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "curtorim_cog",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_curtorim_cog_0, 0]);
var format_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1 = new ol.format.GeoJSON();
var features_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1 = format_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.readFeatures(json_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.addFeatures(features_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1);
var lyr_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1, 
                style: style_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1,
                interactive: true,
                title: '<img src="styles/legend/FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.png" /> Fields Curtorim Handi Kuris — handi_kuris__curtorim__fields'
            });

lyr_curtorim_cog_0.setVisible(true);lyr_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.setVisible(true);
var layersList = [lyr_curtorim_cog_0,lyr_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1];
lyr_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.set('fieldAliases', {'fid': 'fid', 'S_No': 'S_No', 'Survey_No': 'Survey_No', 'Sub_Division_No': 'Sub_Division_No', 'Name_of_the_Occupant': 'Name_of_the_Occupant', 'Paid_or_NotPaid': 'Paid_or_NotPaid', 'Yield_Ha': 'Yield_Ha', 'Area_ha': 'Area_ha', 'Harvest_kg': 'Harvest_kg', 'Area': 'Area', 'Amount_Paid': 'Amount_Paid', 'Drone_Sprayed': 'Drone_Sprayed', 'Yield_Kg_/_Ha': 'Yield_Kg_/_Ha', 'Tractors_Used': 'Tractors_Used', });
lyr_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.set('fieldImages', {'fid': 'TextEdit', 'S_No': 'TextEdit', 'Survey_No': 'TextEdit', 'Sub_Division_No': 'TextEdit', 'Name_of_the_Occupant': 'TextEdit', 'Paid_or_NotPaid': 'CheckBox', 'Yield_Ha': 'TextEdit', 'Area_ha': 'TextEdit', 'Harvest_kg': 'TextEdit', 'Area': 'TextEdit', 'Amount_Paid': 'TextEdit', 'Drone_Sprayed': 'CheckBox', 'Yield_Kg_/_Ha': 'TextEdit', 'Tractors_Used': 'CheckBox', });
lyr_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.set('fieldLabels', {'fid': 'no label', 'S_No': 'no label', 'Survey_No': 'no label', 'Sub_Division_No': 'no label', 'Name_of_the_Occupant': 'no label', 'Paid_or_NotPaid': 'no label', 'Yield_Ha': 'no label', 'Area_ha': 'no label', 'Harvest_kg': 'no label', 'Area': 'no label', 'Amount_Paid': 'no label', 'Drone_Sprayed': 'no label', 'Yield_Kg_/_Ha': 'no label', 'Tractors_Used': 'no label', });
lyr_FieldsCurtorimHandiKurishandi_kuris__curtorim__fields_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});