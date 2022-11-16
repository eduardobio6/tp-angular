import { Component, OnInit } from '@angular/core';
import { DiciplinaService } from '../../services/diciplina.service';
import { Disciplina } from '../Diciplina';

@Component({
  selector: 'app-diciplina',
  templateUrl: './diciplina.component.html',
  styleUrls: ['./diciplina.component.css']
})
export class DiciplinaComponent implements OnInit {


  disciplinas: Diciplina[] = [];

  discipline = {
    name: 'Marketing',
    diaDaSemana: 'terça',
    time: '19h00'
  }

  constructor(private diciplinaService: DiciplinaService) { 
    this.getDisciplinas()
  }

  ngOnInit(): void {
  }

  getDisciplinas(): void {
    this.diciplinaService.getAll().subscribe((disciplinas) => (this.disciplinas = disciplinas));
  }

}