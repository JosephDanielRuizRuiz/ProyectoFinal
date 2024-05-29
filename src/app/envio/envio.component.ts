import { Component, OnInit, HostBinding } from '@angular/core';
import { Datos } from '../model/datos';
import { DatosService } from '../service/datos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  datos: Datos = {
    id: 0,
    Nombre: "",
    Descripcion: "",
    Tipo: "",
    Precio: "",
    Imagen: ""
  };
  constructor(private datosService: DatosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
  }

  /*
  guardar() {
    delete this.datos.id;
 
      this.datosService.guardar(this.datos)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/paneladmin']);
          },
          err => console.error(err)
        )
    }*/

}
