from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random


def index(request):
    return render(request,'frontend/index.html')

@api_view(['GET', 'POST'])

def teest(request):
    if request.method == 'POST':
        # とりあえずランダム
        while(1):
            sq = request.data
            num = random.randint(0, len(sq)-1)
            if(sq[num] == None):
                sq[num] = 'o'
                break
        return Response(sq, status=status.HTTP_200_OK)