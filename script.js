

	document.getElementById("copiar").style.visibility = "hidden";
	var textoencriptadopropiedades= document.querySelector(".textoencriptado");
	var input = document.querySelector("#caja");
	input.focus();

	function encriptar(){
		var msj=[];
		var msjEncrip=[];
		var msj=input.value;
			for(var i=0; i < msj.length; i++){
				if(msj[i]!="a" && msj[i]!="e" && msj[i]!="i" && msj[i]!="o" && msj[i]!="u"){
					msjEncrip[i]=msj[i];
	
				}
				if(msj[i]=="a"){
					msjEncrip[i]="ai";
					
				}
				if(msj[i]=="e"){
					msjEncrip[i]="enter";
					
				}
				if(msj[i]=="i"){
					msjEncrip[i]="imes";
	
				}
				if(msj[i]=="o"){
					msjEncrip[i]="ober";
	
				}
				if(msj[i]=="u"){
					msjEncrip[i]="ufat";
	
				}
			}
			alert("Mensaje encriptado con exito!!!");
			
			/*document.getElementById("muneco").style.visibility="hidden";otra forma de esconder el muneco*/
			textoencriptadopropiedades.style.backgroundImage="none";
			document.getElementById("copiar").style.visibility = "visible";
			document.getElementById("caja2").value=msjEncrip.join("");
			input.value = "";
		}
		
		
	var button1=document.querySelector("#button1");

	function desencriptar(){
		var mensaje2=input.value;
		var mensajeDes="";
		if(mensaje2.includes("ai")){
			mensajeDes=mensaje2.replaceAll("ai","a");
			mensaje2=mensajeDes;
		}
		if(mensaje2.includes("enter")){
			mensajeDes=mensaje2.replaceAll("enter","e");
			mensaje2=mensajeDes;
		}
		if(mensaje2.includes("imes")){
			mensajeDes=mensaje2.replaceAll("imes","i");
			mensaje2=mensajeDes;
		}
		if(mensaje2.includes("ober")){
			mensajeDes=mensaje2.replaceAll("ober","o");
			mensaje2=mensajeDes;
		}
		if(mensaje2.includes("ufat")){
			mensajeDes=mensaje2.replaceAll("ufat","u");
			mensaje2=mensajeDes;
		}
		alert("Mensaje desencriptado con exito!!!");
		document.getElementById("caja2").value=mensajeDes;
		input.value = "";
		}
	function  copiartexto(){
		var textocopiado=document.getElementById("caja2");
		navigator.clipboard.writeText(textocopiado.value);
        alert("texto copiado con exito!!!");
	}
	var button2=document.querySelector("#button2");
	
	
	


