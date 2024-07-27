import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Project {
  id: number;
  name: string;
  description: string[];
  thumbnail: string;
  tags: string[];
  demoLink: string;
  moreLink: string;
}

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
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
      description: ['A real-time file monitoring system using React, Express.js, and Node.js',
        'Users securely add files to a designated location on their device, automatically encrypting and saving them to cloud storage',
        'Decryption requires current authentication, verified based on file confidential levels determined by sentimental keyword analysis using a machine learning model',
        'Enhances organisational security by over 75% and provides comprehensive file system tracking'
      ],
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
      description: ['Allows users to upload MRI scans for analysis and receive tumour status',
        'Targeted users include brain tumour patients and medical professionals (surgeons and doctors)',
        'Allows users to upload MRI scans for analysis and receive tumour status',
        'Utilises SVM binary classification to determine the presence of a brain tumour with 98.28% accuracy',
        'Employs CNN algorithm to verify the SVM decision and, if a tumour is detected, classify the tumour type with 90.81% accuracy',
        'This two-phase checking method increases surgeons\' confidence levels by over 80%, providing accurate decisions to support their final conclusions',
        'Ongoing improvements aim to further enhance the system\'s accuracy and reliability'
      ],
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
      description: ['A user-friendly app designed to help users find nearby supermarkets quickly and easily',
        'Utilised Google Place API to display nearby supermarkets based on current location, increasing search efficiency by 50%',
        'Implemented direction and duration functions with Google Direction API, boosting user efficiency by 75% and saving time',
        'Implemented the Locator App using Android Studio and Java, with API handling and testing performed via Postman, and version control maintained through Git'
      ],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#'
    },
    {
      id: 10,
      thumbnail: 'assets/images/project-thumbnails/lock.png',
      name: 'Smart Lock for Baggage',
      description: ['A smart baggage lock with a tracking system using Arduino and a GSM module.',
        'Utilise Google Place API to obtain and save the baggage\'s real-time latitude and longitude on a PHP server',
        'Designed to detect unauthorised access and send the baggage location to a mobile application',
        'This innovative project significantly enhances baggage security and tracking capabilities'
      ],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find((p) => p.id === id);
    if (this.project) {
      document.body.classList.add('modal-open');
      const footer = document.querySelector('footer');
      if (footer) {
        footer.classList.add('hidden');
      }
    }
  }

  onClose(): void {
    document.body.classList.remove('modal-open');
    const footer = document.querySelector('footer');
    if (footer) {
      footer.classList.remove('hidden');
    }
    this.router.navigate(['/portfolio']);
  }
}
