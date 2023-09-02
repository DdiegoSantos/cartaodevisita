sm = document.querySelector("#sobremim")
dadosh1 =document.querySelector("#dadosh1")
dadosh2 =document.querySelector("#dadosh2")
dadosp =document.querySelector("#dadosp")
dadosp2 =document.querySelector("#dadosp2")
btoSM = document.querySelector("#botSM")
body = document.body
fechar = document.querySelector("#fechar")

function aparecer(){
   	sm.style.width= "60%"
    	sm.style.minWidth="280px"
    	sm.style.opacity="1"
    	sm.style.margin= "50px auto"
    	sm.style.transition = "4s"
	sm.style.position="absolute"
	sm.style.right="20%"
	sm.style.left="20%"
	sm.style.top = "20%"
	sm.style.height = "auto"
	body.style.height = "1024px"

   	   
}
function botSM(){
	dadosh1.style.display ="block"
	dadosh2.style.display ="block"
	dadosp.style.display ="block"
	dadosp2.style.display ="block"
	
	botSM.style.height="auto"
	botSM.style.transition="5s"
} 
function fechar(){
       sm.style.opacity="0"
	dadosh1.style.display ="none"
	dadosh2.style.display ="none"
	dadosp.style.display ="none"
	dadosp2.style.display ="none"
	
}
