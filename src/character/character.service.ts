import { Injectable } from '@nestjs/common';
import { CHARACTERS } from '../mocks/mocks';

@Injectable()
export class CharacterService {
    private characters = CHARACTERS;

    public async getCharacters() {
        console.log(this.characters);
        return this.characters;
    }

    public async getCharacterById(id: string) {
        return this.characters.filter(item => item.id === parseInt(id));
    }
}
