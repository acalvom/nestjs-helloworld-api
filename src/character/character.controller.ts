import { Controller, Get, Param } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService) { }

    @Get()
    async getCharacters() {
        return this.characterService.getCharacters();
    }

    @Get(':id')
    async getCharacterById(@Param('id') id: string){
         return this.characterService.getCharacterById(id);
    }

}
