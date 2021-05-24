from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random


def index(request):
    return render(request,'frontend/index.html')
    
def winner(squares):
    lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    i = 0
    for i in range(0, len(lines)):
      [a, b, c] = lines[i]
      if squares[a] and squares[a] == squares[b] and squares[a] == squares[c]:
        return squares[a]
    return None

@api_view(['GET', 'POST'])

def cpu(request):
    if request.method == 'POST':
        sq = request.data
        swap = sq
        i = 0
        # 自分が揃いそうならおく
        for i in range(0, 9):
            if sq[i] == None:
                swap[i] = 'o'
                if winner(swap) != None:
                    sq[i] = 'o'
                    return Response(sq, status=status.HTTP_200_OK)
                else:
                    swap[i] = None
        # 相手が揃いそうなら阻止
        for i in range(0, 9):
            if sq[i] == None:
                swap[i] = 'X'
                if winner(swap) != None:
                    sq[i] = 'o'
                    return Response(sq, status=status.HTTP_200_OK)
                else:
                    swap[i] = None
        # 真ん中が空いてたら真ん中
        if sq[4] == None:
            sq[4] = 'o'
            return Response(sq, status=status.HTTP_200_OK)

        # 角が一個もないなら角
        if sq[0] != 'o' and sq[2] != 'o' and sq[6] != 'o' and sq[8] != 'o':
            if(sq[0] != 'X' and sq[1] != 'X' and sq[3] != 'X' and sq[8] != 'X'): sq[0] = 'o'
            elif(sq[2] != 'X' and sq[1] != 'X'): sq[2] = 'o'
            elif(sq[6] != 'X'): sq[6] = 'o'
            elif(sq[8] != 'X'): sq[8] = 'o'
            return Response(sq, status=status.HTTP_200_OK)
        # 角優先
        for i in [0, 2, 6, 8]:
            if sq[i] == None:
                sq[i] = 'o' 
                return Response(sq, status=status.HTTP_200_OK)

        # とりあえずランダム
        while(1):
            num = random.randint(0, len(sq)-1)
            if(sq[num] == None):
                sq[num] = 'o'
                break
        return Response(sq, status=status.HTTP_200_OK)