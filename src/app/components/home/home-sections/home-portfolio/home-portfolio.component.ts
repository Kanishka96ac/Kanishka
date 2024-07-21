import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  id: number;
  name: string;
  description: string[];
  thumbnail: string;
  tags: string[];
  demoLink: string;
  moreLink: string;
}

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.css']
})
export class HomePortfolioComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      id: 1,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: ['Allows users to upload MRI scans for analysis and receive tumour status.'],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 2,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: ['Developed a real-time file monitoring system using React, Express.js, and Node.js.'],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 3,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: ['Developed a smart baggage lock with a tracking system using Arduino and a GSM module.'],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 4,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: ['Utilised Google Place API to display nearby supermarkets based on current location.'],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 5,
      thumbnail: 'path/to/thumbnail5.jpg',
      name: 'Sample Project 5',
      description: ['Brief description of sample project 5.'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 6,
      thumbnail: 'path/to/thumbnail6.jpg',
      name: 'Sample Project 6',
      description: ['Brief description of sample project 6.'],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 7,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: ['Allows users to upload MRI scans for analysis and receive tumour status.'],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 8,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: ['Developed a real-time file monitoring system using React, Express.js, and Node.js.'],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 9,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: ['Developed a smart baggage lock with a tracking system using Arduino and a GSM module.'],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 10,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: ['Utilised Google Place API to display nearby supermarkets based on current location.'],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 11,
      thumbnail: 'path/to/thumbnail5.jpg',
      name: 'Sample Project 5',
      description: ['Brief description of sample project 5.'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 12,
      thumbnail: 'path/to/thumbnail6.jpg',
      name: 'Sample Project 6',
      description: ['Brief description of sample project 6.'],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 13,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: ['Allows users to upload MRI scans for analysis and receive tumour status.'],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 14,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: ['Developed a real-time file monitoring system using React, Express.js, and Node.js.'],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 15,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: ['Developed a smart baggage lock with a tracking system using Arduino and a GSM module.'],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 16,
      thumbnail: '../../../../../assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: ['Utilised Google Place API to display nearby supermarkets based on current location.'],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 17,
      thumbnail: 'path/to/thumbnail5.jpg',
      name: 'Sample Project 5',
      description: ['Brief description of sample project 5.'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 18,
      thumbnail: 'path/to/thumbnail6.jpg',
      name: 'Sample Project 6',
      description: ['Brief description of sample project 6.'],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#'
    }
  ];
  
  visibleProjects: Project[] = [];
  currentIndex = 0;
  intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setVisibleProjects();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setVisibleProjects() {
    this.visibleProjects = this.projects.slice(this.currentIndex, this.currentIndex + 3);
    if (this.visibleProjects.length < 3) {
      this.visibleProjects = [...this.visibleProjects, ...this.projects.slice(0, 3 - this.visibleProjects.length)];
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.setVisibleProjects();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.setVisibleProjects();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change the interval time as needed
  }

  openProjectDetail(project: Project): void {
    this.router.navigate(['/portfolio', project.id]);
  }
}
