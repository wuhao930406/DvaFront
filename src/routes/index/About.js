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
  constructor(props) {
    super(props);
    this.state = {
      section2: [
        {
          title: "海外实体学校",
        },
        {
          title: "Famous北美在线学校",
        },
        {
          title: "Famous北美离岸私塾",
        },
        {
          title: "国际课程整体配套",
        },
        {
          title: "校园信息化平台",
        },
        {
          title: "大型国际教育活动",
        },
      ]

    }
  }

  render() {
    let { section2 } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.mostbanner} style={{ background: `url(./assets/images/aboutus.jpg) no-repeat center`,backgroundSize:"cover" }}>
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
        <div className={styles.minddle} style={{ paddingTop: 20 }}>
          <Row style={{ margin: 0 , backgroundColor: "#fff" }}>
            <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14} style={{ padding: "3rem 2.6rem", backgroundColor: "#fff" }}>
              <SubTitles
                title="海学达国际教育"
                tstyle={{ fontSize: 36, color: "#cd2920" }}
                lstyle={{ backgroundColor: "#cd2920" }}
                desc="海学达国际教育集团是一家集国际课程输出、教育产品研发、教育信息化服务等于一体的大型综合性教育科技集团。作为国际教育行业的探索者和先行者，IAC将北美最领先的 “ALTSCHOOL”精英教育模式（比尔盖茨、扎克伯格鼎力推荐）首次引入中国，以个性化发展教育为基础，以教学实际为根基，与全球优秀教育机构、一流科技企业共同合作，在6大板块、13个领域深入研究，打造出全国领先的教育信息化核心技术和优质完善的国际教育体系。自成立以来，IAC国际教育始终致力于为世界上的每一个学生提供高端、平等的国际化学术交流平台和最优化的国际课程体系，帮助学生成长为主动学习与探索、善于反思与创新、具有国际视野和社会责任心的世界公民和未来青年领袖。"
                dstyle={{ color: "#666", fontSize: "16px" }}
              >
              </SubTitles>
              <div className={styles.flexrow}>
                <a href="http://www.baidu.com">
                  <img style={{ width: 20, marginRight: 20 }} src="./assets/images/email.png" alt="" />
                </a>
                <a href="http://www.baidu.com">
                  <img style={{ width: 20 }} src="./assets/images/message.png" alt="" />
                </a>
              </div>

            </Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10} style={{ padding: "3rem 2.6rem", backgroundColor: "#737373" }}>
              <SubTitles
                title="我们的服务"
                tstyle={{ fontSize: 18, color: "#fff" }}
                lstyle={{ backgroundColor: "#bfbfbf" }}
                desc="我们为广大莘莘学子服务"
                dstyle={{ color: "#bfbfbf", fontSize: "14px" }}
              >
              </SubTitles>
              <ul className={styles.service}>
                {
                  section2.map((item, i) => {

                    return (
                      <Link to="" key={i}>
                        <li>
                          <b></b>
                          <div>
                            <img src={`./assets/images/indexiconc${i + 1}.png`} alt="" />
                            <img src={`./assets/images/indexicon${i + 1}.png`} alt="" />
                          </div>
                          <p>
                            {item.title}
                          </p>
                          <img src="./assets/images/eyes.png" alt="" />

                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </Col>
          </Row>

          <Row style={{ margin: 0, marginTop: 20 , backgroundColor: "#fff"}}>
            <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7} style={{ padding: "3rem 2.6rem", backgroundColor: "#fff" }}>
              <SubTitles
                title="办公环境"
                tstyle={{ fontSize: 18, color: "#d95750" }}
                lstyle={{ backgroundColor: "#d95750" }}
                desc="海学达国际教育总部位于xx，国际教育之路全面开启并顺势蔓延，给许多合作伙伴留下美誉"
                dstyle={{ color: "#666", fontSize: "14px" }}
              >
              </SubTitles>
              <div className={styles.ifont}>
                <p>300 <span>m<sup>2</sup></span></p>
                <p>办公总面积</p>

              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
              <div className={styles.pichover} style={{ background: `url(./assets/images/evn1.jpg) no-repeat center`, backgroundSize: "cover", width: "100%", height: "410px" }}>
                <p>
                  接待室
                  </p>
              </div>
            </Col>
          </Row>


          <Row style={{ margin: 0, marginTop: 20 }}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0"}}>
              <div className={styles.pichover} style={{ background: `url(./assets/images/evn2.jpg) no-repeat center`, backgroundSize: "cover", width: "100%", height: "410px" }}>
                <p>
                  小会议室
                    </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0"}}>
              <div className={styles.pichover} style={{ background: `url(./assets/images/evn3.jpg) no-repeat center`, backgroundSize: "cover", width: "100%", height: "410px" }}>
                <p>
                  大会议室
                    </p>
              </div>
            </Col>
          </Row>

          <Row style={{ margin: 0, marginTop: 20, backgroundColor: "#737373"  }}>
            <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
              <div className={styles.pichover} style={{ background: `url(./assets/images/evn4.jpg) no-repeat center`, backgroundSize: "cover", width: "100%", height: "410px" }}>
                <p>
                  事业墙
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7} style={{ padding: "24px 24px", backgroundColor: "#737373" }}>
              <SubTitles
                title="海学达景愿"
                tstyle={{ fontSize: 18, color: "#fff" }}
                lstyle={{ backgroundColor: "#fff" }}
                desc="海学达国际教育集团坚持以学生为中心，把提高质量作为教育事业的核心。基于多年来在国际教育领域的探索实践和反思总结，以及对国际先进教育理念、课程体系、大学选才标准的调研与分析，IAC国际教育对国际化人才的培养模式和国际教育的本土化形成了深刻见解，积累了丰富的经验与资源。通过不断研发和引进海内外优质教育资源，构建中外人文交流与教育合作的平台，IAC国际教育将为中国学生创造更多享受国际一流教育的机会，促进国际教育行业的可持续发展。"
                dstyle={{ color: "#f0f0f0", fontSize: "14px" }}
              >
              </SubTitles>
            </Col>
          </Row>


        </div>






      </div>
    );

  }


}


export default About;