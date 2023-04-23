import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit,OnDestroy{
  title = 'calcifi.github.com';

  constructor(public responsive: BreakpointObserver) { }
 

  ngAfterViewInit(): void {
   
  }

  closeBtnPrntClass : boolean=true;

  @ViewChild(MenuComponent) child!: MenuComponent;

  receiveMessage($event: any) {
    this.closeBtnPrntClass=$event;
    if($event){
      this.child.openMenu();
    }else {
      
    }
    console.log('receiveMessage message'+$event);
  
  }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape]).subscribe((state: BreakpointState)=>{
      if(state.matches){
        this.closeBtnPrntClass=false;
        console.log(
          'This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.'
          );
      }
    });

    this.responsive.observe([Breakpoints.WebPortrait,
      Breakpoints.WebLandscape]).subscribe((state: BreakpointState)=>{
      if(state.matches){
        console.log(
          'This is the Web Portrait point at max-width: 599.98 px and portrait orientation.'
          );
          if(this.child){
            this.child.openMenu();
          }
      }
    });
  }

  ngOnDestroy(): void {
    
  }
 
}
