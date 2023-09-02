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
