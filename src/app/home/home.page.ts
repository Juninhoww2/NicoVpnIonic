import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( 
  ) {
  }

  public logopng = "../../assets/estados-unidos-da-america.png";
  
  toggleIcon() {
    if(this.logopng=="../../assets/estados-unidos-da-america.png")
    {
      this.logopng="../../assets/china.png";
    }else{
      this.logopng = "../../assets/estados-unidos-da-america.png";
    }
  }


  OnChange() {
    
  }
}