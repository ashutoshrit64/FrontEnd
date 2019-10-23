import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(data: any, filterQuery?: any): any {
    console.log(data);
    console.log("----------------------------------------------");
    
    return data.filter((allnotes : any) => (allnotes.trash == '0' && allnotes.archieve == '0' && allnotes.pin == '0'));
  }
}
