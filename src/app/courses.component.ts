import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <h2>{{title}}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{course}}
        </li>
      </ul>
    `,

  // './courses.component.html',
})

export class CoursesComponent {
  title = "List of Titles";
  courses;

  constructor() {
    let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
