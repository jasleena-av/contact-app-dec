import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchkey:string,propertyName:string): any[] {
    // array after transform
    const result:any =[]
    if(!allContacts || searchkey =='' || propertyName==''){
      return allContacts

    }
    allContacts.forEach((contact:any)=>{
      if(contact[propertyName].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
        result.push(contact)
      }
    })
    

    return result;
  }

}
