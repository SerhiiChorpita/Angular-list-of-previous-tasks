import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public cenzor!: boolean;
  public userlist: boolean = false;
  public tasklist: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cenzor);

  }



}
