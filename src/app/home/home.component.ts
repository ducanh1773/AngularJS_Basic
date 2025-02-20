import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.componet';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.Pipe';
import { uppercaseText } from '../shared/pipes/UpperCase.Pipe';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { productItem } from '../shared/types/productItem';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogService } from '../services/BlogService';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
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
		HttpClientModule,


	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	standalone: true,


})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

	constructor(private blogService: BlogService) {
		this.getBlockApi = new Subscription();
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

	ngOnInit(): void {
		this.getBlockApi = this.blogService
			.getBlogs()
			.pipe(
				map(({ data }) =>
					data.map((item: any) => {
						return {
							...item,
							price: Number(item.body),
							image: "assets/images/giay2.jpg",
							name: item.title,
							id: item.id,

						};
					})
				),
				
			)
			.subscribe((res) => {
				this.products = res;
			});
	}

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


	handleDelete = (id: number) => {

		console.log(id);
		this.blogService.deleteBlogs(id).subscribe(({data}:any) =>{
			if(data == 1){
				this.products = this.products.filter(item => item.id !== id);
			}
		})
	}
	// ngOnDestroy(): void {

	// }

	handleChangeVisible() {
		if (this.isVisible == true) {
			this.isVisible = false
		} else {
			this.isVisible = true;
		}
	}

	getBlockApi: Subscription;


	ngOnDestroy(): void {
		if (this.getBlockApi) {
			this.getBlockApi.unsubscribe();
			console.log('getBlockApi unscribe')
		}
	}
}
