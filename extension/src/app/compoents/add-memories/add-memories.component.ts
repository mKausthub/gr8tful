import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-add-memories',
  templateUrl: './add-memories.component.html',
  styleUrls: ['./add-memories.component.scss']
})
export class AddMemoriesComponent implements OnInit {

  public quesstion: string = '';
  public loading: boolean = false;
  public isSuccessPage: string = 'no';
  public count: number = 0;
  public answer: string = '';

  constructor(
    private router: Router,
    private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.refresh();
    this.getMemoriesCount();
  }

  refresh(): void {
    this.answer = '';
    this.quesstion = this.memoryService.getRandomQuestion();
  }

  getMemoriesCount() {
    this.memoryService.getMemoriesCount().subscribe((resp: any) => {
      this.count = resp.count;
    });
  }

  submitAnswer(): void {
    if (this.loading || !this.answer) {
      return;
    }

    this.memoryService.postMemories({
      title: this.quesstion, answer: this.answer
    }).subscribe(() => {
      this.count++;
      this.answer = '';
      this.refresh();
      this.showAnswerPage();
    });
  }

  showAnswerPage(): void {
    const answerSection = document.getElementById('answer-success');
    const submitQsection = document.getElementById('submit-q');
    answerSection.style.display = 'block';
    submitQsection.style.display = 'none';
  }

  showSubmitQ(): void {
    const answerSection = document.getElementById('answer-success');
    const submitQsection = document.getElementById('submit-q');
    answerSection.style.display = 'none';
    submitQsection.style.display = 'block';
  }

  gotoSubmitAnswerPage(): void {
    this.answer = '';
    this.refresh();
    this.showSubmitQ();
  }

  openDashboard() {
    this.router.navigate(['/']);
  }
}
