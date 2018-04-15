import React, { Component } from "react"
import { connect } from "react-redux"
import ImageGallery from "react-image-gallery"

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
            const firebaseconfig = this.props
            const newTableRef = firebase
            .database()
            // .ref("users/" + username)
            // .set(
            //   { username: username, password: hash, image_url: image_url },
            //   function(err) {
            //     err
            //       ? res.status(200).json(err)
            //       : (req.session.user =
            //           { username, password: hash, image_url } &&
            //           res.status(200).json({ username, password: hash, image_url }))
            //   }
            // )
        }

  render() {
    console.log(this.props)
   
    
    return (
      <div style={{ width: "100vw" }}>
        <button>Add random public chat</button>

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