import { Component } from '@angular/core';
import mylinks from './navItems';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // authUserObs$: Observable<Usuario | null>;

  links = mylinks;

  // destroyed$ = new Subject<void>();

  constructor(
    // private authService: AuthService,
  ) { 
    // this.authUserObs$ = this.authService.obtenerUsuarioAutenticado();
  }

  // ngOnDestroy(): void {
  //   this.destroyed$.next();
  //   this.destroyed$.complete();
  // }

  cerrarSesion(): void {
    //this.authService.logout();
  }


}
