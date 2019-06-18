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
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;


class IndexPage extends Component {
  state = {
    visible: false,
    ifshow: false,
    current: "",
    team: [
      {
        key: "circle:1",
        name: "企业介绍"
      },
      {
        key: "circle:2",
        name: "发展历程"
      },
      {
        key: "circle:3",
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
        key: "service:4",
        name: "国际课程整体配套",
      },
      {
        key: "service:5",
        name: "信息化校园平台"
      },
      {
        key: "service:6",
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

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const models = ['模块1', '模块2', '模块3', '模块4', '模块5', '模块6'];
    const w = document.body.clientWidth;
    const { ifshow, current, team, service } = this.state;
    return (
      <Layout style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Header className={styles.indexheader}>
          <div className={styles.minddle}>
            <Link to='/' ><img src="./assets/images/logos.png" alt="" /></Link>
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
                  <Menu.Item key="circle:1">企业介绍</Menu.Item>
                  <Menu.Item key="circle:2">发展历程</Menu.Item>
                  <Menu.Item key="circle:3">企业成绩</Menu.Item>
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
                  <Menu.Item key="service:4">国际课程整体配套</Menu.Item>
                  <Menu.Item key="service:5">信息化校园平台</Menu.Item>
                  <Menu.Item key="service:6">大型国际教育活动</Menu.Item>
                </SubMenu>
                <Menu.Item key="team">
                  <Icon type="team" />
                  合作伙伴
              </Menu.Item>

                <Menu.Item key="mail">
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
                            <li>地址：xxxxxxxxxxxxxx</li>
                            <li>电话：16248974154</li>
                          </ul>
                          <Button href='https://j.map.baidu.com/KaghG' target="_blank" style={{ margin: "0px auto", display: "block", maxWidth: 140 }} icon="compass">
                            导航
                        </Button>
                        </div>
                      </Col>

                      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <div className={styles.indexstyle}>
                          <h2>微信公众号</h2>
                          <div></div>
                          <img src="./assets/images/qrcode.png" alt="" />
                        </div>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <div className={styles.indexstyle}>
                          <h2>在线咨询</h2>
                          <div></div>
                          <Button href='http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAyNTk2Nl8yOTI4MzhfNDAwODAwNTc5MF8yXw'
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
                current: "team",
                ifshow: false
              })
            }}>
              <p style={{ textAlign: "center" }}>合作伙伴</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className={current.indexOf("mail") != -1 ? styles.indexcols : styles.indexcol} onClick={() => {
              this.setState({
                ifshow: false,
                current: "mail",
              })
            }}>
              <p style={{ textAlign: "center" }}>联系我们</p>
            </Col>
            <Col span={24} style={{ backgroundColor: ifshow ? "rgba(0,0,0,0.1)" : "transparent", height: ifshow ? 122 : 1, transition: "all 0.4s", overflow: "hidden" }}>
              {
                this.state.current.indexOf("circle") != -1&&team.map((item,i)=>(
                  <Col span={8} style={{ cursor: "pointer" }} onClick={() => {
                    this.setState({
                      current: item.key,
                    })
                  }}>
                <p style={{ textAlign: "center", color: current == item.key ? "#d95750" : "#666",height:54,display:"flex",justifyContent:"center",alignItems:"center",margin:0,fontSize:"0.7rem",padding:"0px 4px"}}>{item.name}</p>
              </Col>
              ))
              }{
                this.state.current.indexOf("service") != -1 && service.map((item, i) => (
                  <Col span={8} style={{ cursor: "pointer" }} onClick={() => {
                    this.setState({
                      current: item.key,
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

export default connect()(IndexPage);
