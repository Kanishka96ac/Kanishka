import { Component, OnInit } from '@angular/core';

interface Experience {
  company: string;
  logo: string;
  location: string;
  position: string;
  duration: string;
  profile?: string;
  achievements: string[];
}

@Component({
  selector: 'app-home-experience',
  templateUrl: './home-experience.component.html',
  styleUrls: ['./home-experience.component.css']
})
export class HomeExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'DFN Technology',
      logo: 'assets/images/company-logo/dfn.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Software Engineer',
      duration: 'Apr 2022 - Nov 2022',
      profile: 'Leading provider of innovative financial technology solutions, specializing in...',
      achievements: [
        'Collaborated with Indonesian and Colombo development teams to enhance DirectFN\'s Brokerage Management Solution.'
      ]
    },
    {
      company: 'HCL Technologies',
      logo: 'assets/images/company-logo/hcl.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Software Engineer',
      duration: 'Jun 2021 - Apr 2022',
      profile: 'Global technology leader with 227,000+ employees across 60 countries, delivering...',
      achievements: [
        'Developed and maintained applications using Java, Spring Boot, Angular, JavaScript, MySQL, HTML5, and Git.'
      ]
    },
    {
      company: 'Squarecle Tech',
      logo: 'assets/images/company-logo/squ.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Internship',
      duration: 'Jul 2020 - Jan 2021',
      profile: 'provider of top-notch, innovative IT solutions to meet complex requirements, ensuring high...',
      achievements: [
        'Contributed to modern, user-friendly applications using Angular, TypeScript, JavaScript.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
