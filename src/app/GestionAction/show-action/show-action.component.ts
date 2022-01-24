import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/Models/action';
import { ActionService } from 'src/app/Services/action.service';

@Component({
  selector: 'app-show-action',
  templateUrl: './show-action.component.html',
  styleUrls: ['./show-action.component.css']
})
export class ShowActionComponent implements OnInit {
  id:number;
  action :Action;

  constructor(private actionService: ActionService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getAction();
  }
  getAction(){
    this.actionService.getAction(this.id).subscribe(
      res => {
        console.log('Action :');
        this.action = res;
        console.log(this.action);
      });
    
    
    err => {
      console.log(err);
    }
  }
  editAction() {
    this.router.navigate(['/action/edit/', this.id])
  }
  deleteAction(){
    this.actionService.deleteActionById(this.id).subscribe(
      res => {
        console.log('Action deleted!');
        this.router.navigate(['/action/listaction']);
      });
    err => {
      console.log(err);
    }
  }

}
