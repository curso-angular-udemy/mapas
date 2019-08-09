import { Component, OnInit } from '@angular/core';
import { Marcador } from '../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditComponent } from './edit.component';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  initalLat = 40.0358741;
  initialLng = -3.6100937;
  marcadores: Marcador[] = [];

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.cargarStorage();
  }

  agregarMarcador(evt) {
    let nuevoMarcador = new Marcador(evt.coords.lat, evt.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
  }

  editar(marcador) {
      const dialogRef = this.dialog.open(EditComponent, {
        width: '250px',
        data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        marcador.titulo = result.titulo;
        marcador.descripcion = result.descripcion;
        this.guardarStorage();
        this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });
      });
  }

  eliminar(index) {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 3000 });

  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  cargarStorage() {
    this.marcadores = JSON.parse(localStorage.getItem('marcadores')) || [];
  }

}
