import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficioService } from '../services/beneficio.service';
import { Beneficio } from 'src/models/beneficio';

@Component({
  selector: 'app-add-beneficio',
  templateUrl: './add-beneficio.component.html',
  styleUrls: ['./add-beneficio.component.css']
})
export class AddBeneficioComponent implements OnInit {

  beneficioForm: FormGroup;
  title = 'Create';
  idbeneficios: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _beneficioService: BeneficioService, private _router: Router) {
    if (this._avRoute.snapshot.params['idbeneficios']) {
      this.idbeneficios = this._avRoute.snapshot.params['idbeneficios'];
    }

    this.beneficioForm = this._fb.group({
      idbeneficios: 0,
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    })
  }
  ngOnInit() {
    if (this.idbeneficios > 0) {
      this.title = 'Edit';
      this._beneficioService.getBeneficioById(this.idbeneficios)
        .subscribe((response: Beneficio) => {
          this.beneficioForm.setValue(response);
        }, error => console.error(error));
    }
  }

  saveBe() {

    if (!this.beneficioForm.valid) {
      return;
    }

    if (this.title === 'Create') {
      this._beneficioService.saveBeneficio(this.beneficioForm.value)
        .subscribe(() => {
          this._router.navigate(['/listar-beneficio']);
        }, error => console.error(error));
    } else if (this.title === 'Edit') {
      this._beneficioService.updateBeneficio(this.beneficioForm.value)
        .subscribe(() => {
          this._router.navigate(['/listar-beneficio']);
        }, error => console.error(error));
    }
  }

  cancel() {
    this._router.navigate(['/listar-beneficio']);
  }

  get nombre() { return this.beneficioForm.get('nombre'); }
  get descripcion() { return this.beneficioForm.get('descripcion'); }

}
