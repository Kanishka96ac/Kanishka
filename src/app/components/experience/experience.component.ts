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
      logo: 'assets/images/company-logo/dfn.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Full-Stack Software Engineer',
      period: 'Apr 2022 - Nov 2022',
      description: 'Leading provider of innovative financial technology solutions, specializing in capital market data and services for over 20 years.',
      achievements: [
        'Contributed to DFN NTP Admin Terminal for stock exchange broker platforms',
        'Enhanced Brokerage Management Solution using Angular, TypeScript, Java, Spring Boot',
        'Improved system performance by 30% with advanced Angular concepts',
        'Achieved a 40% reduction in bug resolution time using Scrum methodology',
        'Increased application reliability and uptime by 20% through effective dependency management'
      ]
    },
    {
      company: 'HCL Technologies Lanka',
      logo: 'assets/images/company-logo/hcl.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Software Engineer',
      period: 'Jun 2021 - Apr 2022',
      description: 'Global technology leader with 227,000+ employees across 60 countries, delivering cutting-edge digital, engineering, cloud, and AI solutions',
      achievements: [
        'Developed and maintained applications using Java, Spring Boot, JavaScript and MySQL through professional industrial training',
        'Engaged in Java on-job support and bug fixing tasks, solidifying proficiency in Java development',
        'Acquired insights into OOP concepts, Git, DBMS, and software methodologies, enhancing capabilities as a software engineer',
        'Achieved a 25% reduction in bug resolution time by enhancing web development skills',  
      ]
    },
    {
      company: 'SQUARECLE TECH (PVT) LTD',
      logo: 'assets/images/company-logo/squ.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Software Engineer - Internship',
      period: 'Jul 2020 - Jan 2021',
      description: '',
      achievements: [
        'Contributed to the implementation of modern applications using Angular, TypeScript, and Firebase technologies',
        'I played a key role in developing a cutting-edge Angular application for Green-Care Electric',
        'Integrate advanced features such as Angular routings, services, and state management using NgRx and Material components',
        'Efficient collaboration and codebase management were ensured by leveraging version control systems like GitHub and GitLab'
      ]
    },
    {
      company: 'Delux Holidays',
      logo: 'assets/images/company-logo/delux.jpg',
      location: 'Colombo, Sri Lanka',
      position: 'Web Developer - Trainee',
      period: 'Mar 2019 - Sep 2019',
      description: '',
      achievements: [
        'Enhanced the company website for improved user experience using HTML, CSS, JavaScript',
        'Crafted engaging content and designs tailored to client specifications, consistently meeting project requirements for attractiveness and functionality'
      ]
    },
    {
      company: 'Fiverr',
      logo: 'assets/images/company-logo/fiverr.png',
      location: 'Remote',
      position: 'Freelancer',
      period: '2018',
      description: '',
      achievements: [
        'Developed tailored applications and scripts for diverse clients, demonstrating strong problem-solving skills and the ability to meet specific project requirements efficiently',
        'Achieved a 5-star rating across multiple projects by consistently exceeding client expectations, delivering quality work on time, and effectively communicating throughout the project lifecycle',
        'Applied advanced knowledge in Angular, Java, JavaScript web development, Machine Learning, SQL, DBMS, etc., to complete complex tasks, build functional prototypes, and solve technical challenges for clients from various industries.',
        'Created comprehensive technical research documents and guides, assisting clients in understanding and implementing new technologies or processes, thereby adding significant value to their projects.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
