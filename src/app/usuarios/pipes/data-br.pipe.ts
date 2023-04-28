import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEn: string): string {
    if(!dataEn){
      return "";
    }
    let data1 = dataEn;

    data1= data1.slice(0,10);
    let data2 = data1.split("-");

    return data2[2] + "/" + data2[1] + "/" + data2[0];
  }


}
