import { Component, effect, signal, WritableSignal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  num = 0;
  protected readonly AppName = signal('Jogi Phoenix');
  Age = 20;
  protected readonly Tech = signal('Angular 21 Used');
  btndisabled = false;
  speed = signal(0);
  color = 'black';
  constructor() {
    effect(() => {
      if (this.speed() > 0 && this.speed() < 30) {
        this.color = 'red';
      }
      if (this.speed() > 30 && this.speed() < 60) {
        this.color = 'Blue';
      }
      if (this.speed() >= 60 && this.speed() < 100) {
        this.color = 'Green';
      }
    });
  }
  IncreaseSpeed() {
    this.speed.set(this.speed() + 10);
  }
  Toggle() {
    this.btndisabled = !this.btndisabled;
  }
  AddNum(a: number, b: number) {
    return (this.num = a + b);
  }
  count = 0;
  CountNum(val: string) {
    if (val == 'plus') {
      this.count++;
      this.ShowUser(this.count);
    } else {
      this.count > 0 && this.count--;
    }
  }
  ShowUser(val: number) {
    alert('Saqib Saleem ' + val);
  }
  EventHandler(event: any) {
    // console.log(event.target.value)
    console.log(event);
  }
  //#region Counter App
  // Counter App with Signals
  Counter: WritableSignal<number> = signal<number>(0);
  FtnIncrement() {
    this.Counter.update((val) => val + 1);
  }
  FtnDecrement() {
    if (this.Counter() > 0) {
      this.Counter.update((val) => val - 1);
    }
  }
  FtnReset() {
    this.Counter.set(0);
  }
  //#endregion
  //#region Get and set Values from Input fields
  Name: WritableSignal<string> = signal<string>('');
  FtnResetInputValue() {
    this.Name.set('');
  }
  FtnSetInputValue(val: string) {
    this.Name.set(val);
  }
  //#region Control Statements
  isLogin = signal<boolean>(true);
  UserNames = signal(['Saqib', 'Ali', 'Mohsin']);
  UserDetails = signal([
    { id: 1, name: 'Muhammad Saqib', username: 'saqib', email: 'saqib@example.com' },
    { id: 2, name: 'Ali Khan', username: 'alikhan', email: 'ali@example.com' },
    { id: 3, name: 'Ahmed Raza', username: 'ahmedraza', email: 'ahmed@example.com' },
    { id: 4, name: 'John Smith', username: 'johnsmith', email: 'john@example.com' },
  ]);
  //#endregion
  ObjUser = signal({
    objName: 'Saqib Saleem',
    objAge: 20,
    objEmail: 'saqib@gmail.com',
  });
  ObjUpdateName(key: string, val: string) {
    this.ObjUser.update((item) => ({ ...item, [key]: val }));
  }
  //#endregion
}
