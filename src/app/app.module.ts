import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ItemsComponent } from './items/items.component';
import { PerspectivesComponent } from './perspectives/perspectives.component';
import { PalletComponent } from './pallet/pallet.component';
import { CanvasComponent } from './canvas/canvas.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from 'primeng/dragdrop';

const appRoutes: Routes = [
    { path: '', component: BudgetComponent },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	ToolboxComponent,
	ItemsComponent,
	PerspectivesComponent,
	PalletComponent,
	CanvasComponent,
	BudgetComponent,
	BudgetDetailComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule,
	FormsModule,
	DragDropModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
