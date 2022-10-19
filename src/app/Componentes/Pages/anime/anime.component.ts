import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../../../service/database.service'
import {Route} from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  databaseList: any[]=[];
  constructor(private databaseSvc:DatabaseService) { 
    this.databaseSvc.getAll().subscribe((result:any)=>{
      this.databaseList = result;
      console.log(result);
      console.log(2000000);
    }
    )

  }

  ngOnInit(): void {
  }

}
