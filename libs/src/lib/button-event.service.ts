import { Subject } from "rxjs";

// Define an event service using RxJS Subjects
const buttonClickSubject = new Subject<void>();


// Expose the observable for other components
export const buttonClick$ = buttonClickSubject.asObservable();

// Function to emit a button click event
export const emitButtonClick = () => {
  buttonClickSubject.next();
};
