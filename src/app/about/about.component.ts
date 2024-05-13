import { Component } from '@angular/core';
import { EmplistComponent } from '../emplist/emplist.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [EmplistComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
