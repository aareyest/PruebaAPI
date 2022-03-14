import { Component } from '@angular/core';
import { VeteranoService } from '../services/veterano.service';
import { Veterano } from 'src/models/veterano';

@Component({
  selector: 'app-listar-veterano',
  templateUrl: './listar-veterano.component.html',
  styleUrls: ['./listar-veterano.component.css']
})
export class ListarVeteranoComponent {

  public veList: Veterano[];

  constructor(private _veteranoService: VeteranoService) {
    this.getVeterano();
  }

  getVeterano() {
    this._veteranoService.getVeterano().subscribe(
      (data: Veterano[]) => this.veList = data
    );
  }

  delete(idveterano) {
    const ans = confirm('Seguro quiere eliminar el veteranos con el id: ' + idveterano);
    if (ans) {
      this._veteranoService.deleteVeterano(idveterano).subscribe(() => {
        this.getVeterano();
      }, error => console.error(error));
    }
  }
}
