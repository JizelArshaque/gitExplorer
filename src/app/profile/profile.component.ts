import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitSService } from '../git-s.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      this.searchKey = res['id']
      // console.log(this.searchKey); 
      this.getProfile(this.searchKey)
      
    })
  }


  searchKey:string=''
  constructor(private route:ActivatedRoute,private api:GitSService,private fb:FormBuilder,private router:Router){}
  allDetails:any=[]

  searchForm = this.fb.group({
    searchName:['',[Validators.required]]
  })

  search(){
    if(this.searchForm.valid){ 
      const searcher = this.searchForm.value.searchName
      this.router.navigateByUrl(`/profile/${searcher}`)
      this.getProfile(searcher)
    }else{
      Swal.fire('Please Enter the username to search!')
    }
  }

  getProfile(name:any){
    this.api.getProfileDeatilsApi(name).subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.allDetails=res
        
      },
      error:((err:any)=>{
        // console.log(err);
        Swal.fire('No usernam found with that name, Please Try again!')
        this.router.navigateByUrl('')
        
      })
    })
  }

}
