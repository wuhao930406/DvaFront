import { Row, Col, Card, Icon, PageHeader, Carousel } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example }) => ({
  example
}))
class About extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mostbanner} style={{ backgroundImage: `url(../../assets/images/aboutus.jpg)` }}>
          <div className={styles.minddle}>
            <SubTitles
              title="企业介绍"
              tstyle={{ fontSize: 36, color: "#fff" }}
              lstyle={{ backgroundColor: "#fff" }}
              desc="海学达国际教育致力于培养高素质国际人才"
              dstyle={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 8, color: "#fff" }}
            >
            </SubTitles>
          </div>
        </div>
        <div className={styles.minddle}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14} style={{ padding: "80px 68px", backgroundColor: "#fff" }}>
              <SubTitles
                title="海学达国际教育"
                tstyle={{ fontSize: 36, color: "#cd2920" }}
                lstyle={{ backgroundColor: "#cd2920" }}
                desc="海学达国际教育集团是一家集国际课程输出、教育产品研发、教育信息化服务等于一体的大型综合性教育科技集团。作为国际教育行业的探索者和先行者，IAC将北美最领先的 “ALTSCHOOL”精英教育模式（比尔盖茨、扎克伯格鼎力推荐）首次引入中国，以个性化发展教育为基础，以教学实际为根基，与全球优秀教育机构、一流科技企业共同合作，在6大板块、13个领域深入研究，打造出全国领先的教育信息化核心技术和优质完善的国际教育体系。自成立以来，IAC国际教育始终致力于为世界上的每一个学生提供高端、平等的国际化学术交流平台和最优化的国际课程体系，帮助学生成长为主动学习与探索、善于反思与创新、具有国际视野和社会责任心的世界公民和未来青年领袖。"
                dstyle={{ color: "#202020", fontSize: "0.7rem" }}
              >
              </SubTitles>
              <div className={styles.flexrow}>
                <a href="http://www.baidu.com">
                  <img style={{ width: 20, marginRight: 10 }} src="./assets/images/email.png" alt="" />
                </a>
                <a href="http://www.baidu.com">
                  <img style={{ width: 20 }} src="./assets/images/message.png" alt="" />
                </a>
              </div>

            </Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10} style={{ padding: "80px 68px", backgroundColor: "#737373" }}>

            </Col>

          </Row>
        </div>






      </div>
    );

  }


}


export default About;