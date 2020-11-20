import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './component/Searchbar';
import axios from 'axios';
import Imagelist from './component/Imagelist';

class App extends React.Component {
  state = {images : []};
  onSearchSubmit = async (term) =>  {
    console.log(term);
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: term },
    headers: {
      
      Authorization: 'Client-ID QZynfxFml_1J_5quTiFpbJyaWEjy9QC0C_1EB_XASdQ'
    }
  
    })
    .then(response => {
       console.log(this);
       this.setState({ images: response.data.results })
    })
  }

  
  render(){
  return (
    <div className="App">
      <div className="ui container">
        <Searchbar onSubmit={this.onSearchSubmit} />
        {/* <h1> found :{this.state.images.length} images </h1> */}
        <Imagelist images={this.state.images} />
        </div>
    </div>
  );
}
}

export default App;
