import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.componet";
import {FormsModule} from "@angular/forms";
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.Pipe';
import { uppercaseText } from './shared/pipes/UpperCase.Pipe';
@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderLayoutComponent,FormsModule, CurrencyPipe , uppercaseText],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',


})
export class AppComponent {
	title = 'angular-basic-project';
	tittleObject = {
		name: 'nineDev',
		old: '2024',
	}

	isDisable = false;
	
	contentImage = "nineDev Welcome";

	nameBtn = 'click me !';
	clickMessage = "";
	
	clickMeEvent = () =>{
					this.clickMessage = "hello"
	}
	
	bindingMessage = '';
	
	updateKey(): void {
		
	}
	
}
