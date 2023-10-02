import { Component } from '@angular/core';
import { CatsApiService } from '../service/api-cats.service';
import { CatsInformation } from '../interface/cat-interface';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataCompleteds :CatsInformation[] = [];

  constructor(
    private apiCatsService: CatsApiService,
  ) {}

  ngOnInit(){
    this.Apicats();
  }




   Apicats() {

    let result = this.apiCatsService.getCatIndormation();
    result.subscribe((data: CatsInformation[]) => {
      this.dataCompleteds = data
    })
  }
  
  


 
}
