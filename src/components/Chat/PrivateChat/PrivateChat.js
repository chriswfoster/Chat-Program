import React, {Component} from 'react';
import {connect} from 'react-redux'

class PrivateChat extends Component {
constructor(){
    super()
    this.state = {

    }
}
componentDidMount() {
    const privateChats = firebase.database().ref("privateChats")
    privateChats.on("value", snapshot => {
      let items = snapshot.val()
      console.log(items)
      let privateState = []
      for (let item in items) {
        if (items[item].users && items[item].users[this.props.user.username]) {
          privateState.push({ title: items[item].title, key: [item] })
        }
      }
      this.setState({
        privateChats: privateState
      })
    })
  }


render() {
return(
<div>
</div>
)}
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(PrivateChat)