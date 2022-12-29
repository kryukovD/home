import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceKit'
})
export class SliceKitPipe implements PipeTransform {

  transform(text: string, limit:number): unknown {
    text = text.trim();
    if( text.length <= limit) return text;
    text = text.slice(0, limit);
    return text.trim()+"...";
  }

}
