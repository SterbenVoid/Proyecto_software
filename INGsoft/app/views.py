from django.shortcuts import render
from .models import usuario as XD, Genero

# Create your views here.

def login(request):

        return render(request, 'login.html')

def register(request):
    if request.method != "POST":
        # no es un POST por lo tanto se muestra el formulario para agregar
        generos = Genero.objects.all()
        context = {"generos": generos}
        return render(request, 'register.html', context)
    else:
        print("--->>>> llego al else de addAlumnos crea el objeto ")
        # Es un POST, por lo tanto se recuperan los datos del formulario
        # y se graban en la tabla
        usuario = request.POST["usuario"]
        genero = request.POST["genero"]
        correo = request.POST["correo"]
        contraseña= request.POST["contraseña"]

        objGenero = Genero.objects.get(id_genero=genero)
        obj = XD.objects.create(
                                    usuario=usuario,
                                    id_genero=objGenero,
                                    correo=correo,
                                    contraseña=contraseña)
        obj.save()
        context = {"mensaje": "OK, datos grabados..."}
        return render(request, 'register.html', context)
    

def menucarrito(request):
    return render(request, 'menucarrito.html')