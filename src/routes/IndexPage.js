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
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;


class IndexPage extends Component {
  state = {
    visible: false,
    current: ""
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
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const models = ['模块1', '模块2', '模块3', '模块4', '模块5', '模块6'];
    const w = document.body.clientWidth;
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
                  <p>Ant Design ©2018 Created by Ant UED</p>
                </div>
              </div>
            </ScrollBar>
          </div>

        </Content>


        <Drawer
          placement="top"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <img src="./assets/images/logos.png" className={styles.logos} alt="" />
          <Row gutter={24} className={styles.indexrow}>
            {
              models.map((item) => (
                <Col key={item} xs={8} sm={8} md={8} lg={4} xl={4} className={styles.indexcol}>
                  <p style={{ textAlign: "center" }}>{item}</p>
                </Col>))
            }

          </Row>

        </Drawer>
      </Layout>
    );
  }
}

export default connect()(IndexPage);
