import { Controller, Get } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService) { }

    @Get()
    async getCharacters() {
        return this.characterService.getCharacters();
    }

}
