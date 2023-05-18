function AcharQuadrante(){
    let resultado = document.getElementById("divResultado")
    
    let x = Number(document.getElementById("inptX").value)
    let y = Number(document.getElementById("inptY").value)
    
    if(x > 0 && y >0){
        resultado.innerHTML = "Está no primeiro quadrante."
    }else{
        if(x < 0 && y > 0){
            resultado.innerHTML = "Está no segundo quadrante."
    }else{
        if(x < 0 && y < 0){
            resultado.innerHTML = "Está no terceiro quadrante." 
    }else{
        if(x > 0 && y < 0){
            resultado.innerHTML = "Está no quarto quadrante."  
                }else{
                    resultado.innerHTML = "Valores inválidos. Corrige aí."
                }
            }
         }  
    }
}