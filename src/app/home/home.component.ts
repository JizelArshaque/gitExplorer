import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private router: Router,private fb:FormBuilder) { }

  // validation with Reactive forms
  searchForm = this.fb.group({
    searchName:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%^&]*')]]
  })

  search(){    
    // only if the form is valid it will show the profiles
    if(this.searchForm.valid){ 
      const searcher = this.searchForm.value.searchName
      this.router.navigateByUrl(`/profile/${searcher}`)
    }else{
      Swal.fire('Please Enter the username to search!')
    }
  }
}
