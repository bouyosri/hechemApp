import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/Models/action';
import { ActionService } from 'src/app/Services/action.service';

@Component({
  selector: 'app-liste-action',
  templateUrl: './liste-action.component.html',
  styleUrls: ['./liste-action.component.css']
})
export class ListeActionComponent implements OnInit {
  listActions: Action[];
  

  constructor(private actionService: ActionService,private router: Router) { }

  ngOnInit(): void {
  
    this.getAllAction();
    
  }

  getAllAction(){
    console.log('eeeee');
    this.actionService.getAllActions().subscribe(
      res => {
        console.log('Actions :');
        this.listActions = res;
        console.log(this.listActions);
      });
    err => {
      console.log(err);
    }
     

  }
  /*updateFacture(id: number) {
    this.router.navigate(['/facture/update', id])
  }*/

  showAction(id: number) {
    this.router.navigate(['/action/show/', id])
  }

  deleteAction(id: number){
    this.actionService.deleteActionById(id).subscribe(
      res => {
        console.log('Action deleted!');
        this.router.navigate(['/action/listaction']);
      });
    err => {
      console.log(err);
    }
    window.location.reload();
  }

}
