import React from 'react';

import styles from ".././FeatureBlock.module.scss";

import SecurePayment from "../../../../assets/secure-payments.png";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Secure Payments",
      description: "We hold task payments secure with our PCI-DSS compliant Airtasker Pay – so tasks can be completed knowing payment is there when you're done."
    }
  }
  
  render() {
    const { title, description } = this.state;
    const { 图片在左, } = this.props;

    return (
      <React.Fragment>
        {
          图片在左 ? (
            <div className={styles.FeatureContainer}>
              <图片 /><文字 title={title} description={description} />
            </div>
          ) : (
            <div className={styles.FeatureContainer}>
              <文字  title={title} description={description} /><图片 />
            </div>
          )
        }
      </React.Fragment>
    )
  }
}


function 图片() {
  return (
    <div className={styles.FeatureImg}>
      <img src={SecurePayment} alt="test"></img>
    </div>
  )
}

function 文字({ 
  title, 
  description,
 }) {
  return (
    <div className={styles.FeatureContent}>
      <div className={styles.subhead}>{title}</div>
      <div className={styles.describe}>
        {description}
      </div>
      <a
        href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
        className={styles.readMore}
      >
        Read more
      </a>
    </div>
  )
}

export default Test;