import { Component, OnInit } from '@angular/core';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  memories = [];
  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.getAllMemories();
  }

  getAllMemories() {
    this.memoryService.getMyMemories().subscribe((resp) => {
      this.memories = resp.memories;
    });
  }
}
