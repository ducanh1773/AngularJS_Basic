import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.Pipe';
import { uppercaseText } from '../shared/pipes/UpperCase.Pipe';
import { Console } from 'console';
@Component({
	selector: 'app-detail',
	imports: [
		RouterOutlet,
		RouterLink,
		
		
	],
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.css',
	standalone:true,


})
export class DetailComponent {
	
	id = '';
	
	
	constructor(private route : ActivatedRoute){
		this.id = String(route.snapshot.paramMap.get('id'));
		
	}
	
	

}
