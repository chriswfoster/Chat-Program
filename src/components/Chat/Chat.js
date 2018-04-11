import React, {Component} from 'react';
import './chat.css'

class Chat extends Component {
constructor(){
    super()
    this.state={
        privateChats: [],
        publicChats: [],
        groupChats: []
    }
}

componentDidMount() {

}


render() {
const privatechats = this.state.privateChats.map(item => item)
const publicchats = this.state.publicChats.map(item => item)
const groupchats = this.state.groupChats.map(item => item)
return(
<div>
    <div>
        {privatechats}
        </div>

        <div>
            {publicchats}
            </div>

            <div>
                {groupchats}
                </div>
</div>
)}
}
export default Chat