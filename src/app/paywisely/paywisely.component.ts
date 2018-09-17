import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paywisely',
  templateUrl: './paywisely.component.html',
  styleUrls: ['./paywisely.component.css']
})
export class PaywiselyComponent implements OnInit {

	users = [];
	userName = "";
	payer = {
		name: "",
		credit: 0,
		debit: 0
	};
	isUserExists = false;
	showExpense = false;
	partMembers =[];
	options = [];
	expense = 0;
	userExists(){
		var z = this.users.length;
		for(var i=0; i<z; i++){
			var uName = this.userName.trim().toLowerCase();
			if(this.users[i].name === uName){
				this.isUserExists = true;
				return true;
			}
			else{
				return false;
			}
		}
	}

	//Getting output with event emitter from multiselect4u.
	onSelectChange(value){
		this.partMembers = value;
	}

	addUser(){
		console.log(this.userExists());
	    if(!this.userExists()){
			this.users.push({
				name: this.userName,
				credit: 0,
				debit: 0
			});
			this.options.push(this.userName);
			//console.log(this.users);
			this.userName="";
	    }
	    else{
	    	console.log("User already exists!");
	    }	
	}

	addExpenses(){
		var z = this.users.length;
		var x = this.partMembers.length;
		for(var i=0; i<z; i++){
			if(this.users[i].name === this.payer){
				this.users[i].credit = this.users[i].credit + this.expense;
			}
		}
		for(var p=0; p<x; p++ ){
			for(var j=0; j<z; j++){
				if(this.users[j].name === this.partMembers[p]){
					this.users[j].debit = (this.users[j].debit - (this.expense/x));
				}
			}
		}
		this.partMembers = [];
		this.expense = 0;
		this.payer = {name: "", credit: 0, debit: 0};
		this.showExpense = true;
		console.log(this.users);
	}

	constructor() { 
	}

	ngOnInit() { 			
	}

}
