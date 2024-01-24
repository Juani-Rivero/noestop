function playGame(){
  $("#instructions").addClass("d-none")
  $("#game-content").removeClass("d-none")
};
function showInstructions(){
  $("#instructions").removeClass("d-none")
  $("#game-content").addClass("d-none")
};

function drawCard(ev){
    //falta agregar a la session la pregunta que salio para que no se repita
    var preguntas = [
        {
          "q": "Compositores clásicos más importantes",
          "e": "(según la enciclopedia británica)",
          "a": {
            "1": "Beethoven",
            "2": "Bach",
            "3": "Mozart",
            "4": "Brahms",
            "5": "Wagner",
            "6": "Debussy",
            "7": "Tchaikovsky",
            "8": "Chopin",
            "9": "Haydn",
            "10": "Vivaldi"
          }
        },
        {
          "q": "Capitales de países europeos",
          "e": "",
          "a": {
            "1": "París",
            "2": "Berlín",
            "3": "Londres",
            "4": "Roma",
            "5": "Madrid",
            "6": "Ámsterdam",
            "7": "Atenas",
            "8": "Viena",
            "9": "Praga",
            "10": "Varsovia"
          }
        },
        {
          "q": "Elementos químicos y sus símbolos",
          "e": "",
          "a": {
            "1": "Hidrógeno (H)",
            "2": "Oxígeno (O)",
            "3": "Carbono (C)",
            "4": "Nitrógeno (N)",
            "5": "Helio (He)",
            "6": "Sodio (Na)",
            "7": "Cloro (Cl)",
            "8": "Hierro (Fe)",
            "9": "Calcio (Ca)",
            "10": "Potasio (K)"
          }
        }
        // ... puedes continuar agregando más elementos según sea necesario
      ]
    
    function getRandomItem(preguntas) {
        const randomIndex = Math.floor(Math.random() * preguntas.length);
        return preguntas[randomIndex];
      }
      
      // Usage
      const randomItem = getRandomItem(preguntas);
      console.log(randomItem)
      console.log(randomItem.q)
      console.log(randomItem['q'])

      $("#exampleModalToggleLabel").text(randomItem.q);
      $("#explanation").text(randomItem.e);
      var ol = document.createElement("ol")
      for (var key in randomItem.a) {
        if (randomItem.a.hasOwnProperty(key)) {
            var li = document.createElement("li");
            li.innerText = randomItem.a[key]
            ol.appendChild(li);
        }
      }
    //   for(i=0; i<randomItem.a.length; i++){
    //     var li = document.createElement("li");
    //     li.textContent = randomItem.a[i];
    //     ol.appendChild(li);
    //   }
      console.log(ol)
      $("#answers").html(ol);
      debugger;
}
function addPoint(player){
    var id= "playerPoints" + player;
    var input = document.getElementById(id)
    console.log(input)
    var newValue = parseInt(input.value) + 1;
    console.log(newValue)
    input.value = newValue;
    
    if(newValue == 4){
        alert("El jugador " + player + " ha ganado el juego!")
        input.closest(".card").style.backgroundColor = "green"
    }
    alert("El jugador "+ player + " recibe 1 punto!")
};

function removeLife(player){
    var id= "playerLives" + player;
    var input = document.getElementById(id)
    console.log(input)
    var newValue = parseInt(input.value) - 1;
    console.log(newValue)
    input.value = newValue;
    
    alert("El jugador "+ player + " pierde 1 vida!")
    if(newValue == 0){
        alert("El jugador " + player + "queda eliminado del juego!")
        input.closest(".card").style.backgroundColor = "red"
    }

};


function hideAllModals() {
    // Get all modal elements
    var modals = document.querySelectorAll('.modal');

    // Iterate through each modal and close it
    modals.forEach(function(modal) {
        // Use Bootstrap's modal method to hide the modal
        $(modal).modal('hide');
    });
}
// $(".winner").click(function(ev){
//     var player = ev.target.dataset['player'];
//     console.log(player)
// });


