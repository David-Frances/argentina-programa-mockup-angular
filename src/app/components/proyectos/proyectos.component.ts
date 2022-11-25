import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService){

  }
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data;
    });
  }
}
