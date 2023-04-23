import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,OnDestroy{
 



  @Input() closeBtn :boolean= false;
  
  constructor(private sharedService: SharedService){

  }
  ngOnDestroy(): void {
    console.log('menu component destroy')
  }
  
  ngOnInit(): void {
    console.log('menu component loaded')
  }
  closeMenu(): void {
    console.log('closeMenu current Menu '+this.closeBtn);
    this.closeBtn=false;
  }



  openMenu() : void{
    this.closeBtn=true;
  }

}
