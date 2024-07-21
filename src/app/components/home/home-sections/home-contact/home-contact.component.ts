import { Component, ViewChild, ElementRef } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css']
})
export class HomeContactComponent {
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

    emailjs.sendForm('service_2oiytaz', 'template_urbaw63', formElement, 'hJWHvxb1h8oMUhjzD')
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