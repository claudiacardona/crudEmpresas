import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any[] = [];
  selectedEmpresa: any = null;
  isEditing: boolean = false;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(): void {
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  addEmpresa(): void {
    this.isEditing = true;
    this.selectedEmpresa = {};
  }

  editEmpresa(empresa: any): void {
    this.isEditing = true;
    this.selectedEmpresa = { ...empresa };
  }

  saveEmpresa(): void {
    this.loadEmpresas();
    this.selectedEmpresa = null;
    this.isEditing = false;
  }

  deleteEmpresa(id: number): void {
    this.empresaService.deleteEmpresa(id).subscribe(() => {
      this.loadEmpresas();
    });
  }

  cancel(): void {
    this.selectedEmpresa = null;
    this.isEditing = false;
  }

}

