import React from 'react'

class Searchbar extends React.Component {
    
    state = { term : ''};
    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        // console.log(event.state.term);
    }
    
    render(){
    return(
      
        <form onSubmit={this.onFormSubmit}>
        <div className="ui search bg-dark">
        <div className="ui icon input my-4" style={{'width' : "70%"}}>
            
            <input className="prompt" type="search" onChange={e => this.setState({ term:e.target.value})} placeholder="Search countries..." />
            
            <i className="search icon"></i>
        </div>
        <div className="results"></div>
        </div>
        </form>
    );
}
}
export default Searchbar;