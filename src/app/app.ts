import { Component, effect, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  num = 0;
  protected readonly Name = signal('Jogi Phoenix');
  Age = 20;
  protected readonly Tech = signal('Angular 21 Used');
  btndisabled=false;
  speed = signal(0);
  color="black";
  constructor(){
    effect(()=>{
      if(this.speed()>0 && this.speed()<30)
      {
        this.color="red";
      }
      if(this.speed()>30 && this.speed()<60)
      {
        this.color="Blue";
      }
      if(this.speed()>=60 && this.speed()<100)
      {
        this.color="Green";
      }
    })
  }
  IncreaseSpeed(){
    this.speed.set(this.speed()+10);
  }
  Toggle(){
    this.btndisabled=!this.btndisabled;
  }
  AddNum(a:number,b:number){
    return this.num = a+b;
  }
  count=0;
  CountNum(val:string){
    if(val == "plus")
    {
      this.count++;
      this.ShowUser(this.count);
    }
    else{
      this.count>0 && this.count--;
    }
  }
  ShowUser(val:number){
    alert("Saqib Saleem "+ val);
  } 
  EventHandler(event:any){
    // console.log(event.target.value)
    console.log(event)
  }
  }
  
