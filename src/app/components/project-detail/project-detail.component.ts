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
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: [
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
      ],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 2,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: [
        'Developed a real-time file monitoring system using React, Express.js, and Node.js. This system continuously monitors file changes, logs activities, and alerts users of any unauthorized access. It also provides a comprehensive dashboard for managing and reviewing file activities.',
      ],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 3,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: [
        'Developed a smart baggage lock with a tracking system using Arduino and a GSM module. This project includes real-time location tracking, remote lock/unlock features, and an alarm system. Users can track their baggage from anywhere in the world using a mobile app.',
      ],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 4,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: [
        'Utilised Google Place API to display nearby supermarkets based on current location. This application provides real-time navigation, distance calculations, and store details. It helps users find the nearest supermarkets quickly and efficiently.',
      ],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 5,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 5',
      description: [
        'Brief description of sample project 5. This project includes various web development techniques using HTML, CSS, and JavaScript to create an interactive user experience.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 6,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 6',
      description: [
        'Brief description of sample project 6. This project involves building a machine learning model using Python and Django to predict user behavior based on historical data.',
      ],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 7,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: [
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
      ],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 8,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: [
        'Developed a real-time file monitoring system using React, Express.js, and Node.js. This system continuously monitors file changes, logs activities, and alerts users of any unauthorized access. It also provides a comprehensive dashboard for managing and reviewing file activities.',
      ],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 9,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: [
        'Developed a smart baggage lock with a tracking system using Arduino and a GSM module. This project includes real-time location tracking, remote lock/unlock features, and an alarm system. Users can track their baggage from anywhere in the world using a mobile app.',
      ],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 10,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: [
        'Utilised Google Place API to display nearby supermarkets based on current location. This application provides real-time navigation, distance calculations, and store details. It helps users find the nearest supermarkets quickly and efficiently.',
      ],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 11,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 5',
      description: [
        'Brief description of sample project 5. This project includes various web development techniques using HTML, CSS, and JavaScript to create an interactive user experience.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 12,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 6',
      description: [
        'Brief description of sample project 6. This project involves building a machine learning model using Python and Django to predict user behavior based on historical data.',
      ],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 13,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Classification Brain Tumour Using Data Science Techniques',
      description: [
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
        'Allows users to upload MRI scans for analysis and receive tumour status. This project involves advanced data science techniques such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN). Detailed analysis and classification reports are generated for each MRI scan uploaded by the user, helping medical professionals in their diagnosis.',
      ],
      tags: ['Python', 'Data Science', 'SVM', 'CNN'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 14,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'File Monitoring System for PROTEGER',
      description: [
        'Developed a real-time file monitoring system using React, Express.js, and Node.js. This system continuously monitors file changes, logs activities, and alerts users of any unauthorized access. It also provides a comprehensive dashboard for managing and reviewing file activities.',
      ],
      tags: ['React', 'Express.js', 'Node.js'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 15,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Smart Lock for Baggage',
      description: [
        'Developed a smart baggage lock with a tracking system using Arduino and a GSM module. This project includes real-time location tracking, remote lock/unlock features, and an alarm system. Users can track their baggage from anywhere in the world using a mobile app.',
      ],
      tags: ['Arduino', 'GSM Module', 'Google Place API', 'PHP'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 16,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Supermarket Locator',
      description: [
        'Utilised Google Place API to display nearby supermarkets based on current location. This application provides real-time navigation, distance calculations, and store details. It helps users find the nearest supermarkets quickly and efficiently.',
      ],
      tags: ['Android Studio', 'Java', 'Google Place API', 'Postman'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 17,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 5',
      description: [
        'Brief description of sample project 5. This project includes various web development techniques using HTML, CSS, and JavaScript to create an interactive user experience.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      moreLink: '#',
    },
    {
      id: 18,
      thumbnail: 'assets/images/project-thumbnails/project1.jpg',
      name: 'Sample Project 6',
      description: [
        'Brief description of sample project 6. This project involves building a machine learning model using Python and Django to predict user behavior based on historical data.',
      ],
      tags: ['Python', 'Django', 'Machine Learning'],
      demoLink: '#',
      moreLink: '#',
    },
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
