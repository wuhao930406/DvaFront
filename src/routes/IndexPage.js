import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {
  Icon, Menu, Dropdown, Drawer,
  Button, Row, Col, Layout, Avatar, Divider
} from 'antd';
import { Link } from 'dva/router';
import ScrollBar from '../components/ScrollBar';
import IndexRouterConfig from '../indexrouter'
import { template } from 'handlebars';
import { router } from 'dva/router'
 
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

@connect(({ example }) => ({
  example
}))
class IndexPage extends Component {
  state = {
    visible: false,
    ifshow: true,
    current: "",
    team: [
      {
        key: "circle:/main/about",
        name: "企业介绍"
      },
      {
        key: "circle:/main/develop",
        name: "发展历程"
      },
      {
        key: "circle:/main/achiev",
        name: "企业成绩"
      },
    ],
    service: [
      {
        key: "service:1",
        name: "海外实体学校"
      },
      {
        key: "service:2",
        name: "北美在线学校",
      },
      {
        key: "service:3",
        name: "北美离案私塾"
      },
      {
        key: "service:/main/internation",
        name: "国际课程整体配套",
      },
      {
        key: "service:/main/school",
        name: "信息化校园平台"
      },
      {
        key: "service:/main/activity",
        name: "大型国际教育活动",
      },
    ]
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

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

  handleClick = (e) => {
    this.setState({
      current: e.key,
      ifshow: e.key.indexOf("service") !== -1 || e.key.indexOf("circle") !== -1
    },()=>{
      this.setNewState("redirect",{url:e.key.split(":")[1]})
    });
  };

  componentDidMount(){
    this.setNewState("getcontact");
    this.setNewState("getpublic");
  }


  render() {
    const w = document.body.clientWidth;
    const { ifshow, current, team, service } = this.state,{getcontact}=this.props.example;
    return (
      <Layout style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Header className={styles.indexheader}>
          <div className={styles.minddle}>
            <Link to='/' className={styles.logohover}>
              <img src="./assets/images/logos.png" alt="" />
              <img src="./assets/images/anicon.png" alt=""/>
              <img src="./assets/images/anicon.png" alt=""/>
              <img src="./assets/images/anicon.png" alt=""/>

            </Link>
            <div className={styles.mediabig}>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Icon type="info-circle" />
                      关于我们
                </span>
                  }
                >
                  <Menu.Item key="circle:/main/about">企业介绍</Menu.Item>
                  <Menu.Item key="circle:/main/develop">发展历程</Menu.Item>
                  <Menu.Item key="circle:/main/achiev">企业成绩</Menu.Item>
                </SubMenu>
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Icon type="heart" />
                      项目与服务
                </span>
                  }
                >
                  <Menu.Item key="service:1">海外实体学校</Menu.Item>
                  <Menu.Item key="service:2">北美在线学校</Menu.Item>
                  <Menu.Item key="service:3">北美离案私塾</Menu.Item>
                  <Menu.Item key="service:/main/internation">国际课程整体配套</Menu.Item>
                  <Menu.Item key="service:/main/school">信息化校园平台</Menu.Item>
                  <Menu.Item key="service:/main/activity">大型国际教育活动</Menu.Item>
                </SubMenu>
                <Menu.Item key="team:partner">
                  <Icon type="team" />
                  合作伙伴
              </Menu.Item>

                <Menu.Item key="mail:contact">
                  <Icon type="mail" />
                  联系我们
              </Menu.Item>
              </Menu>
            </div>
            <div className={styles.mediamittle}>
              <Icon type="menu-unfold" style={{ fontSize: 20 }} onClick={this.showDrawer} />
            </div>
          </div>

        </Header>
        <Content className={styles.indexcontent}>
          <div style={{
            height: "100%", overflow: "auto", background: "#fff", overflowX: "hidden"
          }}>
            <ScrollBar>
              <div style={{ padding: w < 500 ? "0px 17px 18px 0px" : 0, height: "100%" }}>
                <IndexRouterConfig></IndexRouterConfig>
                <div className={styles.indexfooter}>
                  <div className={styles.minddle}>
                    <Row gutter={24} style={{ paddingBottom: 4 }}>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <div className={styles.indexstyle}>
                          <h2>公司总部</h2>
                          <div></div>
                          <ul>
                            <li>地址：{getcontact.contact?getcontact.contact.address:""}</li>
                            <li>电话：{getcontact.contact?getcontact.contact.phone:""}</li>
                          </ul>
                          <Button href={getcontact.contact?getcontact.contact.tomap:""} target="_blank" style={{ margin: "0px auto", display: "block", maxWidth: 140 }} icon="compass">
                            导航
                        </Button>
                        </div>
                      </Col>

                      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <div className={styles.indexstyle}>
                          <h2>微信公众号</h2>
                          <div></div>
                          <img src={`/edu${getcontact.contact?getcontact.contact.qrcode:""}`} alt="" />
                        </div>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <div className={styles.indexstyle}>
                          <h2>在线咨询</h2>
                          <div></div>
                          <Button href={`http://wpa.qq.com/msgrd?v=3&uin=${getcontact.contact?getcontact.contact.qq:""}&site=qq&menu=yes`}
                            style={{ margin: "1rem auto", display: "block", maxWidth: 140 }} icon="qq" target="_blank">
                            咨询
                          </Button>
                        </div>
                      </Col>

                    </Row>
                  </div>
                </div>
                <div className={styles.foot}>
                  <ul className={styles.minddle} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 1rem" }}>
                    <p style={{ margin: 0, textAlign: "center", width: "100%" }}>Ant Design ©2018 Created by Ant UED</p>
                  </ul>
                </div>
              </div>
            </ScrollBar>
          </div>
        </Content>


        <Drawer
          height={273}
          bodyStyle={{ padding: "24px 0 0 0" }}
          placement="top"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <img src="./assets/images/logos.png" className={styles.logos} alt="" />
          <Row className={styles.indexrow}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className={current.indexOf("circle") != -1 ? styles.indexcols : styles.indexcol} onClick={() => {
              this.setState({
                ifshow: true,
                current: "circle"
              })
            }}>
              <p style={{ textAlign: "center" }}>关于我们</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className={current.indexOf("service") != -1 ? styles.indexcols : styles.indexcol} onClick={() => {
              this.setState({
                ifshow: true,
                current: "service",
              })
            }}>
              <p style={{ textAlign: "center" }}>项目与服务</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className={current.indexOf("team") != -1 ? styles.indexcols : styles.indexcol} onClick={() => {
              this.setState({
                current: "team:partner",
                ifshow: false
              },()=>{
                this.setNewState("redirect",{url:"partner"})
              })
            }}>
              <p style={{ textAlign: "center" }}>合作伙伴</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className={current.indexOf("mail") != -1 ? styles.indexcols : styles.indexcol} onClick={() => {
              this.setState({
                ifshow: false,
                current: "mail:/main/contact",
              },()=>{
                this.setNewState("redirect",{url:"contact"})
              })
            }}>
              <p style={{ textAlign: "center" }}>联系我们</p>
            </Col>
            <Col span={24} style={{ backgroundColor: ifshow ? "rgba(0,0,0,0.1)" : "transparent", height: ifshow ? 122 : 1, transition: "all 0.4s", overflow: "hidden" }}>
              {
                this.state.current.indexOf("circle") != -1&&team.map((item,i)=>(
                  <Col key={i} span={8} style={{ cursor: "pointer" }} onClick={() => {
                    this.setState({
                      current: item.key,
                    },()=>{
                      this.setNewState("redirect",{url:item.key.split(":")[1]})
                    })
                  }}>
                <p style={{ textAlign: "center", color: current == item.key ? "#d95750" : "#666",height:54,display:"flex",justifyContent:"center",alignItems:"center",margin:0,fontSize:"0.7rem",padding:"0px 4px"}}>{item.name}</p>
              </Col>
              ))
              }{
                this.state.current.indexOf("service") != -1 && service.map((item, i) => (
                  <Col key={i} span={8} style={{ cursor: "pointer" }} onClick={() => {
                     this.setState({
                      current: item.key,
                    },()=>{
                      this.setNewState("redirect",{url:item.key.split(":")[1]})
                    })
                  }}>
                    <p style={{ textAlign: "center", color: current == item.key ? "#d95750" : "#666",height:54,display:"flex",justifyContent:"center",alignItems:"center",margin:0,fontSize:"0.7rem",padding:"0px 4px" }}>{item.name}</p>
                  </Col>
                ))
              }
            </Col>






          </Row>

        </Drawer>
      </Layout>
    );
  }
}

export default IndexPage
