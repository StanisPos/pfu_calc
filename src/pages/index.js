import { Calculator } from '@/components/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main>
      <Calculator />
      {/*{result && <p style={{ color: 'red', fontSize: '48px' }}>{result}</p>}*/}
    </main>
  );
}
