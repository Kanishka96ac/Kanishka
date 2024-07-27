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
      thumbnail: 'assets/images/project-thumbnails/kanishka-dp.png',
      name: 'Portfolio - Kanishka',
      description: ['Welcome to my portfolio site, an Angular-based showcase of my latest projects and professional achievements'],
      tags: ['Angular', 'HTML5', 'CSS', 'TypeScript', 'JavaScript'],
      demoLink: 'https://kanishka96ac.github.io/Kanishka/',
      moreLink: '#'
    },
    
    {
      id: 2,
      thumbnail: 'assets/images/project-thumbnails/proteger.png',
      name: 'File Monitoring System for PROTEGER',
      description: ['A real-time file monitoring system using React, Express.js, and Node.js'],
      tags: ['React', 'Express.js', 'Node.js','HTML5', 'CSS', 'Java'],
      demoLink: 'https://kanishka96ac.github.io/proteger-web/',
      moreLink: '#'
    },
    {
      id: 3,
      thumbnail: 'assets/images/project-thumbnails/quick-qr.png',
      name: 'Quick QR',
      description: ['Quick QR, a versatile QR code generator app built with Node.js, designed to create custom QR codes quickly and efficiently for all your needs'],
      tags: ['Node.js', 'JavaScript', 'HTML5', 'CSS'],
      demoLink: 'http://16.16.220.221:3000/',
      moreLink: '#'
    },
    {
      id: 4,
      thumbnail: 'assets/images/project-thumbnails/btumor.jpeg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: ['Allows users to upload MRI scans for analysis and receive tumour status'],
      tags: ['Python', 'Data Science', 'SVM', 'CNN', 'Flask', 'JavaScript'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 5,
      thumbnail: 'assets/images/project-thumbnails/solot.png',
      name: 'Solo Traveler',
      description: ['Solo Traveler: a travel destination website built with HTML5 and JavaScript for solo adventurers'],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: 'https://solo-traveler.s3.eu-north-1.amazonaws.com/index.html',
      moreLink: '#'
    },
    {
      id: 6,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Drum Kit',
      description: ['DrumKit: a virtual drum kit application that lets you create music with just a few clicks'],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: 'https://kanishka96ac.github.io/DrumKit/',
      moreLink: '#'
    },
    {
      id: 7,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Dicee Challlenge Game',
      description: ['Dicee Challenge Game: a fun, interactive dice game that brings excitement and competition to your fingertips'],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: 'https://kanishka96ac.github.io/Dicee_Challenge/',
      moreLink: '#'
    },
    {
      id: 8,
      thumbnail: 'assets/images/project-thumbnails/olive.png',
      name: 'Olive Oil Store',
      description: ['A Vue.js-powered online ecommerce store specialising in premium olive oils'],
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'HTML5', 'CSS3', 'Firebase'],
      demoLink: 'https://olive-v4ef.onrender.com/products',
      moreLink: '#'
    },
    {
      id: 9,
      thumbnail: 'assets/images/project-thumbnails/supermarket.jpeg',
      name: 'Supermarket Locator',
      description: ['A user-friendly app designed to help users find nearby supermarkets quickly and easily'],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 10,
      thumbnail: 'assets/images/project-thumbnails/lock.png',
      name: 'Smart Lock for Baggage',
      description: ['A smart baggage lock with a tracking system using Arduino and a GSM module.'],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
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
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.setVisibleProjects(1); // Show one project at a time for mobile view
    } else {
      this.setVisibleProjects(3); // Show three projects at a time for larger screens
    }
  }

  setVisibleProjects(count = 3) {
    this.visibleProjects = this.projects.slice(this.currentIndex, this.currentIndex + count);
    if (this.visibleProjects.length < count) {
      this.visibleProjects = [...this.visibleProjects, ...this.projects.slice(0, count - this.visibleProjects.length)];
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.handleResize();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.handleResize();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000); // Change the interval time as needed
  }

  openProjectDetail(project: Project): void {
    this.router.navigate(['/portfolio', project.id]);
  }
}
