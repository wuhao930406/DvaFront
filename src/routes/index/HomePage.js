import { Row, Col, Card, Icon, PageHeader, Carousel,Spin } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example,loading }) => ({
  example,
  loads:loading.effects['example/getall']
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
    this.setNewState("getadv")
    this.setNewState("getaboutus")
    this.setNewState("getservice")
  }

  render() {
    const { getall,getadv,getaboutus,getservice } = this.props.example;

    return (
      <Row style={{ margin: 0 }}>
      <Spin spinning={this.props.loads}>
        <div className={styles.dotc}>
          <Carousel autoplay speed={800} draggable autoplaySpeed={4000}>
            {
              getall &&
              getall.map((Item, i) => {
                let imgurl = `/edu${Item.url}`
                return (
                  Item.jumpurl ?
                    <Link to={Item.jumpurl} key={i} className={styles.banner} >
                      <div style={{ backgroundImage: `url(${imgurl})` }}>

                      </div>
                    </Link> :
                    <div key={i} className={styles.banner}>
                      <div style={{ backgroundImage: `url(${imgurl})` }}>

                      </div>
                    </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className={styles.minddle}>
          <Row gutter={24} style={{ margin: 0 }}>
            <Col style={{ marginBottom: 40, padding: 0 }}>
              <SubTitles title={"海学达国际教育"}
                desc="海学达国际教育的优势" dstyle={{ color: "#7a7a7a" }}
              ></SubTitles>
            </Col>

            {
              getadv.map((item, i) => (
                <Col key={i} xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} style={{ margin: "12px 0px" }}>
                  <div className={styles.hovered}>
                    <img style={{ width: "38%", margin: "12px auto", maxWidth: 140 }} src={`./assets/images/index_icon${i+1}.png`} alt="" />
                    <h3 style={{ textAlign: "center"}}>{item.title}</h3>
                    <p style={{textAlign: "center",width:"88%",display:"block",margin:"0 auto",whiteSpace:"pre-wrap" }}>{item.desc}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
        <div style={{ width: "100%", backgroundColor: "#f8fafc", width: "100%" }}>
          <div className={styles.minddle}>
            <Row gutter={24} style={{ margin: 0 }}>
              <Col style={{ marginBottom: 40, padding: 0 }}>
                <SubTitles title={"关于我们"} tstyle={{ color: "#d95750" }}
                  lstyle={{ backgroundColor: "#d95750" }}
                ></SubTitles>
              </Col>
              <Row style={{ margin: 0, backgroundColor: "#fff" }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ backgroundColor: "#fff", padding: 0 }}>
                  <img style={{ width: "100%" }} src="./assets/images/icon_bac.png" alt="" />

                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ backgroundColor: "#fff", padding: 36 }}>
                  <img style={{ display: "block", width: 30 }} src="./assets/images/icon_yi.png" alt="" />
                  <p className={styles.fontchange} >
                    {getaboutus.companydesc}
                  </p>
                  <img style={{ display: "block", transform: "rotate(180deg)", width: 24, float: "right" }} src="./assets/images/icon_yi.png" alt="" />
                </Col>
              </Row>
            </Row>
          </div>
        </div>
        <div className={styles.minddle}>
          <Row gutter={24} style={{ margin: 0 }}>
            <Col style={{ marginBottom: 40, padding: 0 }}>
              <SubTitles title="项目与服务"
                desc="为您提供专业的服务"
              ></SubTitles>
            </Col>
            <Row style={{ margin: 0, backgroundColor: "#fff" }}>
              {
                getservice.map((item, i) => {
                  return (
                    <Col key={i} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ padding: 24 }}>
                      <Link style={{ width: "100%", height: 300 }} to={item.id==4?"/main/internation":item.id==5?"/main/school":item.id==6?"/main/activity":""}>
                        <div className={styles.hoveritem}>
                          <div className={styles.hideimg}>
                            <img src={`./assets/images/indexicon${i + 1}.png`} alt="" />
                            <img src={`./assets/images/indexicons${i + 1}.png`} alt="" />
                          </div>

                          <h2>{
                            item.title
                          }</h2>

                          <div className={styles.hidedesc}>
                            <i></i>
                            <p style={{whiteSpace:"pre-wrap"}}>{item.desc}</p>
                          </div>
                          <div className={styles.hidebac}>
                          </div>

                        </div>
                      </Link>

                    </Col>
                  )
                })

              }


            </Row>
          </Row>
        </div>
        </Spin>
      </Row>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;