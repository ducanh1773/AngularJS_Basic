import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.componet";
import { FormsModule } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		HeaderLayoutComponent,
		FormsModule,
		NgFor,
		NgClass,
		NgIf,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',


})
export class AppComponent {

}
