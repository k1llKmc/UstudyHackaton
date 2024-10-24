import { Courses, Events } from './../../app.data';
import { Course } from './../../app.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  courses: Course[] = Courses;
  events: 
}
