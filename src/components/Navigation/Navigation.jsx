import React from 'react';

import styles from './Navigation.module.scss';

import { withRouter } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCategoryHover: false,
    }

    this.handleCategoryHover = this.handleCategoryHover.bind(this);
    this.handleCategoryLeave = this.handleCategoryLeave.bind(this);
  }

  handleCategoryHover() {
    this.setState({
      isCategoryHover: true,
    })
  }

  handleCategoryLeave() {
    this.setState({
      isCategoryHover: false,
    })
  }

  render() {
    const { isCategoryHover } = this.state;
    const fn = this.handleCategoryLeave;

    return (
      <React.Fragment>
        <nav>
          <div className = {styles.navMenu}>
            <div className = {styles.logo}>
              logo
            </div>
    
            <div className = {styles.left}>
              <a 
                className = {styles.postTask} 
                onMouseOver={this.handleCategoryLeave}
                onClick={() => this.props.history.push("/post")}
              >
                Post a task
              </a>
              <div 
                className = {styles.categories}
                onMouseOver={this.handleCategoryHover}
              >
                <a>Categories</a>
              </div>
              <a 
                className = {styles.browseTasks}
                onMouseOver={this.handleCategoryLeave}
                onClick={() => this.props.history.push("/browse")}
              >
                Browse tasks
              </a>
              <a className = {styles.howItWorks}>How it works</a>
            </div>
    
            <div className = {styles.right}>
              <a className = {styles.becomeTasker}>Become a Tasker</a>
              <a 
                className = {styles.logIn}
                onClick={() => this.props.history.push("/login")}
              >
                Log in
              </a>
              <a
                className = {styles.signUp}
                onClick={() => this.props.history.push("/signUp")}
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
        {
          this.state.isCategoryHover ? (
            <Test 
              onMouseOver={this.handleCategoryHover}
              onMouseOut={this.handleCategoryLeave}
            />
          ) : (
            null
          )
        }
      </React.Fragment>
    )
  }
}

function Test(props) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "gold",
        position: "absolute",
        top: "40px",
        left: "200px"
      }}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      我是一个category页面啦啦啦
    </div>
  )
}

export default withRouter(Navigation);