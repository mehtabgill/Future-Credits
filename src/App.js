import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import CreateProject from './containers/CreateProject/CreateProject';

import ProjectPosts from './components/ProjectPosts/ProjectPosts' ;
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProjectPost from './components/ProjectPosts/ProjectPost/ProjectPost';


class App extends Component {
  
  state= {
    posts: [
      {title: "Chess iOS Game", descprtion: "We need people like Mehtab!!"},
      {title : "BookSale Web APP", descprtion: "We need people like Raman!!"}
    ]
  }
  render() {
    return (
      <div>
        <Layout>
          {/* <CreateProject/> */}
          <ProjectPosts
            posts  = {this.state.posts} />
        </Layout>
      </div>

    );
  }
}

export default App;
