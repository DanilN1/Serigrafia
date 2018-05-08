import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pallet',
  templateUrl: './pallet.component.html',
  styleUrls: ['./pallet.component.css']
})
export class PalletComponent implements OnInit {
		@Output() onColorChange = new EventEmitter<any>();
		constructor() { }
		
		ngOnInit() {
		}

		setColor(event){
				this.onColorChange.emit(event.target.style.backgroundColor);
		}
}
