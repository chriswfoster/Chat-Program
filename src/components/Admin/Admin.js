import React, { Component } from "react"
import { connect } from "react-redux"
import ImageGallery from "react-image-gallery"
import firebase from 'firebase'

import { getProductKey } from "../../redux/reducer"

import "./admin.css"
import "react-image-gallery/styles/css/image-gallery.css"

class Admin extends Component {
    constructor(props){
        super(props)
        this.state={
            itemsArray:[]

        }
    }
        componentDidMount() {
          this.props.getProductKey()
        }

        createRandomChat(){
            const firebaseconfig = this.props.productKey
            firebase.initializeApp(firebaseconfig)
            const database = firebase.database()
            firebase
            .database()
            .ref("randomChats/" )
            .push(
              { test: "testereserrr"},
              function(err) {
                if (err) {
                   alert(err)
                  }
              }
            )
        }

  render() {
    console.log(this.props)
   
    
    return (
      <div style={{ width: "100vw" }}>
        <button onClick={()=> this.createRandomChat()}>Add random public chat</button>

        <div style={{ width: "70vw" }} className="Carousel">
          
          <form onSubmit={() => this.submitIt()}>
              <input type="text" />
              <input type="submit" />
              </form>
          
          
          {/* <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
          /> */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
getProductKey
})(Admin)