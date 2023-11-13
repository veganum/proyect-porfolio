import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getDataProyects() {
    const data = [
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "/assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },
      { "title": "Titulo", "technology": [{ "tec": "Javascript", "imgTec": "assets/img/js-img.gif" }, { "tec": "Java", "imgTec": "/assets/img/java-img.gif" }, { "tec": "Sql", "imgTec": "/assets/img/sql-img.png" }], "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam", "img": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" },

    ]

    return data
  }

}
