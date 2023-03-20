import { Component, OnInit} from '@angular/core';
import { APIService } from '../API.service';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms'





@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  myForm:FormGroup
  data:any[]=[]
  onSearch:any[]=[]
  list:any
  name:any
  
  

  constructor(private api:APIService, private fb:FormBuilder){
    this.myForm=this.fb.group({
      
      name:['',Validators.required],
      department:['',Validators.required],
      rank:[0,Validators.required]
    })
  }
  ngOnInit():void{
    this.api.ListStudents().then((data)=>{
      console.log(data)
      this.data=data.items
})

  }
  add=(value:any)=>{
    console.log(value)
    this.api.CreateStudents(value).then((data)=>{
      console.log(data)
      console.log("Entry Created")
      this.myForm.reset()
    }).catch((err)=>{
      console.log(err)
    })

  }

sub=this.api.OnCreateStudentsListener().subscribe((data)=>{
  this.list=data.value.data?.onCreateStudents
  this.data=[...this.data,this.list]
})
ngOnDestroy():void{
  if(this.sub){
    this.sub.unsubscribe()
  }  
}

delete=async(id:string)=>{
  await this.api.DeleteStudents({id:id}).then((data)=>{
    console.log(data)
  }).catch((err)=>{
    console.log(err)
  })
}
subDelete=this.api.OnDeleteStudentsListener().subscribe((data)=>{
  console.log(data)
  this.data=this.data.filter(x=>x.id!=data.value.data?.onDeleteStudents.id)

})

search=()=>{
  this.api.SearchStudents( {name: {match:this.name}}).then((data)=>{
    console.log(data)
    this.onSearch=data.items
  }).catch(err=>{
    console.log(err)
  })
}
}
