import {Component, OnInit} from '@angular/core';
import {PostReadModel} from "../../models/posts.models";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private postsService: PostsService;
  recentPosts: PostReadModel[] = []

  constructor(private service: PostsService) {
    this.postsService = service;
  }

  ngOnInit() {
    this.recentPosts = this.postsService.getRecentPosts()
  }
}
