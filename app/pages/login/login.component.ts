import { Component, OnInit } from '@angular/core';
//importar funcion de diseño de page de nativescript
import { Page } from "ui/page";
//importar los gestures 
import { TouchGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
//importar el componente de diseño del Button
import { Button } from "ui/button";

@Component({
	selector: 'login',
	templateUrl: './pages/login/login.component.html',
	styleUrls: ['./pages/login/login.component.css']
})

export class LoginComponent implements OnInit {
	public coordX: number = 0;
	public coordY: number = 0;
	
	constructor(
		private _page: Page
	) {
		this._page.actionBarHidden = true;
	}

	ngOnInit() { }

	//Creamos una funcion touch asignando el evento al boton para escuchar el gesto que se hace desde la pantalla.
	
	onTouch(args: TouchGestureEventData) {

        this.coordX = args.getX();
        this.coordY = args.getY();

        let seleccion =args.action;
         let grid = <Button>args.object;
         
        if(seleccion == "up"){
           grid.borderColor="#e8bd4b";
        }else{
            grid.borderColor="#000000";
            
        }
    }
}