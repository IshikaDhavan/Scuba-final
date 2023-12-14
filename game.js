AFRAME.registerComponent("gameplay",{
    schema:{
        elementId: {type: "string", default: "#fish1"}
    },
    init:function(){
        var duration = 5;
        const timerel= document.querySelector("#timer");
        this.startTime(duration,timerel)
    },
    isCollided:function(elementId){
        const elem = document.querySelector(elementId)
        elem.addEventListener("collide",(e)=>{
            if (elementId.includes("#coin")){
                elem.setAttribute("visible",false)
                this.updateScores()
                this.updateTargets()
            }
            else{
                this.gameOver();
            }
        })
    },
    gameOver: function () {
        const diverel = document.querySelector("#divermodel"); 
        if (diverel) {
            diverel.setAttribute("dynamic-body", { mass: 100 });
        }
        const element = document.querySelector("#gameovertext");
        element.setAttribute("visible", true);
        
    },
    
    startTime:function(duration,timerel){
        setInterval(()=>{
            if(duration >= 0){
                var minutes = parseInt(duration/60)
                seconds = parseInt(duration%60)
                if (minutes<10){
                    minutes = "0" + minutes
                }
                if(seconds < 10){
                    seconds = "0" + seconds
                }
                timerel.setAttribute("text",{value: minutes + ":" + seconds})
                duration -= 1
            }
            else{
                this.gameOver();
            }
        },1000)
    },
    updateTarget:function(){
        const element = document.querySelector("#targets")
        var count = element.getAttribute("text").value
        var currentTarget = parseInt(count)
        currentTarget -= 1
        element.setAttribute("text",{value: currentTarget})
    },
    updateScore:function(){
        const element = document.querySelector("#score")
        var count = element.getAttribute("text").value
        var currentScore = parseInt(count)
        currentScore += 50
        element.setAttribute("text",{value: currentScore})
    },
    update:function(){
        this.isCollided(this.data.elementId)
    }
})