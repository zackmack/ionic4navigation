import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-next',
  templateUrl: './next.page.html',
  styleUrls: ['./next.page.scss'],
})
export class NextPage implements OnInit {
public chapter:any = {};
  constructor(	private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	  
	  this.activatedRoute.params.subscribe((params) => {
    console.log('Params: ', params);
	console.log('indivdual ', params.chapter);
	this.chapter=params.chapter;
    });  
	console.log("ourside ",this.chapter);	
	  
  }

}
