from django.contrib import admin

from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields

class RentalAdmin(admin.ModelAdmin):
    formfield_overrides = {
    map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
    }
    #To change the map type (`hybrid` by default), you can add an html attribute
    # on the `AddressField` widget. The list of allowed values is: `hybrid`, `roadmap`, `satellite`, `terrain`
    # 'widget': map_widgets.GoogleMapsAddressWidget(attrs={'data-map-type': 'roadmap'})},

# Register your models here.
