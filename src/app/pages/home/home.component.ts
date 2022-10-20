import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page:number=1;
  articles:Article[];
  totalCount:number;
  pageSize:number=5;

  constructor(
    private articleService:ArticleService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
    if (params.get("page")) {

      this.page=Number(params.get("page"));
    }

    this.articles=[];//sayfalama 2.ci 5li boşalat
    this.totalCount=0;

    this.articleService.getArticles(this.page,this.pageSize).subscribe(data=>{
      console.log(data);
      this.articles=data.articles;
      this.totalCount=data.totalCount;
    })



    })
  }

}
