import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'MC-Management System',
      desc: 'Used to monitor and control customers who use server services of MC-Company',
      livedemo: 'https://mc-management.netlify.app/',
      imgUrl: 'assets/images/mc-management.JPG',
      tech: 'Angular, Bootstrap'
    },
    {
      id: 2,
      title: 'MERN-FLIX TV',
      desc: 'cloned NETFLIX app, for watching Movies and Series',
      livedemo: 'https://jiro-mern-flix.herokuapp.com/',
      imgUrl: 'assets/images/mern-flix.JPG',
      tech: 'React, Node.js, MongoDB, (MERN), JWT, Axios, API, Firebase'
    },
    {
      id: 3,
      title: 'Food Restaurant Landing Page',
      desc: 'Landing Single Page app',
      livedemo: 'https://spontaneous-praline-84d5ef.netlify.app/',
      imgUrl: 'assets/images/food-restaurant-landing-page.JPG',
      tech: 'CSS, HTML'
    },
    {
      id: 4,
      title: 'G-Shock MERN E-Commerce',
      desc: 'web application e-commerce for sales G-Shock Watch',
      livedemo: 'https://gshock-mern-commerce-begin.herokuapp.com/',
      imgUrl: 'assets/images/g-shock-commerce.JPG',
      tech: 'React, Node.js, MongoDB, (MERN), Axios, API'
    },
    {
      id: 5,
      title: 'Angular MEAN CRUD',
      desc: 'Angular MEAN web application CRUD',
      livedemo: 'https://angular-mean-crud.herokuapp.com/',
      imgUrl: 'assets/images/mean-crud.JPG',
      tech: 'Angular, Node.js, MongoDB, (MEAN), API, Bootstrap'
    },
    {
      id: 6,
      title: 'React MERN CRUD',
      desc: 'React MERN web application CRUD',
      livedemo: 'https://react-mern-crud-fix-deploy.herokuapp.com/',
      imgUrl: 'assets/images/mern-crud1.JPG',
      tech: 'React, Node.js, MongoDB, (MERN), Axios, API, Bootstrap'
    },
    {
      id: 7,
      title: 'React MERN CRUD',
      desc: 'React MERN web application CRUD',
      livedemo: 'https://react-mern-crud-fullstack.herokuapp.com/',
      imgUrl: 'assets/images/mern-crud2.JPG',
      tech: 'React, Node.js, MongoDB, (MERN), Axios, API, Bootstrap'
    },
    {
      id: 8,
      title: 'Crypto Tracker',
      desc: 'web for tracking crypto currency movement using coingecko api',
      livedemo: 'https://crypto-tracker-f53e13.netlify.app/',
      imgUrl: 'assets/images/crypto-tracker.JPG',
      tech: 'React, Axios'
    },
    {
      id: 9,
      title: 'CSS Christmas Tree Animation',
      desc: 'Using JavaScript and CSS only',
      livedemo: 'https://css-christmas-tree.netlify.app/',
      imgUrl: 'assets/images/christmas-tree.JPG',
      tech: 'CSS, JavaScript'
    },
    {
      id: 10,
      title: 'CSS Circle Animation',
      desc: 'Using JavaScript and CSS only',
      livedemo: 'https://css-th-circle.netlify.app/',
      imgUrl: 'assets/images/th-circle.JPG',
      tech: 'CSS, JavaScript'
    },
    {
      id: 11,
      title: 'React Multi Pages',
      desc: 'Multi Pages React app',
      livedemo: 'https://react-multipage-9fc498.netlify.app/',
      imgUrl: 'assets/images/react-multi-pages.JPG',
      tech: 'React, Bootstrap, JavaScript'
    },
    {
      id: 12,
      title: 'React Landing Page',
      desc: 'Landing Single Page React app',
      livedemo: 'https://react-landing-page-4ab8b3.netlify.app/',
      imgUrl: 'assets/images/react-landing-page.JPG',
      tech: 'React, Bootstrap, JavaScript'
    },
    {
      id: 13,
      title: 'Bootstrap Landing Page',
      desc: 'Landing Single Page Bootstrap app',
      livedemo: 'https://bootstrap-landing-pages-jiro.netlify.app/',
      imgUrl: 'assets/images/bootstrap-landing-page.JPG',
      tech: 'Bootstrap, JavaScript'
    },

  ]
  about2 = `Have knowledge in Agile Software Development .
  Have knowledge in Angular, React, JavaScript, Node JS, Git, Json and UI with Responsive Designs .
  Have understanding of HTML, CSS, Bootstrap, MongoDB, Firebase, Figma`

  about = "I like to learn new things and I can learn quickly."
  resumeurl = "https://drive.google.com/file/d/1DBO_buza7ied5aH7Mm8nwxn1HtBkaUJu/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'HTML, CSS, JavaScript, TypeScript',
      'progress': '95%'
    },
    {
      'id': '2',
      'skill': 'C#.NET, ASP.NET',
      'progress': '90%'
    },
    {
      'id': '3',
      'skill': 'AngularJS, ReactJS, AngularTS, ReactTS',
      'progress': '90%'
    },
    {
      'id': '4',
      'skill': 'git control and CI/CD (GitLab, Github, Jenkins)',
      'progress': '80%'
    },
    {
      'id': '5',
      'skill': 'SQL and database management (SQL Server, MongoDB)',
      'progress': '85%'
    },
    {
      'id': '6',
      'skill': 'Knowledge of cashing in memory data (Redis)',
      'progress': '75%'
    },
    {
      'id': '7',
      'skill': 'Knowledge of Agile and Scrum methodology',
      'progress': '75%'
    },
    {
      'id': '8',
      'skill': 'Strong time management skills',
      'progress': '95%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2014 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Computer Engineering',
      'province': 'Nakhon Ratchasima',
      'institution': '',
      'info': ``
    },
    {
      'id': '2',
      'from_to_year': '2011 - 2014',
      'education': 'Higher School',
      'stream': 'Science and Mathematics',
      'province': 'Nong khai',
      'institution': '',
      'info': ``
    }
  ];
  exprienceData: any = [

    {
      id: 2,
      company: 'PTT Digital Solution Co.,Ltd',
      timeline: 'March 2021 - Present',
      role: 'Full Stack Developer',
      work: `Conducted rigorous testing and debugging of applications .
      Coordinated with senior programmers to optimize code .
      Improved and Developing web application including Frontend, Backend, database management and .
      Improved and Developing web application including Frontend, Backend, database management and API, and I have been involved in project responsibility in many projects such as Human resource management system, Evaluation system and Expense management system etc.
      `
    },

    {
      id: 1,
      company: 'Handy Wings Co.,Ltd',
      timeline: 'July 2020 - November 2020',
      role: 'Frontend Developer',
      work: `Technologies: Angular, Node JS, Git, Json, Figma .
      Worked on developing and improved the admin dashboard with different charts and insights for the web application built in Angular for different logistics business .
      Worked on training to use software for employees of customer companies .
      Worked on developing the web application for maintaining and managing the usage of software and cloud of customer companies
  `
    },


  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
