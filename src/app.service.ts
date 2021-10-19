import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Data } from './app.entity';

@Injectable()
export class AppService {
  dataArray: Data[] = [];

  getData(): Data[] {
    return this.dataArray;
  }

  getDataById(id: string): Data[] {
    const found = this.dataArray.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`ไม่พบ id ที่ต้องการ`);
    }
    const dataArrayById = [found];
    return dataArrayById;
  }

  postData(name: string): string {
    const data = new Data();
    data.id = uuidv4();
    data.name = name;
    this.dataArray.push(data);

    return `yes ${name} id: ${data.id}`;
  }

  updateData(res): Data[] {
    const found = this.dataArray.find((item) => item.id === res.id);
    if (!found) {
      throw new NotFoundException(`ไม่พบ id ที่ต้องการ`);
    }
    found.name = res.name;
    const updateArrayById = [found];
    return updateArrayById;
  }

  removeData(id: string) {
    const found = this.dataArray.findIndex((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`ไม่พบ id ที่ต้องการลบ`);
    }
    this.dataArray.splice(found, 1);

    return this.dataArray;
  }
}
