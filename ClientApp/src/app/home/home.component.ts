import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [
    {id: 1, name: "Test post", author: "Millie"},
    {id: 2, name: "A little apricot grows", author: "Millie"},
    {id: 3, name: "Lettuces become flowers", author: "Millie"},
    {id: 4, name: "Growing Coriander", author: "Millie"},
    {id: 5, name: "Another test post", author: "Millie"},
  ]

  ngOnInit() {
    // TODO: Initialize with fetched data
  }
}

interface Post {
  id: number,
  name: string,
  author: string
}
