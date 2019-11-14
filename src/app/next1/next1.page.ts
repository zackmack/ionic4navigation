import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-next1',
  templateUrl: './next1.page.html',
  styleUrls: ['./next1.page.scss'],
})
export class Next1Page implements OnInit {
public chapter:any = {};
  constructor( private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	  
	   this.activatedRoute.params.subscribe((params) => {
    console.log('Params: ', params);
	console.log('indivdual ', params.chapter);
	this.chapter=params.chapter;
    });  
	console.log("ourside ",this.chapter);
	  
	  
	  
	  
  }

}
