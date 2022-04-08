import { HttpStatus, Injectable } from '@nestjs/common';
import { CHARACTERS } from '../mocks/mocks';
import { CharacterDto } from './character.dto';

@Injectable()
export class CharacterService {
    private characters = CHARACTERS;

    public async getCharacters() {
        return this.characters;
    }

    public async getCharacterById(id: string) {
        let index = this.characters.findIndex(item => item.id === parseInt(id));
        return index !== - 1 ? this.characters.filter(item => item.id === parseInt(id)) : HttpStatus.NOT_FOUND;
    }

    public async postCharacter(character: CharacterDto) {
        return [...CHARACTERS, character];
    }

    async deleteCharacterById(id: string) {
        let index = this.characters.findIndex(item => item.id === parseInt(id));
        return index !== - 1 ? this.characters.splice(index, 1) : HttpStatus.NOT_FOUND;
    }
}
