import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    
    
  }
  
  

  constructor(private router: Router,private fb:FormBuilder) { }

  searchForm = this.fb.group({
    searchName:['',[Validators.required]]
  })

  search(){
    const searcher = this.searchForm.value.searchName
    this.router.navigateByUrl(`/profile/${searcher}`)

  }

  
  

}
