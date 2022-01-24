import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/Models/action';
import { ActionService } from 'src/app/Services/action.service';

@Component({
  selector: 'app-edit-action',
  templateUrl: './edit-action.component.html',
  styleUrls: ['./edit-action.component.css']
})
export class EditActionComponent implements OnInit {
  action  = new Action();

  id:any;
  nom:any;
  dateMarche:any;
  description:any;
  nombreAction:any;
  prixEntree:any;

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

  editAction(){
    console.log(this.action);
    if (this.nom!=null)
    this.action.nom=this.nom;
    if (this.dateMarche!=null)
    this.action.dateMarche=this.dateMarche;
    if (this.description!=null)
    this.action.description=this.description;
    if (this.nombreAction!=null)
    this.action.nombreAction=this.nombreAction;
    if (this.prixEntree!=null)
    this.action.prixEntree=this.prixEntree;
    this.actionService.updateAction(this.action).subscribe(
      res => {
        console.log('Action edited!');
        this.action = res;
      });
      err => {
        console.log(err);
      }
      setTimeout( ()=>{
        this.router.navigate(['action/listaction']);
        },  100)
  }


  setnom(value): void {
    this.nom=(value.target as HTMLInputElement).value;
    console.log(this.nom)
  }
  setdateMarche(value): void {
    this.dateMarche=(value.target as HTMLInputElement).value;
    console.log(this.dateMarche)
  }
  setdescription(value): void {
    this.description=(value.target as HTMLInputElement).value;
    console.log(this.description)
  }
  setnombreAction(value): void {
    this.nombreAction=(value.target as HTMLInputElement).value;
    console.log(this.nombreAction)
  }
  setprixEntree(value): void {
    this.prixEntree=(value.target as HTMLInputElement).value;
    console.log(this.prixEntree)
  }
     

  

}
