import { Component, OnInit } from '@angular/core';
import { GitSService } from '../git-s.service';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit{

  constructor(private api:GitSService,private route:ActivatedRoute){}

  allDetails:any=[]
  user:string=''
  p: number = 1;

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      this.user=res['id']
      // console.log(this.user);
    })
    this.getrepodets(this.user)
  }

  
  getrepodets(user:string){
    this.api.getRepoDetails(user).subscribe({
      next:(res:any)=>{     
        this.allDetails=res

        
        
        
      },
      error:(err:any)=>{
        Swal.fire('no Account with that username!')

      }
    })
  }
}
