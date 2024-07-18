import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLib1'
})
export class GetLib1Pipe implements PipeTransform {

  transform(objects: any[] | null): string {
    if (!objects || !objects.length) {
      return '';
    }
    return objects.map(obj => obj.lib1).join(', ');
  }

}
