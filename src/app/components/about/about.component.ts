import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService){

  }
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data;
    });
  }
}
