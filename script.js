var intervalId


var questionList=[{
    question:"Where did Elle Woods get her Law Degree",
    choices: ["Princeton","Yale","Cornell","Harvard"],
    answer: 3
},{
    question: "What was the name of Elle's dog",
    choices:["Max","Brewser","Zoe","Shaggy"],
    answer:1
},{
    question: "What is Elle Woods favorite color",
    choices: ["Pink", "Blue", "Green", "Orange"],
    answer: 0
},{
    question: "What type of trial did Elle defend",
    choices: ["Civil","Juvenile","Criminal","Trial"],
    answeer: 3
},{
    question:"Elle went to Harvard to get back with her ex-boyfriend",
    choices: ["True","False"],
    answer: 0
}

] 
var timeRemaining=questionList.length*15
var index=0
function showQuestion(){
    
    document.querySelector(".start-div").classList.add("hide")
    document.getElementById("answeredChoices").textContent=""
    document.querySelector(".question-div").classList.remove("hide")
    console.log(questionList[index].question)
    document.getElementById("question").textContent=questionList[index].question
    for(var i=0;i<questionList[index].choices.length;i++){
        var li=document.createElement("li")
        li.innerText=questionList[index].choices[i]
        li.classList.add("choicesbtn") 
        document.getElementById("answeredChoices").appendChild(li)
    }
  var choicesArray=document.querySelectorAll(".choicesbtn")
  for(var i=0;i<choicesArray.length;i++){
      choicesArray[i].addEventListener("click",function(){
          var userPick=this.innerText
            console.log(userPick,questionList[index].answer)

            var possibleChoices=questionList[index].choices
          if(userPick!=possibleChoices[questionList[index].answer]){
              timeRemaining=timeRemaining-10
          }

          index++
          if(index<questionList.length){
            showQuestion()   
          }
          else{
               document.getElementById("question").textContent=""
                 clearInterval(intervalId)
                 document.getElementById("answeredChoices").textContent=""
          }
      })
  }
}
document.getElementById("startbtn").addEventListener("click",function(){
   showQuestion()
    intervalId=setInterval(countDown,1000)
})

function countDown(){

    --timeRemaining
    if(timeRemaining===0){
        clearInterval(intervalId)
    }
    document.getElementById("time").textContent=timeRemaining

}




