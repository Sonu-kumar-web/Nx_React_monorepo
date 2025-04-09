import { Observable, Subject,fromEvent } from 'rxjs';
export const commonCSSStyle = {
  width:"100%",
  height:"20vh",
  display:"flex",
  justifyContent:"center",
  fontSize:"2rem",
}

// Static data to be shared
const STATIC_DATA = [
  { id: 1, name: 'Host App' },
  { id: 2, name: 'Reference APP' },
  { id: 3, name: 'Report APP' },
];

// Expose the Observable (readonly)
export const data = STATIC_DATA;

export const test = () => { 
  const myObservable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('RxJS');
    subscriber.complete();
  })
  myObservable.subscribe(value => console.log("myObservable***", value));
  const subject = new Subject<number>();

  subject.subscribe(value => console.log('Subscriber 1:', value));
  subject.subscribe(value => console.log('Subscriber 2:', value));
  subject.next(1);
subject.next(2);

}

