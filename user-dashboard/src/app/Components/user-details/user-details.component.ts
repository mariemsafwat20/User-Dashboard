import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../Services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    MatToolbarModule
  ],
  providers: [UserServiceService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  user: any;
  constructor(private route:ActivatedRoute, private userService: UserServiceService, private router: Router) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.userService.getUserById(+id).subscribe((data: any) => {
        this.user = data;
        console.log(this.user);
        
      })
    }
  }

  goBack(){
    this.router.navigate(['/']);
  }
}
