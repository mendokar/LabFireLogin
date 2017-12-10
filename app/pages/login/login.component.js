"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//importar funcion de diseño de page de nativescript
var page_1 = require("ui/page");
var LoginComponent = (function () {
    function LoginComponent(_page) {
        this._page = _page;
        this.coordX = 0;
        this.coordY = 0;
        this._page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    //Creamos una funcion touch asignando el evento al boton para escuchar el gesto que se hace desde la pantalla.
    LoginComponent.prototype.onTouch = function (args) {
        this.coordX = args.getX();
        this.coordY = args.getY();
        var seleccion = args.action;
        var grid = args.object;
        if (seleccion == "up") {
            grid.borderColor = "#e8bd4b";
        }
        else {
            grid.borderColor = "#000000";
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './pages/login/login.component.html',
            styleUrls: ['./pages/login/login.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRCxnQ0FBK0I7QUFZL0I7SUFJQyx3QkFDUyxLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUpiLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUt6QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsOEdBQThHO0lBRTlHLGdDQUFPLEdBQVAsVUFBUSxJQUEyQjtRQUU1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUxQixJQUFJLFNBQVMsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEMsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUM7UUFDOUIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUM7UUFFL0IsQ0FBQztJQUNMLENBQUM7SUE1QlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNoRCxDQUFDO3lDQU9lLFdBQUk7T0FMUixjQUFjLENBNkIxQjtJQUFELHFCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnRhciBmdW5jaW9uIGRlIGRpc2XDsW8gZGUgcGFnZSBkZSBuYXRpdmVzY3JpcHRcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuLy9pbXBvcnRhciBsb3MgZ2VzdHVyZXMgXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbi8vaW1wb3J0YXIgZWwgY29tcG9uZW50ZSBkZSBkaXNlw7FvIGRlbCBCdXR0b25cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbG9naW4nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBjb29yZFg6IG51bWJlciA9IDA7XG5cdHB1YmxpYyBjb29yZFk6IG51bWJlciA9IDA7XG5cdFxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wYWdlOiBQYWdlXG5cdCkge1xuXHRcdHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0Ly9DcmVhbW9zIHVuYSBmdW5jaW9uIHRvdWNoIGFzaWduYW5kbyBlbCBldmVudG8gYWwgYm90b24gcGFyYSBlc2N1Y2hhciBlbCBnZXN0byBxdWUgc2UgaGFjZSBkZXNkZSBsYSBwYW50YWxsYS5cblx0XG5cdG9uVG91Y2goYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG5cbiAgICAgICAgdGhpcy5jb29yZFggPSBhcmdzLmdldFgoKTtcbiAgICAgICAgdGhpcy5jb29yZFkgPSBhcmdzLmdldFkoKTtcblxuICAgICAgICBsZXQgc2VsZWNjaW9uID1hcmdzLmFjdGlvbjtcbiAgICAgICAgIGxldCBncmlkID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICAgICAgIFxuICAgICAgICBpZihzZWxlY2Npb24gPT0gXCJ1cFwiKXtcbiAgICAgICAgICAgZ3JpZC5ib3JkZXJDb2xvcj1cIiNlOGJkNGJcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBncmlkLmJvcmRlckNvbG9yPVwiIzAwMDAwMFwiO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59Il19