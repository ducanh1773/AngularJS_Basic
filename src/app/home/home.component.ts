import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.componet';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.Pipe';
import { uppercaseText } from '../shared/pipes/UpperCase.Pipe';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { productItem } from '../shared/types/productItem';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
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
		NgIf,
		HttpClientModule ,

	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	standalone: true,


})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

	constructor(private http:HttpClient) {

	}

	ngOnInit(): void {
		console.log("1")
		this.http.get<any>("https://ninedev-api.vercel.app/blogs")
			.subscribe(data => console.log(data),
				
			)
	}

	ngOnChanges(): void {
		console.log('on change start')
	}






	products: productItem[] = [
		{
			id: 1,
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
			price: 45000
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

	isVisible = true;


	handleDelete = (event: number) => {

		console.log(event);
		const productIndex = this.products.findIndex(item => item.id == event)
		if (productIndex !== -1) {
			const updatedProducts = [...this.products]; // Tạo bản sao mới
			updatedProducts.splice(productIndex, 1);
			this.products = updatedProducts;
		}

		this.products = this.products.filter(item => item.id !== event);
	}
	ngOnDestroy(): void {

	}

	handleChangeVisible() {
		if (this.isVisible == true) {
			this.isVisible = false
		} else {
			this.isVisible = true;
		}
	}





}
