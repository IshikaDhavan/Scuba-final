AFRAME.registerComponent("treasure",{
    init:function(){
        for(var i=0 ; i<50; i++){
            var id = `chest${i}`
            var posx = (Math.random() * 300 + (-100))
            var posy = (Math.random() * 20 + (-1))
            var posz = (Math.random() * 1000 + (-90))
            var position = {x:posx , y:posy , z:posz}
            this.spawntreasure(id,position)
        }
    },
    spawntreasure:function(id,position){
        var coinel = document.createElement("a-entity")
        coinel.setAttribute("gltf-model","assets/treasure-coin/the-coin.glb")
        coinel.setAttribute("animation-mixer",{})
        coinel.setAttribute("scale",{x:0.3, y:0.3, z:0.3})
        coinel.setAttribute("static-body",{})
        coinel.setAttribute("gameplay",{elementId: `#${id}`})
        coinel.setAttribute("id", id)
        coinel.setAttribute("position", position)
        var islandel = document.querySelector("#island")
        islandel.appendChild(coinel)

    }
})