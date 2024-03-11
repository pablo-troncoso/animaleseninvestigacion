class Animal{
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido
    }

    get nombre(){
        return this.#nombre
    }

    get edad(){
        return this.#edad
    }

    get img(){
        return this.#img
    }

    set comentarios(comentario){
        this.#comentarios = comentario
    }

    get comentarios(){
        return this.#comentarios    
    }




    get sonido(){
        return this.#sonido    }

}

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    rugir() { //TEST para el Sonido
        const audioLeon = document.getElementById('audioLeon');
        audioLeon.play();
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    aullar(){ 
        
    }

}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    gruñir(){
        
    }

}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    sisear(){
        
    }

}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    chillar(){
        
    }

}

export {Leon, Lobo, Oso, Serpiente, Aguila}