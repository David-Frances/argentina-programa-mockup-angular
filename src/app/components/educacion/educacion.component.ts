import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService){

  }
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data;
    });
  }
}
