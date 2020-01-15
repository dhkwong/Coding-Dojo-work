from django.shortcuts import render, HttpResponse


def index(request):
    time = datetime.datetime.now()

    print(time)
    return render(request,"time_display_app/index.html", {"currtime":time})

# Alternative below
# 
# from django.shortcuts import render
# from time import gmtime, strftime
    
# def index(request):
#     context = {
#         "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
#     }
#     return render(request,'appname/index.html', context)