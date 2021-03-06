import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
		item: any;
		persp: any;
		Math: any;
		items: Array<any> = [
				{
						png: "assets/images/PlayeraFrente.png",
						color: "#373435",
						desc: "Playera",
						precios: [120,100,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80],
						quantity: 1,
						persps: [
								{
										path: "M27 6c1,0 1,0 2,0 6,1 13,1 19,0 1,0 2,0 3,0 4,2 9,3 12,6 1,1 2,2 3,3 4,6 5,13 6,19 -3,4 -7,5 -12,6 -1,12 -1,25 0,37 0,0 0,1 0,1 -4,3 -9,5 -14,6 -6,1 -12,1 -17,-1 -4,-1 -9,-2 -12,-5 1,-13 1,-26 -1,-38 -4,-1 -8,-2 -11,-5 -1,-1 0,-1 0,-2 1,-7 3,-14 7,-20 1,-1 2,-1 3,-2 4,-2 8,-4 12,-5zm22 1c-2,5 -6,9 -10,12 -5,-3 -8,-7 -11,-12 -1,0 -1,0 -2,0 3,6 8,11 12,14 5,-3 10,-8 13,-14 -1,0 -1,0 -2,0zm-21 0c1,0 1,1 2,2 6,1 11,1 17,0 1,-1 1,-2 2,-2 -7,1 -14,1 -21,0zm-14 6c3,20 6,39 4,59 0,1 0,2 0,2 12,8 29,8 41,0 -2,-20 0,-41 4,-61 -3,-3 -8,-4 -12,-6 -3,6 -7,11 -12,14 0,1 -1,1 -1,1 -5,-4 -9,-8 -12,-14 0,0 0,-1 -1,0 -4,1 -8,3 -11,5zm16 -4c2,4 5,7 8,9 4,-2 7,-5 9,-9 -5,1 -12,1 -17,0zm-23 20c0,1 -1,2 -1,3 3,2 7,4 11,4 -1,-7 -2,-15 -4,-22 -3,4 -5,10 -6,15zm57 -15c-2,7 -3,15 -4,22 4,0 8,-2 11,-4 -1,-7 -3,-13 -7,-18zm-58 18c0,1 0,1 0,2 3,3 7,4 11,4 0,0 0,-1 0,-1 -4,-1 -8,-2 -11,-5zm54 5c0,0 0,1 0,1 4,0 8,-1 11,-4 0,-1 0,-1 0,-2 -3,3 -7,4 -11,5zm-42 40c6,5 13,6 20,6 8,0 15,-1 21,-6 0,-1 0,-1 0,-2 -10,6 -22,7 -33,3 -3,0 -5,-2 -8,-3 0,1 0,1 0,2z",
										png: "assets/images/PlayeraFrente.png"
								},
								{
										path: "M24 5c0,0 1,0 2,0 6,1 13,1 20,0 0,0 1,0 1,0 5,2 9,3 13,6 2,1 3,3 4,4 3,6 5,12 6,19 -4,3 -8,4 -12,5 -2,13 -2,25 0,38 -6,4 -12,6 -19,7 -9,0 -18,-1 -25,-7 1,-13 1,-25 0,-38 -5,-1 -9,-2 -12,-5l0 0c1,-7 2,-14 6,-20 1,-1 2,-2 3,-3 4,-3 8,-4 13,-6zm2 1c-1,0 -2,0 -2,1 3,1 7,1 11,2 4,0 9,-1 13,-2 -1,-1 -1,-1 -2,-1 -7,1 -14,1 -20,0zm-15 6c4,20 6,41 4,61 3,2 6,4 9,5 11,3 23,2 32,-4 -1,-21 1,-41 5,-62 -4,-2 -8,-4 -12,-5 0,0 -1,0 -1,0 -3,1 -6,2 -9,2 -5,0 -11,0 -16,-2 -4,1 -9,3 -12,5zm-2 3c-3,5 -5,10 -6,16 3,3 7,4 11,5 -1,-8 -2,-16 -3,-23 -1,0 -2,1 -2,2zm52 -2c-1,7 -3,15 -4,23 4,-1 8,-2 11,-5 0,-1 0,-3 -1,-5 -1,-5 -3,-9 -6,-13zm-58 19c0,0 0,1 0,1 3,3 7,4 11,5 0,-1 0,-1 0,-2 -4,-1 -8,-2 -11,-4zm54 4c0,1 0,1 0,2 4,-1 9,-2 12,-5 -1,0 -1,-1 -1,-1 -3,2 -7,3 -11,4zm-42 38c0,1 -1,3 1,3 7,5 17,6 25,5 6,0 11,-2 15,-5 1,-1 0,-2 0,-3 -4,3 -9,5 -14,5 -9,2 -19,0 -27,-5z",
										png: "assets/images/PlayeraAtras.png"
								},
								{
										path: "M18 12c3,-4 8,-8 14,-9 1,0 2,1 2,1 0,1 0,2 0,2 4,3 6,6 8,10 1,5 2,11 1,16 0,6 0,11 0,16 -1,10 -1,21 1,31 -6,2 -11,3 -17,3 -6,0 -11,-1 -17,-3 1,-14 1,-28 0,-42 -2,-9 2,-18 8,-25zm2 0c3,-3 8,-6 13,-6 0,-1 0,-2 -1,-2 -5,1 -10,4 -12,8zm10 -5c-1,2 -1,3 -1,5 2,0 4,1 5,3 2,3 2,6 2,9 0,4 -2,9 -4,13 0,1 0,1 -1,1 -2,1 -4,1 -6,1 0,13 1,26 1,39 6,0 11,-1 16,-2 -1,-10 -1,-20 0,-29 0,-6 0,-11 0,-17 0,-4 0,-9 -1,-13 -2,-4 -4,-8 -8,-10 -1,-1 -2,0 -3,0zm-14 10c-4,5 -7,12 -5,19 1,13 1,27 0,40 5,1 10,2 15,2 0,-13 -1,-26 -1,-39 -2,-1 -4,-1 -6,-2 -1,-1 -2,-1 -2,-2 0,-5 0,-10 1,-15 2,-4 6,-8 10,-8 1,-1 1,-3 2,-5 -6,1 -11,5 -14,10zm3 3c-2,4 -2,8 -2,12 1,0 2,-1 3,-1 3,0 5,0 8,1 2,0 4,1 5,3 1,-4 3,-7 3,-11 0,-3 -1,-7 -3,-9 -1,-2 -3,-2 -5,-2 -4,0 -8,3 -9,7zm-1 12c-1,1 0,2 -1,2 3,-1 6,-1 8,0 3,0 5,1 7,3 0,-1 1,-1 1,-2 -1,-1 -2,-1 -2,-2 -3,-1 -6,-2 -9,-2 -1,0 -3,0 -4,1zm-1 3c1,1 2,2 3,2 3,1 6,1 9,1 1,0 2,0 3,0 0,-1 -1,-2 -2,-2 -3,-2 -6,-2 -9,-2 -1,0 -3,0 -4,1zm-6 41c0,1 0,2 0,3 6,1 11,2 17,2 5,0 10,-1 15,-3 -1,-1 -1,-1 -1,-2 -5,2 -11,2 -17,2 -4,0 -9,-1 -14,-2z",
										png: "assets/images/PlayeraLado.png"
								}
						]
				},
				{
						png: "assets/images/dvd.png",
						precios: [50,45,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35],
						quantity: 1,
						color: "#373435",
						desc: "DVD",
						persps: [
								{
										path: "M45 6l4 0c2,1 4,1 6,1 11,2 21,9 27,19 6,11 7,24 2,35 -4,10 -12,18 -22,22 -7,3 -15,4 -22,2 -11,-2 -21,-9 -27,-19 -3,-5 -5,-12 -5,-18l0 -4c0,-6 2,-13 5,-18 6,-10 16,-17 27,-19 2,0 3,0 5,-1zm-2 2c-3,1 -6,2 -9,3 -9,3 -17,10 -21,19 -3,6 -4,12 -4,19 1,6 3,11 5,16 4,7 11,13 18,16 11,5 24,4 35,-2 9,-6 16,-15 18,-26 1,-8 0,-16 -3,-23 -4,-8 -11,-15 -19,-19 -6,-2 -13,-3 -20,-3zm3 26c3,0 7,1 10,3 3,3 4,8 3,12 0,3 -2,5 -4,7 -3,2 -7,3 -10,2 -5,-1 -8,-4 -9,-9 -1,-3 -1,-6 1,-8 1,-4 5,-6 9,-7zm0 2c-2,0 -4,1 -6,3 -2,2 -3,6 -3,9 1,3 3,6 5,7 4,2 10,2 13,-2 3,-4 3,-10 0,-14 -2,-2 -6,-4 -9,-3zm0 1c4,-1 9,3 10,7 1,4 -1,9 -5,11 -4,1 -8,0 -10,-2 -3,-3 -3,-7 -2,-10 1,-3 4,-5 7,-6zm0 2c-2,0 -4,2 -5,3 -1,2 -1,4 -1,6 1,2 2,4 5,5 2,1 5,1 7,-1 1,-1 2,-3 3,-5 0,-2 -1,-4 -2,-5 -1,-2 -4,-4 -7,-3zm-5 6c0,-3 3,-6 7,-6 1,1 3,1 4,2 0,1 1,1 1,2 2,2 1,5 0,7 -1,1 -2,2 -3,2 -3,1 -6,1 -8,-1 -1,-2 -2,-4 -1,-6zm5 -4c-1,0 -2,1 -3,2 -2,2 -2,5 0,7 2,2 6,2 8,0 3,-2 3,-6 1,-8 -2,-1 -4,-2 -6,-1z",
										png: "assets/images/dvd.png"
								}
						]
				},
				{
						png: "assets/images/Reconocimiento.png",
						color: "#373435",
						precios: [200,180,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140],
						quantity: 1,
						desc: "Reconocimiento",
						persps: [
								{
										path: "M7 7l137 0 0 79 -137 0 0 -79zm1 1c0,25 0,51 0,76 45,0 90,0 135,0 0,-25 0,-51 0,-76 -45,0 -90,0 -135,0zm1 1c44,0 89,0 134,0 0,25 0,50 0,75 -45,0 -90,0 -134,0 0,-25 0,-50 0,-75zm1 1c0,24 0,48 0,72 44,0 87,0 131,0 0,-24 0,-48 0,-72 -44,0 -87,0 -131,0zm3 3c42,0 83,0 125,0 0,22 0,44 0,67 -42,0 -83,0 -125,0 0,-23 0,-45 0,-67zm3 3c0,20 0,41 0,61 40,0 79,0 119,0 0,-20 0,-41 0,-61 -40,0 -79,0 -119,0zm1 0c39,0 78,0 117,0 0,20 0,40 0,61 -39,0 -78,0 -117,0 0,-21 0,-41 0,-61z",
										png: "assets/images/Reconocimiento.png"
								}
						]
				},
				{
						png: "assets/images/Taza.png",
						color: "#373435",
						desc: "Taza",
						precios: [100,90,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70],
						quantity: 1,
						persps: [
								{
										path: "M30 22c9,-2 17,-3 25,-3 8,0 16,1 24,2 3,1 5,2 8,3 2,1 3,2 4,3 1,1 2,2 2,3 0,3 0,7 0,10 3,-1 8,-1 11,1 1,1 2,2 3,3 2,2 3,4 5,7 2,6 3,13 3,20 0,4 0,8 -1,13 -1,3 -2,6 -5,9 -1,3 -4,4 -6,5 -4,1 -7,1 -10,0 0,4 0,8 0,12 0,1 -1,2 -1,2 -1,2 -3,2 -4,3 -2,1 -5,2 -7,3 -8,2 -17,2 -25,2 -9,0 -17,0 -25,-2 -3,-1 -7,-2 -9,-4 -2,-1 -4,-2 -4,-4 0,-27 0,-54 0,-80 1,-2 2,-4 4,-5 3,-1 5,-2 8,-3zm21 -2c-7,1 -14,1 -21,3 -3,1 -5,2 -7,3 -1,1 -3,1 -3,2 -1,1 -1,3 0,4 2,1 4,2 5,3 5,2 10,3 15,4 6,0 11,1 17,1 1,-1 2,0 4,-1 1,0 3,1 4,0 1,0 2,0 4,0 1,0 2,0 3,-1 1,0 2,0 3,0 5,-1 9,-2 13,-4 2,-1 3,-2 4,-3 0,-1 0,-2 -1,-3 -1,-1 -2,-2 -3,-3 -3,-1 -7,-2 -10,-3 -9,-2 -18,-2 -27,-2zm-32 13c1,4 0,8 0,13 0,21 0,42 0,64 0,1 2,2 3,3 3,2 7,3 11,4 9,2 18,3 27,2 8,0 15,-1 22,-3 2,0 4,-1 6,-2 1,-1 2,-1 3,-2 0,-1 1,-1 1,-2 0,-26 0,-52 0,-78 -2,2 -4,3 -5,4 -5,2 -9,3 -14,3 -1,0 -2,1 -3,1 -1,0 -1,0 -2,0 -1,0 -2,0 -3,0 -1,0 -2,0 -3,0 -1,0 -2,0 -3,0 -9,1 -18,0 -27,-2 -3,-1 -6,-1 -9,-3 -1,0 -2,-1 -4,-2zm74 9c0,2 0,4 0,7 1,-2 2,-3 4,-3 2,0 3,1 4,2 3,2 4,5 5,7 2,6 3,12 2,17 0,4 0,7 -1,11 -1,2 -2,4 -3,6 -1,2 -3,3 -5,3 -2,0 -5,0 -6,-1 0,2 0,4 0,6 2,1 4,1 7,1 2,0 4,-1 5,-2 0,0 0,0 1,0 0,0 0,0 0,-1 1,0 1,-1 2,-2 2,-2 4,-6 5,-9 1,-6 1,-12 1,-18 0,-4 -1,-9 -3,-13 -1,-3 -3,-6 -5,-9 -1,-1 -3,-2 -5,-3 -2,-1 -6,-1 -8,1zm3 5c-1,1 -2,2 -3,3 0,0 0,0 0,0 0,13 0,26 0,39 0,1 0,1 0,1 1,1 3,1 5,1 1,0 3,0 4,-1 1,-1 2,-3 3,-4 2,-5 2,-10 2,-15 1,-5 0,-11 -2,-16 -1,-2 -2,-4 -4,-6 -1,-1 -3,-2 -5,-2z",
										png: "assets/images/Taza.png"
								}
						]						
				}
		];
		constructor() {
				this.Math = Math;
				this.item = this.items[0];
				this.persp = this.items[0].persps[0];
		}
		ngOnInit() {
		}
		setItem(item){
				this.item = item;
				this.persp = item.persps[0];
		}
		setPersp(persp){
				this.persp = persp;
		}
		setColor(color){
				if(this.persp)
						this.persp.color = color;
		}
}
