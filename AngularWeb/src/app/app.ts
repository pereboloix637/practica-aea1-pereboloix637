import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Glob } from './interfaces/Glob';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularWeb');

// Array de Globs, que son los personajes del juego Glob Defenders, cada uno tiene una tematica unica, ya que la meta de estos es enseñar la diversidad de esta especie gelatinosa.
// NOTA: Algunos Globs estan hechos de materiales peligrosos y no se recomienda seguir sus pasos, ya que pueden ser peligrosos para la salud. Por ejemplo, el Glob de Jabon, que es azul y esta hecho de jabon, puede ser peligroso si se ingiere o se inhala. Por eso, se recomienda no seguir sus pasos.

FVerde: Glob = {
  id: 1,
  nombre: 'Glob Verde',
  descripciom: 'Personaje PRINCIPAL del juego Glob Defenders, es el origen de todos los Globs.',
  habitat: 'Gelatin Lake',
  categoria: 'Principal',
  obtenible: true,
  imagenUrl: 'https://drive.google.com/drive/u/0/folders/1KhZMTaIjPX2Jmq4ZKbM1GAOGqLnNS74q',
}

FRoja: Glob = {
  id: 2,
  nombre: 'Glob Rojo',
  descripciom: 'Subversion del Glob Verde, es el segundo al mando del nacimiento de los Globs, este es un Melee, por lo que ataca sus cercanias.',
  habitat: 'Gelatin Lake',
  categoria: 'Melee',
  obtenible: true
}

FAzul: Glob = {
  id: 3,
  nombre: 'Glob de Jabon',
  descripciom: 'Glob de color azul que esta hecho de jabon, gracias a esto descubrimos que los Globs no solo estan hechos de gelatina, sino que tambien pueden estar hechos de otros materiales.',
  habitat: 'Gelatin Lake',
  categoria: 'Stunner',
  obtenible: true
}

FAmarilla: Glob = {
  id: 4,
  nombre: 'Glob Amarillo',
  descripciom: 'Glob de color amarillo que nacio junto al Glob original ( y el rojo), que se encarga de dar Globetines, la currency de las partidas y con el tus globs evolucionaran mas rapido, pudiendo sobrevivir a oleadas mas rapidamente.',
  habitat: 'Gelatin Lake',
  categoria: 'Support',
  obtenible: false
}

FNegra: Glob = {
  id: 5,
  nombre: 'Comet Glob',
  descripciom: 'Glob de color azul noche, con estrellas a dentro de el, se encarga de hacer el mayor daño en el juego, sus 4 evoluciones lo vuelven negro y oscuro, como un abujero negro. Todo y pese a eso, los Globs siempre son buenos. ¿Sera que no saben que es el mal?',
  habitat: 'Gelatin Lake',
  categoria: 'Mayor DPS',
  obtenible: false
}

FNaranja: Glob = {
  id: 6,
  nombre: 'Worker Glob',
  descripciom: 'Glob de color naranja que trabaja en la construcción, los globs acostumbran a ser estupidos, pero pueden ejercer diferentes trabajos para beneficio propio.',
  habitat: 'Urbanistic Road',
  categoria: 'Builder',
  obtenible: false,
  creditos: 'Creado por: Credible y supervisado por: KirByte_Bi',
}

IEx: Glob = {
  id: 7,
  nombre: 'Bomb Glob',
  descripciom: 'Glob de color granate que explota al detectar un enemigo en su rango, a mas evolucionado mas daño y area tiene, llegando a ser una bomba nuclear. Gracias a este Glob sabemos que dicha especie no le teme a su propia muerte y la tratan como una prueba, a la final todos los globs carecen de mentalidad y se reproducen en Gelatin Lake, por lo que nunca van a morir definitivamente',
  habitat: 'Urbanistic Road',
  categoria: 'Instantanea',
  obtenible: false,
  creditos: 'Creado por: JustAUser y supervisado por: KirByte_Bi',
}


Lista: Glob[] = [this.FVerde, this.FRoja, this.FAzul, this.FAmarilla, this.FNegra, this.FNaranja, this.IEx];

}
