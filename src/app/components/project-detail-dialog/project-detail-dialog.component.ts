import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface Project {
  name: string;
  description: string;
  thumbnail: string;
  tags: string[];
  demoLink: string;
  moreLink: string;
}

@Component({
  selector: 'app-project-detail-dialog',
  templateUrl: './project-detail-dialog.component.html',
  styleUrls: ['./project-detail-dialog.component.css']
})
export class ProjectDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
