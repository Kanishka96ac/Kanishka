import { Component } from '@angular/core';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.css']
})
export class HomeSkillsComponent {
  skillsCategories = [
    {
      category: 'Technical Skills',
      skills: [
        { name: 'Angular', logo: 'https://img.icons8.com/color/60/angularjs.png' },
        { name: 'Java', logo: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
        { name: 'JavaScript', logo: 'https://img.icons8.com/color/60/javascript.png' },
        { name: 'TypeScript', logo: 'https://img.icons8.com/color/60/typescript.png' },
        { name: 'Node.js', logo: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' },
        { name: 'Express.js', logo: 'https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' },
        { name: 'HTML5', logo: 'https://img.icons8.com/color/60/html-5.png' },
        { name: 'CSS3', logo: 'https://img.icons8.com/color/60/css3.png' },
        { name: 'jQuery', logo: 'assets/images/skills-logo/jquery.png' },
        { name: 'Bootstrap', logo: 'https://img.icons8.com/color/60/bootstrap.png' },
        { name: 'Python', logo: 'https://img.icons8.com/color/60/python.png' },
        { name: 'MySQL', logo: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000' },
        { name: 'PostgreSQL', logo: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000' },
        { name: 'MongoDB', logo: 'https://img.icons8.com/color/60/mongodb.png' },
        { name: 'Docker', logo: 'https://img.icons8.com/color/60/docker.png' },
        { name: 'Git', logo: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
        { name: 'GitHub', logo: 'https://img.icons8.com/?size=100&id=g7P0iny5Rros&format=png&color=000000' },
        { name: 'AWS', logo: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' },
        { name: 'Jira', logo: 'https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000' },
        { name: 'Postman', logo: 'assets/images/skills-logo/Postman.png' }
      ]
    }
  ];
}
