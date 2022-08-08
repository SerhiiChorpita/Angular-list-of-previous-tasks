import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  public arrNames: Array<string> = [];
  public arrPass: Array<string> = [];
  public arrEmail: Array<string> = [];
  public newName!: string;
  public newPass!: string;
  public newEmail!: string;

  public editStatus = false;
  public editIndex!: number;

  addName(): void {
    this.arrNames.push(this.newName);
    this.arrPass.push(this.newPass);
    this.arrEmail.push(this.newEmail);
    this.newName = '';
    this.newPass = '';
    this.newEmail = '';
  }
  deleteUser(index: number): void {
    this.arrNames.splice(index, 1);
    this.arrPass.splice(index, 1);
    this.arrEmail.splice(index, 1);
  }
  editUser(index: number): void {
    this.newName = this.arrNames[index];
    this.newPass = this.arrPass[index];
    this.newEmail = this.arrEmail[index];
    this.editIndex = index;
    this.editStatus = true;
  }
  saveUser(): void {
    this.arrNames[this.editIndex] = this.newName;
    this.arrPass[this.editIndex] = this.newPass;
    this.arrEmail[this.editIndex] = this.newEmail;
    this.newName = '';
    this.newPass = '';
    this.newEmail = '';
    this.editStatus = false;
  }
}
