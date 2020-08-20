import { Component, OnInit } from '@angular/core';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  count = 0;
  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {
  }

  getMemoriesCount(): void {

    this.memoryService.getMemoriesCount().subscribe((resp) => {
      this.count = resp.count;
    });
  }
}
