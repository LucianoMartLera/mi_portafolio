import { ChangeDetectorRef, Component } from '@angular/core';
import { QuienesSomos } from '../../servicios/quienes-somos';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  proyectosList: any

  constructor(private api:QuienesSomos, private cdr: ChangeDetectorRef){
    api.getProfecion().subscribe({
      next: (data) => this.proyectosList = data,
      error: (error) => console.log(error),
      complete: () => {
        this.cdr.detectChanges()
        console.log("ya termino la llamada")
      }
    })
  }
}
