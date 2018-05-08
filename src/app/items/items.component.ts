import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
		@Input() items: Array<any>;
		@Output() onSelect = new EventEmitter<any>();
		constructor() { }

		ngOnInit() {
		}

		selectItem(item){
				this.onSelect.emit(item);
		}

}
