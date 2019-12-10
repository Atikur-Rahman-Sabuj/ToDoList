import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('.5s', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'ToDoList';
  public ToDoItem: String = "test";
  public ToDoItems : String[]=[];
  public EditTarget : String[]=[];
  public IsEditing : Boolean[]=[];
  public SaveItem(){
    //console.log(this.ToDoItem);
    this.ToDoItems.push(this.ToDoItem);
  }
  public EditItem(index){
    if (this.IsEditing[index]) {
      this.IsEditing[index] = false;
    }else{
      this.EditTarget[index] = this.ToDoItems[index];
      this.IsEditing[index] = true;
    }
    
  }
  public CompleteEditItem(index){
    this.ToDoItems[index] = this.EditTarget[index];
    this.IsEditing[index] = false;
    console.log(this.ToDoItems[index])
  }
  public DeleteItem(index){
    this.ToDoItems.splice(index,1);
  }
}
