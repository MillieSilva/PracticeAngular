import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PostReadModel} from "../models/posts.models";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string | null = null;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getRecentPosts(): PostReadModel[] {
    return [
      {id: 1, name: "Test post", author: "Redacted"},
      {id: 2, name: "A little apricot grows", author: "Redacted"},
      {id: 3, name: "Lettuces become flowers", author: "Redacted"},
      {id: 4, name: "Growing Coriander", author: "Redacted"},
      {id: 5, name: "Another test post", author: "Redacted"},
    ]

    // return this.http.get<PostReadModel>(this.baseUrl + '/posts/recent');
  }

  getPostById(id: number): PostReadModel {
    // TODO: Fetch from all posts in the server, caching with scope would be ideal but this works for
    //       practice enough, for production another approach may be better

    // TODO: I am also just returning the first filtered item, should be checked if there is at least one
    //       and if there is more than one, maybe it could be an issue to mind
    return this.getRecentPosts().filter(value => value.id == id)[0]
  }
}
