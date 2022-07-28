import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading$ = new BehaviorSubject<boolean>(false);

  constructor() { }


  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  get loading(): boolean {
    return this._loading$.getValue();
  }

  public nextLoading(loading: boolean): void {
    this._loading$.next(loading);
    this.toggleScrollBar();
    console.log('chamando loader')
  }

  public toggleScrollBar(): void {
    if (this.loading) {
      document.body.classList.add('modal-open');
      document.body.style.paddingRight = '17px';
      document.body.style.overflow = 'hidden';
      console.log('true')
    } else {
      document.body.removeAttribute('class');
      document.body.removeAttribute('style');
      console.log('false')
    }
  }

}
