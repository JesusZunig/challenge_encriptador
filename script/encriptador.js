function minusculas(e) {
  e.value = e.value.toLowerCase();
}


function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9 ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function copiar(){
  var res = document.querySelector("#mensaje");
  res.select();
  document.execCommand("copy");
}

function encriptar() {
  
  var frase = document.getElementById("encriptador").value;
  var bandera = 0;
  var guardarFrase = "";

  //console.log(frase.length);
  //console.log(bandera);

  while(bandera <= frase.length){

    if(frase.charAt(bandera) == "e" || frase.charAt(bandera) == "i" || frase.charAt(bandera) == "a" || frase.charAt(bandera) == "o" || frase.charAt(bandera) == "u")
    {
      //console.log("A entrado una letra e")

      if(frase.charAt(bandera) =="e"){
          guardarFrase = guardarFrase + "enter";
      }

      if(frase.charAt(bandera) =="i"){
          guardarFrase = guardarFrase + "imes";
      }

      if(frase.charAt(bandera) =="a"){
          guardarFrase = guardarFrase + "ai";
      }

      if(frase.charAt(bandera) =="o"){
          guardarFrase = guardarFrase + "ober";
      }

      if(frase.charAt(bandera) =="u"){
          guardarFrase = guardarFrase + "ufat";
      }            

    }else{
      guardarFrase = guardarFrase + frase.charAt(bandera);
    }

    //console.log(frase.charAt(bandera));
    //console.log(guardarFrase);

    bandera++;

  }


  //Descomponer = frase.charAt(1);

  document.getElementById("mensaje").value = guardarFrase;

  document.getElementById("encriptador").value = "";
}

function desencriptar() {
  
    var fraseEn = document.getElementById("encriptador").value;

    var encrip = fraseEn.replace(/enter/img, "e");
    var encrip = encrip.replace(/imes/img, "i");
    var encrip = encrip.replace(/ai/img, "a");
    var encrip = encrip.replace(/ober/img, "o"); 
    var encrip = encrip.replace(/ufat/img, "u"); 

    document.getElementById("mensaje").value = encrip;              
}