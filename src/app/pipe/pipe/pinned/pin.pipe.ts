import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pin'
})
export class PinPipe implements PipeTransform {

  transform(data: any, filterQuery?: any): any {
    console.log(data);
    console.log("----------------------------------------------");
    
    return data.filter((allnotes : any) => (allnotes.pin == '1' && allnotes.archieve == '0' && allnotes.trash == '0'));
  }

}
