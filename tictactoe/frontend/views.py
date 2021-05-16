from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

def index(request):
    return render(request,'frontend/index.html')

@api_view(['GET', 'POST'])

def teest(request):
    # if request.method == 'GET':
    return Response('Daata', status=status.HTTP_201_CREATED)
    #     return 'Yaa'