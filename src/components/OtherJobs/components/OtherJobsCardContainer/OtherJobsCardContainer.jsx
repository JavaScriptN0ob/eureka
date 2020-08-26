import React from 'react';

import styles from './OtherJobsCardContainer.module.scss';

import OtherJobsCard from '../OtherJobsCard'

function OtherJobsCardContainer(props) {
  return (
    <div className={styles.OtherJobs__cards}>
      <div className={styles.OtherJobs__description}>
        <h5>{props.tabDescription}</h5>
      </div>

      <div className={styles.OtherJobs__cardGrid}>
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
      </div>
    </div>
  );
}

export default OtherJobsCardContainer;