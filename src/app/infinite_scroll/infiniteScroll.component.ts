import { Component } from '@angular/core';
import { postService} from '../services/post.service'
@Component({
  selector: 'infiniteScroll',
  templateUrl: './infiniteScroll.component.html',
  styleUrls: ['./infiniteScroll.component.css'] ,
  providers: [postService]

})
export class InfiniteScrollComponent {
  title: string;
  posts: post[];
  postsToShow = [];
  totalToShow = 20;
  start = 0;
  constructor(private postService: postService){
    this.title = 'sachin Toke';
    this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
        this.showPosts();
    });
  }

  showPosts(){
      for (let i = this.start; i < this.totalToShow; ++i) {
            this.postsToShow.push(this.posts[i]);
            //console.log(this.postsToShow);
       }
  }

  onScrollDown(){
   if(this.totalToShow >= this.posts.length){
        return;
    }
    this.start = this.totalToShow;
    this.totalToShow += 20;
    this.showPosts();
  }
}

interface post{
     post_id: string;
     id: string;
     name: string;
     email: string;
     body: string;
}
