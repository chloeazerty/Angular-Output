import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {
 
 @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();  
  newOnomatopia: string = "";

  constructor() {}

  ngOnInit(): void {
  }

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

}


