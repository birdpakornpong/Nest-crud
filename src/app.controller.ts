import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Data } from './app.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Data[] {
    return this.appService.getData();
  }

  @Get('/:id')
  getDataById(@Param('id') id: string): Data[] {
    return this.appService.getDataById(id);
  }

  @Post()
  postData(@Body('name') name: string): string {
    return this.appService.postData(name);
  }

  @Patch('/:id')
  patchData(@Param('id') id: string, @Body('name') name: string): Data[] {
    const res = {
      id,
      name,
    };
    return this.appService.updateData(res);
  }

  @Delete('/:id')
  deleteData(@Param('id') id: string) {
    return this.appService.removeData(id);
  }
}
