// home-intro-text.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-intro-text',
  templateUrl: './home-intro-text.component.html',
  styleUrls: ['./home-intro-text.component.css']
})
export class HomeIntroTextComponent {

  // Specify the file path for the CV
  private cvPath: string = 'assets/cv/SE-Kanishka.docx'; // Path to the correct location of the CV

  downloadCV() {
    const link = document.createElement('a');
    link.href = this.cvPath;

    // Determine the file type from the file extension
    const fileExtension = this.cvPath.split('.').pop();
    if (fileExtension === 'pdf') {
      link.download = 'Kanishka_SE_CV.pdf';
    } else if (fileExtension === 'docx') {
      link.download = 'Kanishka_SE_CV.docx';
    }

    link.click();
  }
}
