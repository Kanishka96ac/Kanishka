import { Component, OnInit } from '@angular/core';

interface Experience {
  company: string;
  logo: string;
  location: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'DFN Technology (PVT) LTD',
      logo: '../../../assets/images/company-logo/dfn.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Full-Stack Software Engineer',
      period: 'Apr 2022 - Nov 2022',
      description: 'Leading provider of innovative financial technology solutions, specializing in capital market data and services for over 20 years.',
      achievements: [
        'Contributed to DFN NTP Admin Terminal for stock exchange broker platforms.',
        'Enhanced Brokerage Management Solution using Angular, TypeScript, Java, Spring Boot.',
        'Improved system performance by 30% with advanced Angular concepts.',
        'Achieved a 40% reduction in bug resolution time using Scrum methodology.',
        'Increased application reliability and uptime by 20% through effective dependency management.'
      ]
    },
    {
      company: 'HCL Technologies Lanka',
      logo: '../../../assets/images/company-logo/hcl.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Software Engineer',
      period: 'Jun 2021 - Apr 2022',
      description: 'Global technology leader with 227,000+ employees across 60 countries, delivering cutting-edge digital, engineering, cloud, and AI solutions.',
      achievements: [
        'Developed and maintained applications using Java, Spring Boot, Angular, JavaScript.',
        'Achieved a 25% reduction in bug resolution time by enhancing web development skills.'
      ]
    },
    {
      company: 'SQUARECLE TECH (PVT) LTD',
      logo: '../../../assets/images/company-logo/squ.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Software Engineer Internship',
      period: 'Jul 2020 - Jan 2021',
      description: '',
      achievements: [
        'Contributed to modern applications using Angular, TypeScript, JavaScript.',
        'Developed a user-friendly Angular application for Green-Care Electric.'
      ]
    },
    {
      company: 'Delux Holidays',
      logo: '../../../assets/images/company-logo/delux.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Web Developer - Trainee',
      period: 'Mar 2019 - Sep 2019',
      description: '',
      achievements: [
        'Enhanced the company website for improved user experience using HTML, CSS, JavaScript.'
      ]
    },
    {
      company: 'Fiverr',
      logo: '../../../assets/images/company-logo/fiverr.png',
      location: 'Online',
      position: 'Freelancer',
      period: '2018',
      description: '',
      achievements: [
        'Provided freelance services for various web development projects.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
