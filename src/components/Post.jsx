import React from 'react';

import styles from './Post.module.scss';

import Body from './Body'

function Post() {
  return (
    <div className={styles.container}>
      <Body />
    </div>
  )
}

export default Post;