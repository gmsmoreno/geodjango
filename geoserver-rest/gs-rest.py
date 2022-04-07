# Import the library
from geo.Geoserver import Geoserver

# Initialize the library
geo = Geoserver('https://geoserver.merx.tech/geoserver', username='gabriel', password='Mudar@123')

# geo.delete_workspace(workspace='demo')

# Import raster to geoserver
# geo.create_coveragestore(layer_name='raster1', path=r'/home/gabriel/anaconda3/envs/geo-web/data/raster1.tif', workspace='demo')

geo.create_featurestore(store_name='geo_data', workspace='geoapp', db='carbon', host='34.95.180.123', pg_user='gabriel', pg_password='Mudar@123')

geo.publish_featurestore(workspace='geoapp', store_name='geo_data', pg_table='app_ac')

# geo.upload_style(r'/home/gabriel/anaconda3/envs/geo-web/data/style/raster1.sld', workspace='demo')

# geo.publish_style(layer_name='raster1', style_name='raster-new', workspace='demo')


# geo.create_coveragestyle(raster_path=r'/home/gabriel/anaconda3/envs/geo-web/data/raster1.tif', style_name='raster-new', workspace='demo',
                        # color_ramp='hsv')

# geo.create_outline_featurestyle('polygon-style', workspace='demo')

# geo.publish_style(layer_name='app_ac', style_name='polygon-style', workspace='demo')