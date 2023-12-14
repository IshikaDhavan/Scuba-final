AFRAME.registerComponent("fish",{
    init:function(){
        for( var i=0; i<50 ; i++){
            var id = `fish${i}`
            var posx = (Math.random() * 300 + (-100))
            var posy = (Math.random() * 20 + (-1))
            var posz = (Math.random() * 1000 + (-90))
            var position = {x: posx , y: posy , z: posz}
            this.spawnfish(id,position)
        }
     },
    spawnfish:function(id,position){
        var fishel = document.createElement("a-entity")
        fishel.setAttribute("gltf-model","assets/koi-fish/scene.gltf")
        fishel.setAttribute("animation-mixer",{})
        fishel.setAttribute("scale",{x:0.03 , y:0.03 , z:0.03})
        fishel.setAttribute("rotation",{x: 0, y:90, z:0})
        fishel.setAttribute("static-body",{})
        fishel.setAttribute("gameplay",{elementId: `#${id}`})
        fishel.setAttribute("id",id)
        fishel.setAttribute("position", position)
        var islandel = document.querySelector("#island")
        islandel.appendChild(fishel)
    }
})