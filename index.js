var fs = require('fs');
var turf = require('@turf/turf');


var buffer = fs.readFileSync('data/abq_bounds.geojson');
var features = JSON.parse(buffer.toString());

var bbox = turf.bbox(features);
var bboxPolygon = turf.bboxPolygon(bbox);
var cellSize = 0.25;
var units = 'miles';
var squareGrid = turf.squareGrid(bbox, cellSize, units);

fs.writeFileSync('data/abq_grid.geojson', JSON.stringify(squareGrid));
console.log('saved abq_grid.geojson');