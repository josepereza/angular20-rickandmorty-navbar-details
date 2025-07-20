import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-detail',
  imports: [RouterLink],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export class CharacterDetail {
 private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);
  character = signal<Character | undefined>(undefined);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(+id).subscribe(data => {
        this.character.set(data);
      });
    }
  }
}
