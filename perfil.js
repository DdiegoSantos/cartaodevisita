sm = document.querySelector("#sobremim")
dadosh1 =document.querySelector("#dadosh1")
dadosh2 =document.querySelector("#dadosh2")
dadosp =document.querySelector("#dadosp")
dadosp2 =document.querySelector("#dadosp2")
btoSM = document.querySelector("#botSM")

function aparecer(){
   	sm.style.width= "60%"
    	sm.style.minWidth="280px"
    	sm.style.opacity="1"
    	sm.style.margin= "50px auto"
    	sm.style.transition = "4s"
	sm.style.height = "auto"

   	   
}
function botSM(){
	dadosh1.style.display ="block"
	dadosh2.style.display ="block"
	dadosp.style.display ="block"
	dadosp2.style.display ="block"
	
	botSM.style.height="auto"
	botSM.style.transition="5s"
}
