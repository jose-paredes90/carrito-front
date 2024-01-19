import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() elementName!: string;
  @Input() size: number = 50;

  private _loading!: boolean;
  @Input() 
  set loading(value: boolean) {
    this._loading = value;
    const element = this.elementName ? document.getElementById(this.elementName) as any : null;
    if (element) {
      element.scrollTop = 0;
      element.style.overflow = value ? 'hidden' : 'auto';
    }
  }
  get loading() {
    return this._loading;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
