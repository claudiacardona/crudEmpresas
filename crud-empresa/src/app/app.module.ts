import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaService } from './service/empresa.service';
import { EmpresaFormComponent } from './empresas-form/empresas-form.component';

@NgModule({
  declarations: [AppComponent, EmpresasComponent, EmpresaFormComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule {}

