import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './virtual.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Virtualform';

constructor(private services: EnrollmentService){

}


  userModel=new User('','','','','','','','','','','','','');

  onSubmit(){


    console.log(this.userModel);
    this.services.enroll(this.userModel).subscribe(data=>{
      console.log(data)})
  
  }
}
