import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public chapter:any = {};
  constructor(	private activatedRoute: ActivatedRoute,
	private router: Router) {}
  
  
   ngOnInit() {
	   
	this.activatedRoute.params.subscribe((params) => {
    console.log('Params: ', params);
	console.log('indivdual ', params.chapter);
	this.chapter=params.chapter;
    });  
	console.log("ourside ",this.chapter);	
	   
	   
	   
	   
	   
  }

}
