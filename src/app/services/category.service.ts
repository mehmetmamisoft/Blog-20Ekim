import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //netcore api getir
  private apiUrl: string = "https://localhost:44301/api/categories";


  constructor(
    private httpClient: HttpClient
  ) { }

  //method api
  public getCategories() {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  public getCategorybyId(id:number){

    //let burdan var heryerden eriş
    //let url=this.apiUrl+ "/" +id;
    //backtick string  birleştir yanyana
    let url=`${this.apiUrl}/${id}`;
    return this.httpClient.get<Category>(url);


  }
}

