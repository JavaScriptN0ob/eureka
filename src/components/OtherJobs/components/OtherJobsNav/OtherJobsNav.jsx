import React, { Component, Children } from 'react';

import styles from './OtherJobsNav.module.scss'

import OtherJobsCardContainer from '../OtherJobsCardContainer'
// import OtherJobsCard from '../OtherJobsCard'

class OtherJobsNav extends Component {
  constructor() {
    super();

    this.state = {
      currentComponentIndex: "Moving Home",
    }

    this.handleComponentShowing = this.handleComponentShowing.bind(this);
    // this.handleClickMovingHome = this.handleClickMovingHome.bind(this);
    // this.handleClickStartBusiness = this.handleClickStartBusiness.bind(this);
    // this.handleClickFixing = this.handleClickFixing.bind(this);
    // this.handleClickHostingParty = this.handleClickHostingParty.bind(this);
    // this.handleClickDifferent = this.handleClickDifferent.bind(this);
    this.handleShowingBlock = this.handleShowingBlock.bind(this);
  }

  handleShowingBlock(index) {
    this.setState({
      currentComponentIndex: index,
    })
  }

  // handleClickMovingHome() {
  //   this.setState({
  //     currentComponentIndex: 1,
  //   })
  // }

  // handleClickStartBusiness() {
  //   this.setState({
  //     currentComponentIndex: 2,
  //   })
  // }

  // handleClickFixing() {
  //   this.setState({
  //     currentComponentIndex: 3,
  //   })
  // }

  // handleClickHostingParty() {
  //   this.setState({
  //     currentComponentIndex: 4,
  //   })
  // }

  // handleClickDifferent() {
  //   this.setState({
  //     currentComponentIndex: 5,
  //   })
  // }
  
  handleComponentShowing(index) {
    switch(index) {
      case("Moving Home"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Got a few boxes to shift, an apartment or entire house? Get your home moved just the way you want, by whom you want, when you want. Let Airtasker shoulder the load."
          title = "DELVERY" 
          description = "Deliver 1,000 letterbox flyers in Kellyville"
          price = "$50"
          rate = "5 Stars"
          />
        );
      case("Start Business"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Taking a big leap and need some expert advice or assistance? Airtasker can help you get some cracking marketing collateral, admin muscle or a few extra hands to help ease the burden."
          title = "DESIGN" 
          description = "Logo designer for photography business"
          price = "$88"
          rate = "5 Stars"
          />
        );
      case("Fixing Staff"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Do you have a hole in the wall that needs plugging? Perhaps a TV that needs mounting? Or maybe you have that perfect shade of green, but no time to paint? Get a Tasker to help."
          title = "HANDYMAN / TRADIES" 
          description = "Help assemble a flat pack."
          price = "$30"
          rate = "5 Stars"
          />
        );
      case("Hosting A Party"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Got something to celebrate and the guest list all ready, but need everything else? Let Airtasker help you find the best bartenders, party planners, photographers and entertainment in the land."
          title = "CATERING" 
          description = "Help With A Launch Party -- This Thursday"
          price = "$100"
          rate = "5 Stars"
          />
        );
      case("Something Difference"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Want something done but feel like it’s too random? Whether it’s getting rescued from a spider or help building a bobsled - you can get nearly anything done through Airtasker."
          title = "CHEF" 
          description = "Teach me your family pasta sauce recipe"
          price = "$575"
          rate = "5 Stars"
          />
        );
    }
  }

  render () {
    const { currentComponentIndex } = this.state;

    return (
      <div className={styles.OtherJobs__container}>
          <div className={styles.OtherJobs__title}>
            <Test onClick={this.handleShowingBlock}>Moving Home</Test>
            <Test onClick={this.handleShowingBlock}>Start Business</Test>
            <Test onClick={this.handleShowingBlock}>Fixing Staff</Test>
            <Test onClick={this.handleShowingBlock}>Hosting A Party</Test>
            <Test onClick={this.handleShowingBlock}>Something Difference</Test>
          </div>
          <div>
            {
              this.handleComponentShowing(currentComponentIndex)
            }
          </div>
          <div className={styles.OtherJobs__button}>
            <button>Get started now</button>
          </div>
      </div>
    );
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.props.onClick(this.props.children)
  }

  render() {
    return (
      <p onClick={this.handleClick}>
        {this.props.children}
      </p>
    )
  }
}
  

export default OtherJobsNav;