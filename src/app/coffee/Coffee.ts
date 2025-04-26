export class Coffee {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: string;

  constructor(paylaod: {
    id: number;
    nombre: string;
    tipo: string;
    region: string;
    sabor: string;
    altura: number;
    imagen: string;
  }) {
    this.id = paylaod.id;
    this.nombre = paylaod.nombre;
    this.tipo = paylaod.tipo;
    this.region = paylaod.region;
    this.sabor = paylaod.sabor;
    this.altura = paylaod.altura;
    this.imagen = paylaod.imagen;
  }
}
