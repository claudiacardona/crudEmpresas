import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresaFormComponent {
  @Input() empresa: any = {};
  @Input() isEditing: boolean = false;
  @Output() onSave = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  fields = [
    { name: 'nombreComercial', label: 'Nombre Comercial', type: 'text', readOnly: false },
    { name: 'razonSocial', label: 'Razón Social', type: 'text', readOnly: false },
    { name: 'telefono', label: 'Teléfono', type: 'number', readOnly: false },
    { name: 'correoElectronico', label: 'Correo Electrónico', type: 'email', readOnly: false}, // Cambio aquí
    { name: 'nit', label: 'NIT', type: 'number', readOnly: false },
    { name: 'estado', label: 'Estado', type: 'text', readOnly: false },
    { name: 'direccion', label: 'Dirección', type: 'text', readOnly: false }
  ];


  constructor(private empresaService: EmpresaService) {}

  save(): void {
    if (this.empresa.id) {
      this.empresaService.updateEmpresa(this.empresa.id, this.empresa).subscribe(() => {
        this.onSave.emit();
      });
    } else {
      this.empresaService.createEmpresa(this.empresa).subscribe(() => {
        this.onSave.emit();
      });
    }
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
