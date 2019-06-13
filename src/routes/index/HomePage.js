import { Row, Col, Card, Icon, PageHeader, Carousel } from 'antd';
import { Link,router } from 'dva/router';

import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example }) => ({
  example
}))
class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  /* dispatch获取 */
  setNewState(type, value, fn) {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/' + type,
      payload: value
    }).then((res) => {
      if (res) {
        fn ? fn(res) : null
      }
    })
  }

  componentDidMount() {
    this.setNewState("getall")


  }

  render() {
    const { getall } = this.props.example;

    return (
      <Row>
        <div className={styles.dotc}>
        <Carousel autoplay speed={800} draggable autoplaySpeed={4000}>
          {
            getall &&
            getall.map((Item, i) => {
              let imgurl = `http://localhost:8000/edu${Item.url}`
              console.log(imgurl)
              return (
                Item.jumpurl ?
                  <Link to={Item.jumpurl} key={i} className={styles.banner}>
                    <div style={{ background: `url(${imgurl}) no-repeat center`,width:"100%",height:"100%",backgroundSize:"cover"}}>
                    </div>
                  </Link> :
                  <div key={i} className={styles.banner}>
                    <div style={{ background: `url(${imgurl}) no-repeat center`,width:"100%",height:"100%",backgroundSize:"cover"}}>
                    </div>
                  </div>
              )
            })
          }
        </Carousel>
        </div>
        <p>112312312</p>
      </Row>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;