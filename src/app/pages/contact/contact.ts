import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  emailCopied = false;

  copyEmail() {
    const email = 'akhilpattazhy1998@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.emailCopied = true;
      setTimeout(() => {
        this.emailCopied = false;
      }, 2000);
    });
  }
}
