import { Component, ViewChild, ElementRef } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;
  
  successMessage: string = '';
  errorMessage: string = '';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please fill out all required fields with valid information.';
      this.successMessage = '';
      return;
    }

    // Access the form element directly
    const formElement = this.contactForm.nativeElement;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formElement, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        this.successMessage = 'Your message has been sent successfully!';
        this.errorMessage = '';
        form.reset();
      }, (error) => {
        this.errorMessage = 'Failed to send your message. Please try again later.';
        this.successMessage = '';
      });
  }
}