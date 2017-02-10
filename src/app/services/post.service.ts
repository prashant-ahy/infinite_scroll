import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class postService {
    constructor(private http: Http){
        console.log("testing");
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/comments').map(res => res.json());
    }
}
