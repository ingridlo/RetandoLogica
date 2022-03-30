const resultado = document.getElementById("texto");
const numeroU = document.getElementById("numeroUno");
const numeroD = document.getElementById("numeroDos");
const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const boton3 = document.getElementById("btn3");
const boton4 = document.getElementById("btn4");

numeroU.addEventListener("click", () =>{
    document.getElementById("form").reset();
})


boton1.addEventListener("click", () => {
  let numero = numeros();
  if (numero != 0) {
    let menor = (numero[0] + numero[1] - Math.abs(numero[0] - numero[1])) / 2;
    console.log(menor);   
    Swal.fire({
        title: menor,
        text: "Es el menor de los números",
        confirmButtonText: 'OK'
      })
  }
});

boton2.addEventListener("click", () => {
  let numero = numeros();
  if (numero != 0) {
    let iguales = numero[0] / numero[1];
    switch (iguales) {
      case 1:
        Swal.fire({
            title: "Números iguales",           
            confirmButtonText: 'OK'
          })        
        break;
      default:
        Swal.fire({
            title: "Números diferentes",           
            confirmButtonText: 'OK'
          })    
    }
  }
});

boton3.addEventListener("click",() =>{
    let numero = numeros();
    let A = numero[0];
    let B = numero[1];    
    A= A*B;
    B = A/B;
    A =  A/B;
    Swal.fire({
        title: "1er Número= " + A +"\n " + "2do Número =" + B ,           
        confirmButtonText: 'OK'
      })        
    
})


boton4.addEventListener("click",() =>{
    let numero = numeros();
    let suma = numero[0]-(-numero[1]);
    Swal.fire({
        title: suma , 
        text: 'Es la suma de los dos números',
        confirmButtonText: 'OK'
      })        
    
})


function numeros() {
  let numero1 = [parseFloat(numeroU.value), parseFloat(numeroD.value)]; 
  if (
    !Number.isInteger(numero1[0]) |
    !Number.isInteger(numero1[1]) |
    (numero1[0] < 0) |
    (numero1[1] < 0)
  ) {
    
    Swal.fire({
        title: "Los números deben ser enteros positivos",   
        icon: 'error',       
        confirmButtonText: 'OK'
      })       
    return 0;
  } else {
    
    return numero1;
  }
}
