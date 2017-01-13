curl -O ftp://ftp2.census.gov/geo/tiger/TIGER2016/UAC/tl_2016_us_uac10.zip
unzip tl_2016_us_uac10.zip -d tl_2016_us_uac10
cd tl_2016_us_uac10
ogr2ogr -f GeoJSON -t_srs crs:84 -sql "select * from tl_2016_us_uac10 where GEOID10='01171'" ../data/abq_bounds.geojson tl_2016_us_uac10.shp