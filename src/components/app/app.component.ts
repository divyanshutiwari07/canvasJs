import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import Canvas from 'src/utils/Canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  @ViewChild('drawArea', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  
  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = "green";
    Canvas.drawFreeHandSection(this.ctx);
  }
  
}
