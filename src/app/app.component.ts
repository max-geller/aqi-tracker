import { Component } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aqi-tracker';
  // 1. import dependencies

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {
  }
  // 3. call them in ngOnInit
  ngOnInit() {
    const s1 = this.renderer2.createElement('script');
    s1.type = 'text/javascript';
    s1.src = 'https://www.purpleair.com/pa.widget.js?key=G0XSWU6X6D15O7VA&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_19705_module_AQI_conversion_C0_average_10_layer_standard';
    s1.text = ``;
    this.renderer2.appendChild(this._document.body, s1);
    const s2 = this.renderer2.createElement('script');
    s2.type = 'text/javascript';
    s2.src = 'https://www.purpleair.com/pa.widget.js?key=G0XSWU6X6D15O7VA&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_19705_module_AQI_conversion_C0_average_10_layer_standard';
    s2.text = ``;
    this.renderer2.appendChild(this._document.body, s2);
  }
}
