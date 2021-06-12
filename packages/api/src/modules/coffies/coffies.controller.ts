import {Controller, Get} from '@nestjs/common';

@Controller('coffies')
export class CoffiesController {
    @Get()
    getAlCoffies(){
        return " EVO TI KAFA"
    }
}
