from django.shortcuts import render, HttpResponse, redirect
import random

def index(request):
    if 'totalgold' not in request.session:
        request.session['totalgold'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = [""] #creates a list for activities
    print(request.session["totalgold"], request.session["activities"])
    return render(request, 'ninjagold_app/index.html')

def processmoney(request):
    if request.method == 'POST':
        # get gold is the input name='get gold' 'farm' is value='farm' which won't change the button display, because you use<button name='get gold' value='farm'>farm</button>
        if request.POST['getgold'] == 'farm':
            # increment by farm logic
            result=random.randrange(10, 20)
            int(result)
            request.session['totalgold']+=result
            appending="you've added "+str(result)
            appendsession=request.session['activities']
            appendsession.append(appending)
            request.session['activities']=appendsession
            print(request.session['activities'])
            return redirect('/')
        elif request.POST['getgold'] == 'cave':
            # increment by cave logic
            result=random.randrange(5, 10)
            int(result)
            request.session['totalgold']+=result
            appending="you've added "+str(result)
            appendsession=request.session['activities']
            appendsession.append(appending)
            request.session['activities']=appendsession
            print(request.session['activities'])
        elif request.POST['getgold'] == 'house':
            # increment by house logic
            result=random.randrange(2, 5)
            int(result)
            request.session['totalgold']+=result
            appending="you've added "+str(result)
            appendsession=request.session['activities']
            appendsession.append(appending)
            request.session['activities']=appendsession
            print(request.session['activities'])
        elif request.POST['getgold'] == 'casino':
            result=random.randrange(-50, 50)
            int(result)
            request.session['totalgold']+=result
            if result >= 0:
                appending="you've added "+str(result)
                appendsession=request.session['activities']
                appendsession.append(appending)
                request.session['activities']=appendsession
                print(request.session['activities'])
            else:
                appending="you've subtracted"+str(result)
                appendsession=request.session['activities']
                appendsession.append(appending)
                request.session['activities']=appendsession
                print(request.session['activities'])

        return redirect('/')

def destroy(request):
   del request.session['activities']
   del request.session['totalgold']
   return redirect('/')

# Create your views here.
