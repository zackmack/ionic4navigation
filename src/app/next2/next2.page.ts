import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-next2',
  templateUrl: './next2.page.html',
  styleUrls: ['./next2.page.scss'],
})
export class Next2Page implements OnInit {
	public chapter:any = {};
	

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	this.activatedRoute.params.subscribe((params) => {
   	this.chapter=params.chapter;
	 console.log('inside param ',this.chapter);
    });  
	console.log("outside params",this.chapter); 
	}

}
