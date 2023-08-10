import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostReadModel} from "../../models/posts.models";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: PostReadModel | null = null;

  constructor(private route: ActivatedRoute, service: PostsService) {
    this.route.paramMap.subscribe({
        next: (param) => {
          let id = param.get('id')

          if (!id) {
            // TODO: Warning about this could be necessary
            return
          }

          const postId = Number(param.get('id'));

          if (isNaN(postId)) {
            // TODO: Warning about this could be necessary
            return
          }

          this.post = service.getPostById(postId)
        }
    })
  }
}

