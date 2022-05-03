import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { Figuras } from 'src/app/models/figuras';
import { FigurasService } from 'src/app/services/figuras.service';

@Component({
  selector: 'app-new-unit',
  templateUrl: './new-unit.page.html',
  styleUrls: ['./new-unit.page.scss'],
})
export class NewUnitPage implements OnInit {

  public myForm:FormGroup;
  public unidad:Figuras;

  constructor(private figuraService:FigurasService, private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group( {
    name: "",
    movimiento: 0,
    habilidadCombate: "",
    habilidadDisparo: "",
    fuerza: 1,
    dureza: 1,
    heridas: 1,
    ataques: 1,
    liderazgo: 1,
    salva: "",
    habilidades: [""]
    });
  }

}
