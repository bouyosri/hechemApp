import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/Models/action';
import { ActionService } from 'src/app/Services/action.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {
  
   action  = new Action();

  nom:any;
  dateMarche:any;
  description:any;
  nombreAction:any;
  prixEntree:any;



  constructor(private actionService: ActionService,private router: Router) { }

  ngOnInit(): void {
  }
  addAction(){
    console.log(this.nom);
    console.log(this.action);
    this.action.id=0;
    this.action.nom=this.nom;
    this.action.dateMarche=this.dateMarche;
    this.action.description=this.description;
    this.action.nombreAction=this.nombreAction;
    this.action.prixEntree=this.prixEntree;
    this.actionService.addAction(this.action).subscribe(
      res => {
        console.log('Action created!');
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
