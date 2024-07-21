import { Component, OnInit } from '@angular/core';

interface Academic {
  institution: string;
  logo: string;
  degree: string;
  duration: string;
  grade: string;
  details: string;
}

@Component({
  selector: 'app-home-academic',
  templateUrl: './home-academic.component.html',
  styleUrls: ['./home-academic.component.css']
})
export class HomeAcademicComponent implements OnInit {
  academics: Academic[] = [
    {
      institution: 'York St John University',
      logo: '../../../assets/images/academic-logo/ysj-logo.png',
      degree: 'MS, Computer Science',
      duration: 'Jan 2023 - Mar 2024',
      grade: 'Merit Award',
      details: 'Specialised in Machine Learning, Cloud Computing, Agile & Scrum methodologies, Ontology Design. Proficient in Python, UI/UX design (Figma)'
    },
    {
      institution: 'Sheffield Hallam University',
      logo: '../../../assets/images/academic-logo/shu.jpg',
      degree: 'BEng (Hons) in Software Engineering',
      duration: 'Feb 2016 - Oct 2018',
      grade: '2.1',
      details: 'Studied and experienced Java, JavaScript, HTML, CSS, Angular, OOP Concepts, Data Structures and Algorithms, Oracle Database, DBMS, Case Studies in Software development, Cloud Computing, Normalisation, UML Diagrams, and Software Methodologies.'
    },
    {
      institution: 'University of Kelaniya',
      logo: '../../../assets/images/academic-logo/uok-logo.png',
      degree: 'BSc in Physical Science',
      duration: 'Mar 2017 - Feb 2020',
      grade: 'Pass',
      details: 'Selected modules: Specialised in Pure Mathematics, Applied Mathematics, and Physics'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
