from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from django.shortcuts import render, get_object_or_404
# Create your views here.
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Candidate
from .serializers import CandidateSerializer
from rest_framework.parsers import MultiPartParser,FormParser,JSONParser

class CandidateListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()


class CandidateDetailView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()



class CandidateCreateView(CreateAPIView):
    # parser_classes=[MultiPartParser,FormParser,JSONParser]
    permission_classes = (AllowAny, )
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()

    # def post(self, request, *args, **kwargs):
    #   data=request.data
    #   print(data)
    #   return Response(data)


class CandidateUpdateView(UpdateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()


class CandidateDeleteView(DestroyAPIView):
    permission_classes = (AllowAny, )
    queryset = Candidate.objects.all()



class StatusUpdateView(APIView):
    def patch(self, request, pk,updatedstatus):
       
        candidate = get_object_or_404(Candidate, pk=pk)
        data={"status":updatedstatus}
        print(data,candidate.full_name)
        serializer=CandidateSerializer(candidate,data=data,partial=True)

        if serializer.is_valid():
            serializer.save()
            print("STATUS UPDATEDDDDD")
            return Response(serializer.data)
        print("insideeeeee")
        return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)