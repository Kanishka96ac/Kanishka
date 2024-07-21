import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: ['Allows users to upload MRI scans for analysis and receive tumour status.'],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 2,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: ['Developed a real-time file monitoring system using React, Express.js, and Node.js.'],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 3,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: ['Developed a smart baggage lock with a tracking system using Arduino and a GSM module.'],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 4,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: ['Utilised Google Place API to display nearby supermarkets based on current location.'],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 5,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 5',
      description: ['Brief description of sample project 5.'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 6,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 6',
      description: ['Brief description of sample project 6.'],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 7,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: ['Allows users to upload MRI scans for analysis and receive tumour status.'],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 8,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: ['Developed a real-time file monitoring system using React, Express.js, and Node.js.'],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 9,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: ['Developed a smart baggage lock with a tracking system using Arduino and a GSM module.'],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 10,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: ['Utilised Google Place API to display nearby supermarkets based on current location.'],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 11,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 5',
      description: ['Brief description of sample project 5.'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 12,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 6',
      description: ['Brief description of sample project 6.'],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 13,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: ['Allows users to upload MRI scans for analysis and receive tumour status.'],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 14,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: ['Developed a real-time file monitoring system using React, Express.js, and Node.js.'],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 15,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: ['Developed a smart baggage lock with a tracking system using Arduino and a GSM module.'],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 16,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: ['Utilised Google Place API to display nearby supermarkets based on current location.'],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 17,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 5',
      description: ['Brief description of sample project 5.'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 18,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 6',
      description: ['Brief description of sample project 6.'],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#'
    }
  ];

  visibleProjects: Project[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  totalPages: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.projects.length / this.itemsPerPage);
    this.updateVisibleProjects();
  }

  updateVisibleProjects(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.visibleProjects = this.projects.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVisibleProjects();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisibleProjects();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateVisibleProjects();
  }

  getPages(): number[] {
    const maxPagesToShow = 3;
    const pages: number[] = [];
    const start = Math.max(0, this.currentPage - Math.floor(maxPagesToShow / 2));
    const end = Math.min(this.totalPages, start + maxPagesToShow);

    for (let i = start; i < end; i++) {
      pages.push(i);
    }
    return pages;
  }

  openProjectDetail(project: Project): void {
    this.router.navigate(['/portfolio', project.id]);
  }
}
