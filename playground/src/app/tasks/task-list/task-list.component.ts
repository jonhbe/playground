import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'play-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Router TaskList: ', this.router);
    console.log('Tasklist, ActivatedRoute: ', this.route);
  }
  navigate(): Promise<boolean> {
    console.log(this.route);
    return this.router.navigate(['../home'], { relativeTo: this.route });
  }
}
