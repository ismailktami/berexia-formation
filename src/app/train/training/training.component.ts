import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-training-material',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingMaterialComponent implements OnInit {
  selected = new FormControl(0);
  constructor() { }
  ngOnInit() {

  }

  addTraining() {
        this.selected=new FormControl(0);
  }

}
