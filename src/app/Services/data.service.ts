import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject<any>('20%');
 public currentMessage = this.messageSource.asObservable();
 private messageSource1 = new BehaviorSubject<any>('2');
 public currentMessage1 = this.messageSource.asObservable();
 private search=new BehaviorSubject<any>('');
 public searchnote=this.search.asObservable();
private searchText=new BehaviorSubject<any>('');
public shareSearchText=this.searchText.asObservable();
  constructor() { }
  changegrid(text) {
    debugger
   this.messageSource.next(text);
  }
  grid(text) { 
    debugger
   this.messageSource1.next(text);
  }
 searchnotes(note)
 {
   this.search.next(note);
 } 
 updateSearchtext(text){
   this.searchText.next(text);
 }
}