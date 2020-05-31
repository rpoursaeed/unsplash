import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
    super(props)
    this.tobigcase=this.tobigcase.bind(this)
    this.state={term:''}

    }

tobigcase(event){
 this.setState({
 term:event.target.value
    })
}

onformsubmit= event => {
    event.preventDefault()
    this.props.onsubmit(this.state.term)
}

render(){
    return <div>
    <form onSubmit={this.onformsubmit}>
    <input value={this.state.term} onChange={this.tobigcase} />
    </form>
    </div>
    

}


}







export default Searchbar;
