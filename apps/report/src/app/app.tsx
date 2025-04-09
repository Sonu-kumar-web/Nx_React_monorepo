import { data, commonCSSStyle } from '../../../../libs/src'
// import '../styles.css';

export function App() {
  return (
    <div style={{...commonCSSStyle}}>{data[2].name}</div>
  );
}

export default App;
