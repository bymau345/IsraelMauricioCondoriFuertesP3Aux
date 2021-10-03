"use strict";


const buttonPoll = document.querySelector(".poll");

// SU CODIGO EMPIEZA DESDE AQUI

1//1. Cree un método llamado 'registerNewAnswer' en el objeto 'poll'. El método hace 2
//cosas:
//1.1. Muestre un prompt para que el usuario ingrese el número de la opción
//seleccionada. El mensaje debería verse así:

//1.2. Según el número de entrada, actualice la propiedad del array ‘answers'. Por
//ejemplo, si la opción es 3, aumente el valor en la posición 3 del array en una
//unidad. Asegúrese de verificar si la entrada es un número y si el número tiene
//sentido (por ejemplo, la respuesta 52 no tendría sentido, ¿verdad?)


const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer () { let prac=prompt( this.question +"\n"+ this.options[0]+"\n"+ this.options[1]+"\n"+ this.options[2]+"\n"+ this.options[3]+"\n")
     if(prac>=0&&prac<4){
         this.answers[prac]++;
         alert("Opcion Correcta");
         //4. Ejecute el método 'displayResults' al final de cada llamada al método
         //'registerNewAnswer'.
         this.displayResults(this.answers)
         
     }
     else 
          alert("Opcion Incorrecta")
         
        
    },
 // 3. Cree un método 'displayResults' que muestre los resultados de la encuesta. El
//método toma una cadena como entrada (llamada 'type'), que puede ser ‘string' o
//'array'. Si el tipo es 'array', simplemente muestre el array de resultados tal como
//está, usando console.log(). Esta debería ser la opción por defecto. Si el tipo es
//'string', muestre un mensaje de la siguiente forma: "Los resultados de la encuesta
//son 13, 2, 4, 1 respectivamente"   
    displayResults(type){ 
        if(typeof type === 'string'){
            alert("Los resultados de la encuesta son "+ type + " respectivamente");
            console.log("Los resultados de la encuesta son "+ type + " respectivamente")  
        }
        else {
         (typeof type == " ")
             alert(type);
              console.log(type);
            } 
    },
    };

    
 // 5. Use el método 'displayResults' para mostrar las 2 matrices que se muestran al
//final. Haga la prueba tanto con la opción 'array' como ‘string’. No pongas los arrays
//en el objeto ‘poll’. Entonces, ¿cómo debería verse ‘this’ en este caso?
   
//let arr1=[5,2,3]
//let arr2=[1,5,3,9,6,1]

//poll.displayResults(arr1)
//poll.displayResults(arr2)

//arr1="5,2,3"
//arr2= "1,5,3,9,6,1"

poll.displayResults(arr1)
poll.displayResults(arr2)