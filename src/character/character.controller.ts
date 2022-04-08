import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterDto } from './characterDto';

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
        console.log(character);
        return this.characterService.postCharacter(character);
    }

}
