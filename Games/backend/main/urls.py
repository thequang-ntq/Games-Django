from django.urls import path, include
from . import views
#urls to different view pages

urlpatterns = [
    path("", views.index, name="index"), 
    path("rock_paper_scissor/", include("rock_paper_scissor.urls")),
    path("egg_catcher/", include("egg_catcher.urls")),
    path("dot_connect/", include("dot_connect.urls")), 
]