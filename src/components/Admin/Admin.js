import React, { Component } from "react"
import { connect } from "react-redux"
import ImageGallery from "react-image-gallery"
import firebase from "../../firebaseconfig"
import PublicChat from '../Chat/PublicChat/PublicChat'
import { nouns, adjectives, animals, colorWords } from "./WordData"
import { getProductKey } from "../../redux/reducer"

import "./admin.css"
import "react-image-gallery/styles/css/image-gallery.css"

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsArray: [],

    }
  }
  componentDidMount() {
  }

  createRandomChat() {
    let thirdword = nouns[Math.floor(Math.random() * Math.floor(500))]
    let firstword = colorWords[Math.floor(Math.random() * Math.floor(186))]
    let secondword = animals[Math.floor(Math.random() * Math.floor(150))]
    const word =
      firstword[0].toUpperCase() +
      firstword.slice(1) +
      secondword[0].toUpperCase() +
      secondword.slice(1) +
      thirdword[0].toUpperCase() +
      thirdword.slice(1)

    firebase
      .database()
      .ref("publicChats/" + word)
      .set({ test: "testereserrr" }, function(err) {
        if (err) {
          alert(err)
        }
      })
  }

  render() {


    return (
      <div style={{ width: "100vw" }}>
        <button onClick={() => this.createRandomChat()}>
          Add random public chat
        </button>

        <div style={{ width: "70vw" }} className="Carousel">
          <form onSubmit={() => this.submitIt()}>
            <input type="text" />
            <input type="submit" />
          </form>
          <PublicChat />
        
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getProductKey
})(Admin)
