import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../pipes/CurrencyPipe.Pipe';
import { uppercaseText } from '../pipes/UpperCase.Pipe';
import { productItem } from '../types/productItem';
@Component({
	selector: 'app-product-item',
	imports: [
		RouterOutlet,
		RouterLink,
		NgClass,
		NgFor,
		NgIf,
		FormsModule,
		CurrencyPipe,
		uppercaseText,
		
		
	
	], 
	templateUrl: './productItem.component.html',
	styleUrl: './productItem.component.css', 
	standalone : true,


})

export class ProductItemComponent implements OnChanges , OnDestroy{
	@Input() products:productItem[] = []
	@Output() dataEvent = new EventEmitter<number>();
	handleDelete  = (id: number)=>{
		this.dataEvent.emit(id);
		
	}
	
	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes['products'].currentValue)
		console.log(changes['products'].previousValue)
	}
	
	
	get totalPrice(): string{
		const sum = this.products.reduce((total , item) => {
			return total + item.price;
			
		} , 0)
		 
		return 'price total : ' + sum;
	}
	
	ngOnDestroy(): void {
		console.log("Componet is remove")
	}
	
	
}