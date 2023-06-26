//funcion de javascript para colorear las preguntas del quiz
function Red(x) {
      x.style.background="Red";
    x.style.color="White";
}
//funcion de javascript para volver a la normalidad las preguntas del quiz
function Black(x) {
    x.style.background="#f1ecec";
    x.style.color="Black";
}
//funcion de jquery para consumir la api
$("#enviar").click(function () {
  let dataPLayers;
  let header = "<tr> <th>Posición</th> <th>Nombre</th> <th>NickName</th> <th>Nacionalidad</th> <th>Foto</th> </tr>"
  $.get("https://wiki-t1-default-rtdb.firebaseio.com/.json",
    function (data) {
      $.each(data.T1, function (i, item) {
        dataPLayers += "<tr><td>" + item.carril + "</td><td>" + item.nombre + "</td><td>" + item.nick + "</td><td>" + item.pais + "</td><td><img src='" + item.foto + "' width='120px' height='100px'></td></tr>"
      });
      $("#jugadoresHeader").empty();
      $("#jugadoresHeader").append(header);
      $("#jugadores").empty();
      $("#jugadores").append(dataPLayers);
    });
});
//funcion de jquery valida las respuestas
$(document).ready(function() {
  $('#quizForm').validate({
    submitHandler: function(form) {
      var totalQuestions = 10; // Número total de preguntas
      var correctAnswers = 0; // Contador de respuestas correctas
      
      // Validar cada pregunta
      for (var i = 1; i <= totalQuestions; i++) {
        var selectedOption = $('input[name="question' + i + '"]:checked').val();
        
        if (selectedOption === 'b' && i === 1) {
          correctAnswers++;
        }
        else if (selectedOption === 'b' && i === 2) {
          correctAnswers++;
        } 
        else if (selectedOption === 'b' && i === 3) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 4) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 5) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 6) {
            correctAnswers++;
          } 
          else if (selectedOption === 'c' && i === 7) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 8) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 9) {
            correctAnswers++;
          } 
          else if (selectedOption === 'c' && i === 10) {
            correctAnswers++;
          } 

      }
      
      // Mostrar la alerta con el número de respuestas correctas
      Swal.fire('Puntos obtenidos: '+correctAnswers)
      
      form.reset(); // Reiniciar el formulario si es necesario pero obligatorio 
    }
  });
});



$(document).ready(function() {
  $('#quizForm2').validate({
    submitHandler: function(form) {
      var totalQuestions = 10; // Número total de preguntas
      var correctAnswers = 0; // Contador de respuestas correctas
      
      // Validar cada pregunta
      for (var i = 1; i <= totalQuestions; i++) {
        var selectedOption = $('input[name="question' + i + '"]:checked').val();
        
        if (selectedOption === 'c' && i === 1) {
          correctAnswers++;
        }
        else if (selectedOption === 'b' && i === 2) {
          correctAnswers++;
        } 
        else if (selectedOption === 'c' && i === 3) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 4) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 5) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 6) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 7) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 8) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 9) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 10) {
            correctAnswers++;
          } 

      }
      
      // Mostrar la alerta con el número de respuestas correctas
      Swal.fire('Puntos obtenidos: '+correctAnswers)
      
      form.reset(); // Reiniciar el formulario si es necesario pero obligatorio 
    }
  });
});


document.getElementById("register").addEventListener("submit", function (event) {

  event.preventDefault();

  // HACER VALIDACIONES ANTES DE ENVIAR LA INFORMACION UTILIZANDO FETCH AL SERVIDOR.
  // Ejemplo:

  var txtusuario = $("#usuario").val().trim();

  if(txtusuario === ""){
    alert("El elemento está vacío");
    return;
  }
  if (txtusuario < 5){
    alert("El elemento está vacío");
    return;
  }
  
  
  var csrfToken = getCookie('csrftoken'); // Obtener el valor del token CSRF desde la cookie
  var formData = new FormData();
  formData.append("genero", valorGenero);

  fetch("generosAdd", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrfToken // Agregar el token CSRF al encabezado
    },
    body: formData
  })
    .then(function (response) {
      console.log(response); // imprimo la respuesta por consola.

        // Si quieren recorrer e imprimir todo el json clave por clave:
        $.each(response, function (key, value) {
        console.log("Key: " + key + ", Value: " + value);
      });

      var keyToSearch = "status"; // Clave http a buscar en el json
      var searchedValue = response[keyToSearch]; // Acceso con notación de corchetes

      if (searchedValue !== undefined && searchedValue == "200") { // si existe la clave llamada "status" y si esta tiene valor 200
        
        
        alert("Insercion correcta."); // aca pueden mostrar una alerta y luego hacer un redireccionamiento.

        window.location.href = "index"; //Redireccionamiento a index

      } else {
        console.log("La clave no existe"); // No existe la clave en la respuesta.
        return;
      }


    })
    .catch(function (error) {
      console.error(error);
    });
});



function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};
