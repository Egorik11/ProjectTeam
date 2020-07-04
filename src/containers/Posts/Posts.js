import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

export default class Blog extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      favorites: [],
      posts: [],
      limit:12, 
      order : "asc",
      view : "grid",
      page : 1,
      total : 100,
      loading : false,
      error : null,
    }
  }
  
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    )
  }
}
