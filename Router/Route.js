export default class Route { constructor(url, title, pathHtml, autorize ,pathJS = "") {
     this.url = url;
     this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.autorize = autorize;
    }
}