function add (x, y){

 let resultado = x + y

 return resultado

    
}
console.log (add(2,4))




function multiply (a, b){

    let multiplicacao = 0

        for(let cont = 1; cont <= b; cont++){

            multiplicacao = add(multiplicacao, a)

                            
    }
    
    return multiplicacao
}
console.log(multiply(6,8))





function power (x,n){

    let potencia = 1;

     for(cont = 1; cont <= n; cont++){
       
              
        potencia = multiply (potencia, x)
             
                 

         
     } 

     return potencia

}

console.log(power(2,8))






function factorial (n){
    let fator = 1;

    for(let cont = 1; cont <= n; cont++){

        fator = multiply (fator, cont)
        

    }

    return fator
}

console.log(factorial(4))
