import { Component, OnInit } from '@angular/core';
import { Experiances } from '../shared/models/experiances.model';

import { Formations } from '../shared/models/formations.model';
import { ExperianceService } from '../shared/services/experiances.service';


import { FormationService } from '../shared/services/formation.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit{

  pagetitle = "INFORMATION";

  public formations: Formations[] = [];

  public errMsg!:string;

  public experiances: Experiances[] = [];


  constructor(
    private formationservice: FormationService,
    private experiancesService: ExperianceService,

  ) { }



  ngOnInit(): void {
    this.formationservice.getFormations().subscribe(
      {
        next:formations =>{ this.formations = formations;},
        error:err =>this.errMsg = err
      }
    );

    // rubrique des experiances

    this.experiancesService.getExperiances().subscribe(
      {
        next:experiances =>{ this.experiances = experiances;},
        error:err => this.errMsg = err
      }
    );

  }


  public showBadge:Boolean = false;

  public toggleIsNewBadge(): void {

    this.showBadge=!this.showBadge;

  }



  /* #########################################################
  competance

  ######################################################*/

  public Competence: boolean = false;

  public toggleIsNewCompetence(): void{
    this.Competence = !this.Competence
  }

}
