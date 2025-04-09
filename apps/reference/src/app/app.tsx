// import '../styles.css';
import { data, commonCSSStyle } from '../../../../libs/src'

export function App() {
  return (
    <div style={{...commonCSSStyle}}>{data[1].name}</div>
  );
}

export default App;
