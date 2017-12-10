import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

//importaciones nuevas para la navegacion
import { NativeScriptRouterModule} from "nativescript-angular/router"
//importamos las constantes de nuestro archivo routing
import { NavegateRoutes,Routes} from "./app.routing";
// registramos el plugin instalado nativescript-gradient
import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

@NgModule({
  declarations: [AppComponent,...NavegateRoutes],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(Routes)],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
