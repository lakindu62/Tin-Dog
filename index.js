import dogsData from "./data.js"
import Dog from "./dog.js"

const mainSection = document.getElementById("main")
const likeBtn= document.getElementById("btn-likeEl")
const dislikeBtn = document.getElementById("btn-dislikeEl")

const noDogs = document.getElementById("lastClickRender")

















likeBtn.addEventListener("click" , ()=>{
    rex.hasBeenLiked = true
    rex.hasBeenSwiped = true

   render()

    setTimeout(()=>{
        if(dogsData.length>0){
            rex = new Dog(dogsData.shift())
            render()
        }else{
            noDogs.innerHTML = "<div class='endText'><span>thats all the dogs in your area for now</span></div>"
        }
        
        

      
    },[1000])
    

})
dislikeBtn.addEventListener("click" , ()=>{
    rex.hasBeenSwiped = true
    
    render()
    setTimeout(()=>{
        if(dogsData.length>0){
            rex = new Dog(dogsData.shift())
            render()
        }else{
            noDogs.innerHTML = "<div class='endText'><span>thats all the dogs in your area for now</span></div>"
        }
        
        

      
    },[1000])

})

function render(){
    mainSection.innerHTML = rex.getDogHtml()    
}

let rex = new Dog(dogsData.shift())
render()





