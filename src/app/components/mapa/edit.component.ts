import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formulario: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.formulario = formBuilder.group({
        titulo: data.titulo,
        descripcion: data.descripcion
      });
    }


  ngOnInit() {
  }

  modificar() {
    this.dialogRef.close(this.formulario.value);
  }
  cancelar() {
    this.dialogRef.close();
  }
}
