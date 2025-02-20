import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseData } from "../shared/types/responData";
import { blockItem, productItem } from "../shared/types/productItem";


@Injectable({ providedIn: 'root' })
export class BlogService {
	constructor(private http: HttpClient) {

	}

	getBlogs():Observable<ResponseData<productItem[]>> {
		return this.http
			.get<any>("https://ninedev-api.vercel.app/blogs")
	}
	
	detailBlogs(id:number):Observable<ResponseData<productItem>>{
		return this.http
		.get<any>("https://ninedev-api.vercel.app/blogs/${id}")
	}
	
	postBlogs(blockItem : blockItem):Observable<ResponseData<productItem>>{
		return this.http
		.post<any>("https://ninedev-api.vercel.app/blogs" , blockItem)
	}
	
	deleteBlogs(id:number):Observable<ResponseData<productItem>>{
		return this.http
		.delete<any>("https://ninedev-api.vercel.app/blogs/${id}")
	}

}