sm = document.querySelector("#sobremim")
dadosh1 =document.querySelector("#dadosh1")
dadosh2 =document.querySelector("#dadosh2")
dadosp =document.querySelector("#dadosp")
dadosp2 =document.querySelector("#dadosp2")
btoSM = document.querySelector("#botSM")
body = document.body
cabecalho = querySelector("#cabecalho")


function aparecer(){
   	sm.style.width= "60%"
    sm.style.minWidth="280px"
	sm.style.display="block"
   	sm.style.margin= "0 auto 10px auto"
   	sm.style.transition = "1.2s"
	
	
	cabecalho.style.display="none"
	
	sm.style.height = "auto"
	body.style.height = "auto"

	dadosh1.style.display ="block"
	dadosh2.style.display ="block"
	dadosp.style.display ="block"
	dadosp2.style.display ="block"
	botSM.style.display="none"  
}

function fechar(){
    dadosh1.style.display ="none"
	dadosh2.style.display ="none"
	dadosp.style.display ="none"
	dadosp2.style.display ="none"
	sm.style.display="none"
	cabecalho.style.display="block"
	botSM.style.display="block"
}
function manos(){
	alert("Loja Manos Game. Esse projeto foi criado para substituir o estágio supervisionado da faculdade, ele apresenta uma onepage com as principais informações de uma loja de Games e Consertos de Console. O trabalho foi construido com o desenvolvimento responsivo em html, estilizado com Css, interatividade usando javascript e menu utilizando as ferramentas bootstrap.")
	/*
	prod1 = document.getElementById("pro1")
	prod2 = document.getElementById("pro2")
	prod3 = document.getElementById("pro3")
	
	prod2.style.display="none";
	prod3.style.display="none";

	var janela = document.createElement("div")
	
	var conteudo = document.createTextNode("Loja Manos Game. Esse projeto foi criado para substituir o estágio supervisionado da faculdade, ele apresenta uma onepage com as principais informações de uma loja de Games e Consertos de Console. O trabalho foi construido com o desenvolvimento responsivo em html, estilizado com Css, interatividade usando javascript e menu utilizando as ferramentas bootstrap.")
	
	janela.appendChild(conteudo);
	var janel = document.querySelector("#janel");
	
	janel.innerHTML=janela.innerText;
	janel.style.textAlign= "left"
	janel.style.border="1px #333 solid"
	
*/
}
function corte(){
	alert("CALCULADORA DE LIGAS - Esse projeto foi contruido para atender uma necessidade no meu local de trabalho atual, onde é preciso fazer o controle de produção entre produdos na Fabrica de Café Solúvel. Foi desenvolvido em HTML, CSS e Javascript.")
	/*
	prod1 = document.getElementById("pro1")
	prod2 = document.getElementById("pro2")
	prod3 = document.getElementById("pro3")
	
	prod1.style.display="none";
	prod3.style.display="none";

	var janel = document.createElement("div")
	
	var conteudo = document.createTextNode("Loja Manos Game. Esse projeto foi criado para substituir o estágio supervisionado da faculdade, ele apresenta uma onepage com as principais informações de uma loja de Games e Consertos de Console. O trabalho foi construido com o desenvolvimento responsivo em html, estilizado com Css, interatividade usando javascript e menu utilizando as ferramentas bootstrap.")
	
	var janel = document.querySelector("#janel");
	janel.appendChild(conteudo);
	
	
	janel.style.border="1px #333 solid"
	janel.style.width="1000px"
	janel.innerHTML
	
	
*/
}
function pegarTexto(){
    let texto = [];
    
    arr = document.querySelector("#text-box").value
    texto.push(arr);
    
    destino.innerHTML  += texto;

}
