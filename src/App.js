import './App.css';
import About from './component/About/About';

import Body from './component/Body/Body';
import { Courses } from './component/Courses/Courses';
import Header from './component/Header/Header';
import { Newsletter } from './component/Newsletter/Newsletter';
import { Testimonial } from './component/Testimonial/Testimonial';


function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <About></About>
      <Courses></Courses>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </div>
  );
}

export default App;
