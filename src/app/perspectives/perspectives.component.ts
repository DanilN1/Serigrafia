import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.css']
})
export class PerspectivesComponent implements OnInit {
		@Input() persps: any;
		@Output() onSelect = new EventEmitter<any>();
		constructor() { }

		ngOnInit() {
		}

		setPersp(persp){
				this.onSelect.emit(persp);
		}
}
