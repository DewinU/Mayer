import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Mayer';
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getJSONData().subscribe((data) => {
      this.data = data;
    });
  }
}
