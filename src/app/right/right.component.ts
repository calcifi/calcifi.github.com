import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit, AfterViewInit {

  @Output() messageEvent = new EventEmitter<boolean>();

  private themeToggler :any ;
  
  constructor(private sharedService: SharedService){
  }
  ngAfterViewInit(): void {
    this.themeToggler = document.querySelector(".theme-toggler");
    this.themeToggler.addEventListener('click',()=>{
      document.body.classList.toggle('dark-theme-variables')
      this.themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
      this.themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    });
  }

  ngOnInit(): void {
    console.log('Right Menu Loaded');
    /* const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    menuBtn.addEventListener('click',()=>{
      sideMenu.style.display='block';
  }) */
  }

  openMenu(): void {
    this.messageEvent.emit(true)
  }
}
