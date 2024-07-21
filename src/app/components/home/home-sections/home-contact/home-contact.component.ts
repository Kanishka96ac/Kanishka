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




  // // Replace with your actual EmailJS service ID, template ID, and user ID
  // private serviceId = 'service_2oiytaz'; // Replace with your actual service ID
  // private templateId = 'template_urbaw63'; // Replace with your actual template ID
  // private userId = 'hJWHvxb1h8oMUhjzD'; // Replace with your actual public API key or user ID