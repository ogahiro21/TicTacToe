from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

def index(request):
    return render(request,'frontend/index.html')

@api_view(['GET', 'POST'])

def teest(request):
    if request.method == 'POST':
        return Response(request.data, status=status.HTTP_200_OK)