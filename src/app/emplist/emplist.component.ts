import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {
    employees = [
      {
        employeeBio: 'As our seasoned mixologist and team lead, Denise Julia brings years of experience and a keen eye for flavor to the table.',
        employeeNumber: '202401',
        fullname: 'Denise Julia',
        gender: 'Female',
        email: 'denisejulia@gmail.com',
        employmentStatus: 'Full-time Employee',
        salary: 30000,
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png',
      },
      {
        employeeBio: 'As our head of flavor innovation, Aria Santiago brings a burst of creativity to every mix. With her knack for blending unique ingredients and creating unforgettable taste experiences, Aria is the driving force behind our ever-expanding menu of mocktails.',
        employeeNumber: '202402',
        fullname: 'Aria Gomez',
        gender: 'Female',
        email: 'ariagomez@gmail.com',
        employmentStatus: 'Full-time Employee',
        salary: 35000,
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png',
      },
      {
        employeeBio: 'Meet Maki California, our resident mixology maven and master of all things shaken and stirred. With an employee number as distinctive as his cocktail techniques, His dedication to craftsmanship and flair for presentation are unmatched.',
        employeeNumber: '202403',
        fullname: 'Maki California',
        gender: 'Male',
        email: 'makicalifornia@gmail.com',
        employmentStatus: 'Part-time Employee',
        salary: 25000,
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_person_people_avatar_white_tone_icon_159365.png',
      },
      {
        employeeBio: 'Meet Lucas Garcia, our resident cocktail connoisseur and master of mixology magic. With his infectious energy and commitment to customer satisfaction, Lucas ensures that every drink served at Whistle Street is nothing short of perfection. ',
        employeeNumber: '202404',
        fullname: 'Lucas Garcia',
        gender: 'Male',
        email: 'lucasgarcia@gmail.com',
        employmentStatus: 'Seasonal Employee',
        salary: 25000,
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png',
      },
    ];  
}
