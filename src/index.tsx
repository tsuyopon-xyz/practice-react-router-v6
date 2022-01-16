import { render } from 'react-dom';
import './index.css';
import { AppRouter } from 'src/routes/router';

const rootElement = document.getElementById('root');
render(<AppRouter />, rootElement);
