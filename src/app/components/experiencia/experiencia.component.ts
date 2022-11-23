import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  expList:any
  constructor(private datosPortfolio:PortfolioService){}
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.expList = data.experience
      
    })
  }

}
