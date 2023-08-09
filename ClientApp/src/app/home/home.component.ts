import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: PostRM[] = [
    {id: 1, name: "Test post", author: "Redacted"},
    {id: 2, name: "A little apricot grows", author: "Redacted"},
    {id: 3, name: "Lettuces become flowers", author: "Redacted"},
    {id: 4, name: "Growing Coriander", author: "Redacted"},
    {id: 5, name: "Another test post", author: "Redacted"},
  ]

  ngOnInit() {
    // TODO: Initialize with fetched data
  }
}

export interface PostRM {
  id: number,
  name: string,
  author: string
}
