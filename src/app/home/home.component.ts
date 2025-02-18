import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.componet';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.Pipe';
import { uppercaseText } from '../shared/pipes/UpperCase.Pipe';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { productItem } from '../shared/types/productItem';
@Component({
	selector: 'app-home',
	imports: [
		RouterOutlet,
		HeaderLayoutComponent,
		CurrencyPipe,
		uppercaseText,
		NgIf,
		NgFor,
		FormsModule,
		RouterLink,
		ProductItemComponent,
		
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	standalone: true,


})
export class HomeComponent {
	products: productItem[] = [
		{
			id: 6,
			name: "sambar og",
			image: "assets/images/giay1.jpg",
			price: 400000
		},
		{
			id: 5,
			name: "nike air max",
			image: "assets/images/giay2.jpg",
			price: 350000
		},
		{
			id: 4,
			name: "adidas superstar",
			image: "assets/images/giay3.jpg",
			price: 450000
		},
		{
			id: 3,
			name: "puma rs-x",
			image: "assets/images/giay4.jpg",
			price: 500000
		},
		{
			id: 2,
			name: "vans old skool",
			image: "assets/images/giay5.jpg",
			price: 300000
		}
	]

	title = 'angular-basic-project';
	tittleObject = {
		name: 'nineDev',
		old: '2024',
	}

	isDisable = false;

	contentImage = "nineDev Welcome";

	nameBtn = 'click me !';
	clickMessage = "";

	clickMeEvent = () => {
		this.clickMessage = "hello"
	}

	bindingMessage = '';

	updateKey(): void {

	}

	isVisible = false;




}
