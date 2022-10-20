import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  //ilk boş dizin gelsun!
  categories:Category[]=[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    //geriye observer body dönüyor
    //abonelik şart data ve hata döneyor
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

}
