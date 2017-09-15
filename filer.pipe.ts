import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
    name: "myFilter"
})

export class FilterPipe{
    transform(value:{name:string,amount:number}[],args:string[]):any{
        if(value.length === 0){
            return value;
        }

        if(args.length == 0)
        {
            return value;
        }

        //let resultarray=[];
        for(let item of value){
            if(item.name.match("^.*"+args[0]+".*$")){
          //      resultarray.push(item);
            } 
        }
       // return resultarray;
      

    }

}