
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, Input } from '@angular/core';
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


})

export class ProductItemComponent{
	@Input() products:productItem[] = []
	
}