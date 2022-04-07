from django.shortcuts import render
from .models import Shp
from tif.models import Tiff

# Create your views here.
def index(request):
    shp = Shp.objects.all()
    tif = Tiff.objects.all()
    return render(request, 'index.html', {'shp': shp, 'tiff': tif})