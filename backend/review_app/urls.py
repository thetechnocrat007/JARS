
from django.urls import path
from .views import CandidateCreateView,CandidateDeleteView,CandidateDetailView,CandidateListView,CandidateUpdateView,StatusUpdateView
urlpatterns = [
    path('create/', CandidateCreateView.as_view(),name='createview'),
    path('delete/<pk>', CandidateDeleteView.as_view(),name='deleteview'),
    path('list/', CandidateListView.as_view(),name='listview'),
    path('<pk>/detail/', CandidateDetailView.as_view(),name='detailview'),
    path('<pk>/update/', CandidateUpdateView.as_view(),name='updateview'),
    path('<pk>/<updatedstatus>/updatestatus', StatusUpdateView.as_view(),name='updatestatus'),
]
