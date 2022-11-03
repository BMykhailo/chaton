

import './App.css';
import Header from './Header';
import Vot from './Vot';

const chaton = [
  "https://resizer.mail.ru/p/e4595c2e-e2b7-5445-aae4-e8bf5f826e73/AQAOmB-ud2B7WgUeA6VmJDxVNFDKQaCAJ09ReZqITydZbGUcrVS-ALx_yqw5MVmDS5T_7eaH8-GrxixZwDGCm2e6laY.jpg",
  "https://www.purinaone.ru/cat/sites/default/files/styles/image_576/public/2020-08/norma_0.jpg?itok=fQPH71_P",
  "https://st.depositphotos.com/1000122/2016/i/450/depositphotos_20163697-stock-photo-small-scottish-straight-kitten-walking.jpg"
];
let rar =  chaton.map((golum) => <Vot image={golum} />) 


function App() {



  return (
    <div className="App">
      <Header />
      <div className="rar">{rar}</div>
    </div>
  );
}
 
export default App;
