import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username:string;
  NoOfTeamMember:number;
  TotalCostOfAllProjects:number;
  PendingTask:number;
  UpcomingProject:number;
  ProjectCost:number;
  AvailableFunds:number;
  Projects:string[];
  Years:number[]=[];
  ProjectMemberSummery=[];


  ngOnInit()
   {
    this.Designation = "Team Leader",
    this.Username = "john smith",
    this.NoOfTeamMember = 50,
    this.TotalCostOfAllProjects = 300,
    this.PendingTask = 5,
    this.UpcomingProject = 10,
    this.ProjectCost=  350000,
    this.AvailableFunds= 2000000,
    this.Projects=["Project A","Project B","Project C","Project D"];
    for(var i=2020;i<=2010;i--)
    {
      this.Years.push(i);
    }
    this.ProjectMemberSummery=
     [
      {Region:"East",TeamMemberCount:30,TemparioryMemberUnavailable:"5"},
      {Region:"West",TeamMemberCount:10,TemparioryMemberUnavailable:"10"},
      {Region:"North",TeamMemberCount:32,TemparioryMemberUnavailable:"15"},
      {Region:"South",TeamMemberCount:20,TemparioryMemberUnavailable:"5"}
      
     ]
 
    


   }

}
