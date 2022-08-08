import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() public cenzor: boolean = false;
  public userlist: boolean = false;
  public tasklist: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  changeCenzor(): void {
    this.cenzor = !this.cenzor;
  }
  changeUserlist(): void {
    this.userlist = !this.userlist;
  }
  changeTasklist(): void {
    this.tasklist = !this.tasklist;
  }

}
