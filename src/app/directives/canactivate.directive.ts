import { Directive, TemplateRef, ViewContainerRef, OnInit,  Input } from '@angular/core';
import { AuthService } from '../services/auth.service'
@Directive({
  selector: '[canActivate]'
})
export class CanActivateDirective implements OnInit {

  @Input('canActivate') roles: string[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService:AuthService
  ) { }

  ngOnInit(){

    if(this.validateRole(this.roles)){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.remove()
    }
  }

  validateRole(roles){
    return roles.some( obj =>{
      if(obj == this.authService.getRole()) return true;
      else return false;
    })
  }

}
