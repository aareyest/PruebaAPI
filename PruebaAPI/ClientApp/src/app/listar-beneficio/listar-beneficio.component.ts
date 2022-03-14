import { Component } from '@angular/core';
import { BeneficioService } from '../services/beneficio.service';
import { Beneficio } from 'src/models/beneficio';

@Component({
  selector: 'app-listar-beneficio',
  templateUrl: './listar-beneficio.component.html',
  styleUrls: ['./listar-beneficio.component.css']
})
export class ListarBeneficioComponent {

  public beList: Beneficio[];

  constructor(private _beneficioService: BeneficioService) {
    this.getBeneficio();
  }

  getBeneficio() {
    this._beneficioService.getBeneficio().subscribe(
      (data: Beneficio[]) => this.beList = data
    );
  }

  delete(idbeneficios) {
    const ans = confirm('Seguro quiere eliminar el veteranos con el id: ' + idbeneficios);
    if (ans) {
      this._beneficioService.deleteBeneficio(idbeneficios).subscribe(() => {
        this.getBeneficio();
      }, error => console.error(error));
    }
  }
}
