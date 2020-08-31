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
    s1.src = 'https://www.purpleair.com/pa.widget.js?key=1NHE6FNSY542VU4O&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_20119_module_AQI_conversion_C0_average_10_layer_standard';
    s1.text = ``;
    this.renderer2.appendChild(this._document.body, s1);

    const s2 = this.renderer2.createElement('script');
    s2.type = 'text/javascript';
    s2.src = 'https://www.purpleair.com/pa.widget.js?key=G0XSWU6X6D15O7VA&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_19705_module_AQI_conversion_C0_average_10_layer_standard';
    s2.text = ``;
    this.renderer2.appendChild(this._document.body, s2);

    const s3 = this.renderer2.createElement('script');
    s3.type = 'text/javascript';
    s3.src = ' https://www.purpleair.com/pa.widget.js?key=B6VIWXQJY1BUEJLJ&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_3934_module_AQI_conversion_C0_average_10_layer_standard';
    s3.text = ``;
    this.renderer2.appendChild(this._document.body, s3);


    const s4 = this.renderer2.createElement('script');
    s4.type = 'text/javascript';
    s4.src = ' https://www.purpleair.com/pa.widget.js?key=1052P9ALN0O8N30E&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_20707_module_AQI_conversion_C0_average_10_layer_standard'
    s4.text = ``;
    this.renderer2.appendChild(this._document.body, s4);


    const s5 = this.renderer2.createElement('script');
    s5.type = 'text/javascript';
    s5.src = 'https://www.purpleair.com/pa.widget.js?key=PMWGYB07N4CDBH23&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_37021_module_AQI_conversion_C0_average_10_layer_standard';
    s5.text = ``;
    this.renderer2.appendChild(this._document.body, s5);




  }


}
