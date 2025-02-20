import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.Pipe';
import { uppercaseText } from '../shared/pipes/UpperCase.Pipe';
import { Console } from 'console';
import { productItem } from '../shared/types/productItem';
import { BlogService } from '../services/BlogService';
@Component({
	selector: 'app-detail',
	imports: [
		RouterOutlet,
		RouterLink,


	],
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.css',
	standalone: true,


})
export class DetailComponent implements OnInit {

	id = 0;


	constructor(private route: ActivatedRoute, private blockService: BlogService) {
		this.id = Number(route.snapshot.paramMap.get('id'));


	}

	productItem: productItem = {
		id: 0,
		image: '',
		name: '',
		price: 0,


	}

	ngOnInit(): void {
		this.blockService.detailBlogs(this.id)
			.subscribe(({data} : any) => {
				this.productItem.id = data.id,
				this.productItem.image = "assets/images/giay5.jpg",
				this.productItem.name = data.title,
				this.productItem.price = data.body
			});

	}


}
