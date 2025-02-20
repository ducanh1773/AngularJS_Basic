import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterLink, RouterOutlet , Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.Pipe';
import { uppercaseText } from '../shared/pipes/UpperCase.Pipe';
import { Console } from 'console';
import { blockItem, productItem } from '../shared/types/productItem';
import { BlogService } from '../services/BlogService';
@Component({
	selector: 'app-create',
	standalone: true,
	imports: [
		RouterOutlet,
		RouterLink,
		ReactiveFormsModule,
		NgIf


	],
	templateUrl: './create.component.html',
	styleUrl: './create.component.css',



})
export class CreateComponent {


	product = new FormGroup({
		name: new FormControl('', Validators.required),
		price: new FormControl('', Validators.required),
	})
	
	constructor(private blogService : BlogService , private router:Router){
		
	}
	
	get name() {
		return this.product.get('name')
	}

	get price() {
		return this.product.get('price')
	}

	handleAddCart() {
		if (this.name?.hasError('required') || this.price?.hasError('required')) {
			return;
		}else{
			const blockItem:blockItem ={
				id : Math.random(),
				title:String(this.name?.value),
				body:String(this.price?.value),
				author:'mario'
				
			} 
			console.log(this.name?.value);
			console.log(this.price?.value);
			this.blogService.postBlogs(blockItem).subscribe(({data}:any) => {
				if(data.id){
					this.router.navigate(['/']);
				}
			})
		}
	}
	
	

	
	
	

}
