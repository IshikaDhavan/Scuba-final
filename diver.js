AFRAME.registerComponent("diver-rotation", {
    schema: {
      rotationchange: { type: "number", default: 0 },
      poschange: { type: "number", default: 0 }
    },

      init:function(){
        window.addEventListener("keydown",(e)=> {
            this.data.rotationchange = this.el.getAttribute("rotation")
            this.data.poschange = this.el.getAttribute("position")

            if(e.key == "ArrowRight"){
                if(this.data.rotationchange.x < 10){
                    this.data.rotationchange.x += 0.5
                    this.el.setAttribute("rotation" , this.data.rotationchange)
                }
            }
            if(e.key == "ArrowLeft"){
                if(this.data.rotationchange.x > -10){
                    this.data.rotationchange.x -= 0.5
                    this.el.setAttribute("rotation" , this.data.rotationchange)
                }
            }
            if(e.key == "ArrowUp"){
                if(this.data.rotationchange.z < 20){
                    this.data.rotationchange.z += 0.5
                    this.el.setAttribute("rotation" , this.data.rotationchange)
                }
                if(this.data.poschange.y < 2){
                    this.data.poschange.y += 0.02
                    this.el.setAttribute("position" , this.data.poschange)
                }
            }
            if(e.key == "ArrowDown"){
                if(this.data.rotationchange.z > -10){
                    this.data.rotationchange.z -= 0.5
                    this.el.setAttribute("rotation" , this.data.rotationchange)
                }
                if(this.data.poschange.y > -2){
                    this.data.poschange.y -= 0.01
                    this.el.setAttribute("position" , this.data.poschange)
                }
            }
        })
    }
})
