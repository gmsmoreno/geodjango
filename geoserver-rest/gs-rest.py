# Import the library
from geo.Geoserver import Geoserver

# Initialize the library
geo = Geoserver('http://localhost:8080/geoserver', username='admin', password='geoserver')

# geo.delete_workspace(workspace='demo')

# Import raster to geoserver
# geo.create_coveragestore(layer_name='raster1', path=r'/home/gabriel/anaconda3/envs/geo-web/data/raster1.tif', workspace='demo')

geo.create_featurestore(store_name='geo_data', workspace='geoapp', db='data', host='localhost', pg_user='postgres', pg_password='postgres')

geo.publish_featurestore(workspace='geoapp', store_name='geo_data', pg_table='C_Jamoat')

# geo.upload_style(r'/home/gabriel/anaconda3/envs/geo-web/data/style/raster1.sld', workspace='demo')

# geo.publish_style(layer_name='raster1', style_name='raster-new', workspace='demo')


# geo.create_coveragestyle(raster_path=r'/home/gabriel/anaconda3/envs/geo-web/data/raster1.tif', style_name='raster-new', workspace='demo',
                        # color_ramp='hsv')

# geo.create_outline_featurestyle('polygon-style', workspace='demo')

# geo.publish_style(layer_name='C_Jamoat', style_name='polygon-style', workspace='demo')