import { Component } from '@angular/core';

import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormBuilderAngular';

  myFormModel: FormGroup;



  constructor(fb: FormBuilder) {        
    this.myFormModel = fb.group({      
      username: [''],                  
      ssn: [''],
     passwordsGroup: fb.group({        
        password: [''],
       pconfirm: ['']
     })
   });
 }

  onSubmit() {                                                       
    console.log(this.myFormModel.value);
  }
}




