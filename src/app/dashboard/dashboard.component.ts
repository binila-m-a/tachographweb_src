import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchTerm: string = '';
  dashboarddata: any;

  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashBoardData();
  }

  getDashBoardData(): void {
    this.dashboardService.GetDashBoarddata().subscribe(
      (res) => {
        this.dashboarddata = res.data;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }

  filterViolations(violations: any[]): any[] {
    if (!this.searchTerm) {
      return violations;
    }

    const searchTermLower = this.searchTerm.toLowerCase();
    return violations.filter(violation =>
      (`${violation.firstName} ${violation.lastName}`.toLowerCase().includes(searchTermLower) ||
        violation.startTime.toLowerCase().includes(searchTermLower) ||
        violation.endTime.toLowerCase().includes(searchTermLower))
    );
  }
}
