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
      title: 'G-Shock MERN E-Commerce',
      desc: 'web application e-commerce for sales G-Shock Watch',
      livedemo: 'https://gshock-mern-commerce-begin.herokuapp.com/',
      imgUrl: 'assets/images/g-shock-commerce.JPG',
      tech: 'React, Node.js, MongoDB, (MERN), Axios, API'
    },
    {
      id: 4,
      title: 'Angular MEAN CRUD',
      desc: 'Angular MEAN web application CRUD',
      livedemo: 'https://angular-mean-crud.herokuapp.com/',
      imgUrl: 'assets/images/mean-crud.JPG',
      tech: 'Angular, Node.js, MongoDB, (MEAN), API, Bootstrap'
    },
    {
      id: 5,
      title: 'React MERN CRUD',
      desc: 'React MERN web application CRUD',
      livedemo: 'https://react-mern-crud-fix-deploy.herokuapp.com/',
      imgUrl: 'assets/images/mern-crud1.JPG',
      tech: 'React, Node.js, MongoDB, (MERN), Axios, API, Bootstrap'
    },
    {
      id: 6,
      title: 'React MERN CRUD',
      desc: 'React MERN web application CRUD',
      livedemo: 'https://react-mern-crud-fullstack.herokuapp.com/',
      imgUrl: 'assets/images/mern-crud2.JPG',
      tech: 'React, Node.js, MongoDB, (MERN), Axios, API, Bootstrap'
    },
    {
      id: 7,
      title: 'Crypto Tracker',
      desc: 'web for tracking crypto currency movement using coingecko api',
      livedemo: 'https://crypto-tracker-f53e13.netlify.app/',
      imgUrl: 'assets/images/crypto-tracker.JPG',
      tech: 'React, Axios'
    },
    {
      id: 7,
      title: 'CSS Christmas Tree Animation',
      desc: 'Using JavaScript and CSS only',
      livedemo: 'https://css-christmas-tree.netlify.app/',
      imgUrl: 'assets/images/christmas-tree.JPG',
      tech: 'CSS, JavaScript'
    },
    {
      id: 8,
      title: 'CSS Circle Animation',
      desc: 'Using JavaScript and CSS only',
      livedemo: 'https://css-th-circle.netlify.app/',
      imgUrl: 'assets/images/th-circle.JPG',
      tech: 'CSS, JavaScript'
    },
    {
      id: 8,
      title: 'React Multi Pages',
      desc: 'Multi Pages React app',
      livedemo: 'https://react-multipage-9fc498.netlify.app/',
      imgUrl: 'assets/images/react-multi-pages.JPG',
      tech: 'React, Bootstrap, JavaScript'
    },
    {
      id: 8,
      title: 'React Landing Page',
      desc: 'Landing Single Page React app',
      livedemo: 'https://react-landing-page-4ab8b3.netlify.app/',
      imgUrl: 'assets/images/react-landing-page.JPG',
      tech: 'React, Bootstrap, JavaScript'
    },
    {
      id: 8,
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
  resumeurl = "https://drive.google.com/file/d/1QgryZw6EyvaqkkowcXcdAbs3tXHK9EQo/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '75%'
    },
    {
      'id': '2',
      'skill': 'REACT',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '75%'
    },
    {
      'id': '4',
      'skill': 'MONGODB, FIREBASE',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'NODE JS, JSON, GIT',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'HTML, CSS, BOOTSTRAP, FIGMA',
      'progress': '75%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2014 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Computer Engineering',
      'province': 'Nakhon Ratchasima',
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`
    },
    {
      'id': '2',
      'from_to_year': '2011 - 2014',
      'education': 'Higher School',
      'stream': 'Science and Mathematics',
      'province': 'Nong khai',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    }
  ];
  exprienceData: any = [

    {
      id: 2,
      company: 'Studying and writing code almost every day',
      timeline: 'Present',
      role: '',
      work: ''
    },

    {
      id: 1,
      company: 'HandyWings Co.,Ltd',
      timeline: 'July 2020 - November 2020',
      role: 'Frontend (Angular)',
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
