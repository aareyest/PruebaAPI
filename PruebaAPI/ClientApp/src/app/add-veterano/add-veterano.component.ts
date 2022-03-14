import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VeteranoService } from '../services/veterano.service';
import { Veterano } from 'src/models/veterano';

@Component({
  selector: 'app-add-veterano',
  templateUrl: './add-veterano.component.html',
  styleUrls: ['./add-veterano.component.css']
})
export class AddVeteranoComponent implements OnInit {

  veteranoForm: FormGroup;
  title = 'Create';
  idveterano: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _veteranoService: VeteranoService, private _router: Router) {
    if (this._avRoute.snapshot.params['idveterano']) {
      this.idveterano = this._avRoute.snapshot.params['idveterano'];
    }

    this.veteranoForm = this._fb.group({
      idveterano: 0,
      dui: ['', [Validators.required]],
      carnet: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      nombre2: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      apellido2: ['', [Validators.required]]
    })
  }
  ngOnInit() {
    if (this.idveterano > 0) {
      this.title = 'Edit';
      this._veteranoService.getVeteranoById(this.idveterano)
        .subscribe((response: Veterano) => {
          this.veteranoForm.setValue(response);
        }, error => console.error(error));
    }
  }

  saveVe() {

    if (!this.veteranoForm.valid) {
      return;
    }

    if (this.title === 'Create') {
      this._veteranoService.saveVeterano(this.veteranoForm.value)
        .subscribe(() => {
          this._router.navigate(['/listar-veterano']);
        }, error => console.error(error));
    } else if (this.title === 'Edit') {
      this._veteranoService.updateVeterano(this.veteranoForm.value)
        .subscribe(() => {
          this._router.navigate(['/listar-veterano']);
        }, error => console.error(error));
    }
  }

  cancelVe() {
    this._router.navigate(['/listar-veterano']);
  }

  get dui() { return this.veteranoForm.get('dui'); }
  get carnet() { return this.veteranoForm.get('carnet'); }
  get nombre() { return this.veteranoForm.get('nombre'); }
  get nombre2() { return this.veteranoForm.get('nombre2'); }
  get apellido() { return this.veteranoForm.get('apellido'); }
  get apellido2() { return this.veteranoForm.get('apellido2'); }

}
