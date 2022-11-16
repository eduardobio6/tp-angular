import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public lists: ListaService) { }

  ngOnInit(): void {
  }

}