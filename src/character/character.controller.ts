import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterDto } from './character.dto';

@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService) { }

    @Get()
    async getCharacters() {
        return this.characterService.getCharacters();
    }

    @Get(':id')
    async getCharacterById(@Param('id') id: string) {
        return this.characterService.getCharacterById(id);
    }

    @Post('/add')
    async postCharacter(@Body() character: CharacterDto) {
        return this.characterService.postCharacter(character);
    }

    @Delete(':id')
    async deleteCharacterById(@Param('id') id: string) {
        return this.characterService.deleteCharacterById(id);
    }

}
