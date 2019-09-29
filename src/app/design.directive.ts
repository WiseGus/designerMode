import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';
import { DesignModeService } from './design-mode.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-text, app-date, app-memo'
})
export class DesignDirective implements OnInit {

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this._inDesignMode) {
      this.refreshBorder(true);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this._inDesignMode) {
      this.refreshBorder(false);
    }
  }

  private _inDesignMode: boolean = true;

  constructor(
    private _designModeSvc: DesignModeService,
    private _renderer: Renderer2,
    private _elRef: ElementRef<HTMLBaseElement>) { }

  ngOnInit(): void {
    this._designModeSvc.inDesignMode$.subscribe(p => this._inDesignMode = p);
  }

  refreshBorder(enable: boolean) {
    const value = enable ? '1px dotted blue' : 'initial';
    this._renderer.setStyle(this._elRef.nativeElement, 'border', value);
  }
}
