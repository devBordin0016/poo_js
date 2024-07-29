function Videogames(marca, modelo, armazenamento){
    this.marca = marca;
    this.modelo = modelo;
    this.armazenamento = armazenamento;
}

Videogames.prototype.displayInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Armazenamento: ${this.armazenamento}`);
};

function Computadores(marca, modelo, armazenamento, placadevideo) {
    Videogames.call(this, marca, modelo, armazenamento);
    this.placadevideo = placadevideo;
}

Computadores.prototype = Object.create(Videogames.prototype);
Computadores.prototype.constructor = Computadores;

Computadores.prototype.displayInfo = function() {
    Videogames.prototype.displayInfo.call(this);
    console.log(`Placa de Video: ${this.placadevideo}`);
};

function Celulares(marca, modelo, armazenamento, polegadas) {
    Computadores.call(this, marca, modelo, armazenamento);
    this.polegadas = polegadas;
}

Celulares.prototype = Object.create(Videogames.prototype);
Celulares.prototype.constructor = Celulares;

Celulares.prototype.displayInfo = function() {
    Videogames.prototype.displayInfo.call(this);
    console.log(`Polegadas: ${this.polegadas}`);
}

const videogame = new Computadores('Xbox', 'Series X', '1TB', 'Zen 2\n');
const computador = new Computadores('Lenovo', 'ThinkPad', '256GB', 'Intel Graphics\n');
const celular = new Celulares('Samsung', 'S23', '256GB', 7);

videogame.displayInfo();
computador.displayInfo();
celular.displayInfo();