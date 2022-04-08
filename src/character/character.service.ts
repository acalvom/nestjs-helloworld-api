import { Injectable } from '@nestjs/common';
import { CHARACTERS } from '../mocks/mocks';
import { CharacterDto } from './characterDto';

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

    public async postCharacter(character: CharacterDto) {
        return [...CHARACTERS, character];
    }

    async deleteCharacterById(id: string) {
        return this.characters.filter(item => item.id !== parseInt(id));
    }
}
