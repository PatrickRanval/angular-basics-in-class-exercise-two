import { Component } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html"
})

export class ArticleComponent {
  title:string = "Purple Love Grass"
  content:string = "Eragrostis pectinacea is a species of grass known by the common name tufted lovegrass. This plant is native to the Americas from Canada to Argentina. It is widespread, growing in most open spaces at varying elevations and habitats, including in disturbed areas and roadsides."
  isTechRelated:boolean = true

  checkTech() {
    return this.isTechRelated === true ? 'blueviolet' : 'yellow';
  }
}
