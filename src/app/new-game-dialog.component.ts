import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'new-game-dialog',
  template: `
    <p mat-dialog-title>Lancement d'une nouvelle partie</p>
    <div mat-dialog-content>
      <p>
        Le lancement d'une nouvelle partie détruit irrémédiablement les données déjà existantes 
        d'une précédente partie. Êtes-vous sur de vouloir poursuivre ?<br>
        <strong class="mat-error">Cette action est irréversible</strong>
      </p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true" tabindex="2">Oui</button>
      <button mat-button (click)="onNoClick()" tabindex="1">Non</button>
    </div>
  `,
})
export class NewGameDialog {

  constructor(
    public dialogRef: MatDialogRef<NewGameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}