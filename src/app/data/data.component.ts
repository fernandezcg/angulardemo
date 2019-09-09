import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  records = []

  constructor(private recordsService: RecordsService) {}

  ngOnInit() {
    this.recordsService.getData()
    .subscribe(data => {
      console.log(data)
      this.records = data
  })

  }

}
