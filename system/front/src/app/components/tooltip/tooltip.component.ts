import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  @Input() isActive: boolean;
  @Input() top: number;
  @Input() left: number;
  @Input() info: any;
 
  constructor() { }

  ngOnInit(): void {}

  tooltipContent() {
    if (!this.info.data) return '';
    
    if( !this.info.data.isAlive ) {
        return 'Lot Not Alive';
    }
    else if ( !this.info.data.isActive ) {
        return 'Inactive Lot';
    }
    else if ( this.info.mode === 'value' && !this.info.data.isValid ) {
        return 'Invalid Value';
    }
    else if ( this.info.mode === 'change' && !this.info.data.changeValid ) {
        return 'Invalid Change';
    }
    else {
        return this.info.data[this.info.mode].toLocaleString(
            undefined, { minimumFractionDigits: 2 }
          );
     }
  }
}
