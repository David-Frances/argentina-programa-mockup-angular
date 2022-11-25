import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService){

  }
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data;
    });
  }
}
