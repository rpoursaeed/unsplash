import React from 'react'
import axios from 'axios'
import Searchbar from './Searchbar'
import Imagelist from './Imagelist'

class App extends React.Component{
state = {images:[]}

onsearchsubmit  = async (term) =>{
const response = await axios.get('https://api.unsplash.com/search/photos',{
  params:{query:term} , 
 headers:{
    Authorization: 'Client-ID TElQEGNyIv3yzETiNAuTHy-t8C2AM6BvVaH9jk8iYBs'
 }
})
console.log(response)
this.setState({images:response.data.results})


}


render(){
    return(
        <div>
        <Searchbar  onsubmit={this.onsearchsubmit} />
        <Imagelist images={this.state.images} />
        
        </div>
        
    )
}
}

export default App