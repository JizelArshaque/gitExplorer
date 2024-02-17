import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitSService } from '../git-s.service';

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
  constructor(private route:ActivatedRoute,private api:GitSService){}
  allDetails:any=[]

  getProfile(name:any){
    this.api.getProfileDeatilsApi(name).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allDetails=res
        
      },
      error:((err:any)=>{
        console.log(err);
        
      })
    })
  }

}
