import { Component } from "@angular/core";
import { Character } from "../model";
import { getCharacters } from "../state";

@Component({
  selector: "isdi-list",
  standalone: true,
  imports: [],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.css",
})
export class ListComponent {
  characters: Characters[] = [];
  constructor(){
    this.onLoad();
  }
}

onload (){
  getCharacters().then((char) => {
    this.characters = char;
  });
}
