import { Injectable } from '@angular/core';

@Injectable()
export class DataSharingService {
  private data: any = undefined;

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
}
