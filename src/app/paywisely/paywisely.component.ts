import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paywisely',
  templateUrl: './paywisely.component.html',
  styleUrls: ['./paywisely.component.css']
})
export class PaywiselyComponent implements OnInit {

	users = [];
	userName = "";
	user = {
		name: "",
		credit: 0,
		debit: 0
	};
	payer = {
		name: "",
		credit: 0,
		debit: 0
	};
	partMembers = [];
	expense = 0;
	userExists(){
		var z = this.users.length;
		for(var i=0; i<z; i++){
			if(this.users[i].name === this.userName){
				return true;
			}
			else{
				return false;
			}
		}
	}

	addUser(){
		console.log(this.userExists());
	    if(!this.userExists()){
			this.users.push({
				name: this.userName,
				credit: 0,
				debit: 0
			});
			console.log(this.users);
			this.userName="";
	    }
	    else{
	    	console.log("User already exists!");
	    }	
	}

	addExpenses(){
		var z = this.users.length;
		var x = this.partMembers.length;
		console.log(x);
		for(var i=0; i<z; i++){
			if(this.users[i].name === this.payer){
				this.users[i].credit = this.users[i].credit + this.expense;
			}
		}
		for(var p=0; p<x; p++ ){
			for(var j=0; j<z; j++){
				console.log(this.partMembers[p]);
				console.log(this.users[j].name);
				if(this.users[j].name === this.partMembers[p]){
					this.users[j].debit = (this.users[j].debit - (this.expense/x));
				}
			}
		}
		console.log(this.users);
	}
  constructor() { }

  ngOnInit() {
  }

}
