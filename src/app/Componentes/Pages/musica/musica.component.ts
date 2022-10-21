import { Component, OnInit } from '@angular/core';
import {DatabaseService} from 'src/service/musicDataBase';
import {Route} from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  databaseList: any[]=[];
  constructor(private databaseSvc:DatabaseService) { 
    this.databaseSvc.getAll().subscribe((result:any)=>{
      this.databaseList = result;
      console.log(result);
    })
  }

  ngOnInit(): void {
  }

}
