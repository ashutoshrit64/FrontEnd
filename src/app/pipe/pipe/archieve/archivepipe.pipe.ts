import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'archivepipe'
})
export class ArchivepipePipe implements PipeTransform {

  transform(data: any, ...args: any[]): any {
    
    return data.filter((archiveNotes : any) => (archiveNotes.trash == '0'));
   
  }

}
