import React, {Component} from 'react';
import axios from 'axios'

class Guest extends Component {
constructor(){
    super()
    this.state={
        guestNameText: ""
    }
}
guestNameHandler(val){
this.setState({guestNameText: val})
}

sendGuestName(username){
axios.post('/api/guestName?name='+username)
.then(response=> response.data)
}

render() {
return(
<div>
    <form onSubmit={()=> this.sendGuestName(this.state.guestNameText)}>
    <input type="text" placeholder="Guest name" onChange={(e)=> this.guestNameHandler(e.target.value)} />
    <input type="submit" />
    </form>
</div>
)}
}
export default Guest