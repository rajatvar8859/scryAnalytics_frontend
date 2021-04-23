import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crownstack';

  public breadcumData = [
    { name: 'Home', url: '/', active: true, location: null, branch: null }];

}
