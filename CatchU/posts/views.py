from django.shortcuts import render
from django.http import HttpResponse

# Receive a request and return a response
def main(request):
    return HttpResponse("<h1>Hello<h1>")