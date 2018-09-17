import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-multiselect4u',
  templateUrl: './multiselect4u.component.html',
  styleUrls: ['./multiselect4u.component.css'],
})
export class Multiselect4uComponent implements OnInit {
  
  @Input() options = [];

  @Output() selectedOptions = new EventEmitter();

  results = [];

  showOptions = true;

  onShowOption(){
   	this.showOptions = !this.showOptions;
  }

  onSelectOption(option, e){
  	if(e.target.checked){
	  	this.results.push(option);
  	}
  	else{
  		var x = this.results.indexOf(option)
  		this.results.splice(x, 1);
  	}
  	//console.log("My Result: "+ this.results);
  	this.selectedOptions.emit(this.results);
  }

  closeOption(){
    console.log("hello i am here");
    if(this.showOptions == false){
        this.showOptions = true;
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
