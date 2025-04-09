import axios from 'axios';
import { BehaviorSubject, from, catchError, of, tap } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

const usersSubject = new BehaviorSubject<User[] | null>(null);

export const users$ = usersSubject.asObservable();

export const fetchUsers = () => {
  const apiCall$ = from(axios.get<User[]>('https://jsonplaceholder.typicode.com/users')).pipe(
    tap(response => {
      usersSubject.next(response.data); // Update subject with data
    }),
    catchError(error => {
      console.error('API error:', error);
      usersSubject.next([]); // fallback or error state
      return of(null); // Optional: emit null or fallback observable
    })
  );

  apiCall$.subscribe(); // Trigger the observable (imperatively)
};
