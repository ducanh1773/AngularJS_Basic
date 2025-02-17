import { style } from "@angular/animations";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name:'uppercaseText',
	standalone:true,
	
})

export class uppercaseText implements PipeTransform
{
	transform(value: string) {
		return value.toUpperCase();
	}
}