import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {
		@Input() item: any;
		Math: any;
		constructor() {
				this.Math = Math;
		}

		ngOnInit() {
		}

		

}
