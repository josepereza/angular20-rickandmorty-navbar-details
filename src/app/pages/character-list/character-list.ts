import { Component, inject, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-list',
  imports: [RouterLink],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {
  private characterService = inject(CharacterService);
  characters = signal<Character[]>([]);

  ngOnInit() {
    this.characterService.getCharacters().subscribe(data => {
      this.characters.set(data.results);
    });
  }
}
