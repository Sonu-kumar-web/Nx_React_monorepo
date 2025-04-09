import React, {useEffect} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { data, commonCSSStyle, emitButtonClick, buttonClick$, users$, fetchUsers} from '../../../../libs/src'


const Reference = React.lazy(() => import('reference/Module'));
const Report = React.lazy(() => import('report/Module'));

export function App() {

  useEffect(() => {
    // Subscribe to the RxJS button click event
  
    const apiDataSubscription = users$.subscribe(data => {
      if (data) console.log("outside event", data);
    });
    const subscription = buttonClick$.subscribe(() => {
      fetchUsers();
      console.log("Inside Event", users$);
      console.log("Button clicked from RxJS!");
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/reference">Reference</Link> 
        </li>
        <li>
          <Link to="/report">Report</Link> 
        </li>
      </ul>

      <div>
      <input id='test_button' type="button" value="Click Me" onClick={emitButtonClick} />
      </div>
      
      <Routes>
        <Route path="/" element={<div style={{...commonCSSStyle}}>{data[0].name}</div>} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
