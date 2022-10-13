function capital1(){
    let capital1=prompt("Introduzca el capital que solicita");
    alert("el monto es = " + capital1)
    return capital1
}
  // cuotas a pagar
  function cuotas1(){
    let cuotas1 = parseInt(prompt("Ingrese las cuotas que desea, maximo 12"));
    alert("Desea el prestamo en " + cuotas1 + " cuotas?")
    return cuotas1
  }
  let capital = capital1()
  let cuotas = cuotas1()
  console.log("el capital es: " + capital)
  console.log("Las cuotas son:" + cuotas)
  document.write("el capital es: " + capital)
  document.write(" y las cuotas son:" + cuotas + ".")
//Division
  function dividir(num, denom){
    let resultado = num / denom;
    return resultado
 }
 let div = dividir(capital, cuotas)
//En consola
 console.log("Usted debe pagar " + cuotas + " cuotas sin interes de " + div)
 //En la pagina
 document.write(" Usted debe pagar " + cuotas + " cuotas sin interes de " + div)


   
