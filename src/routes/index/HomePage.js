import { Row, Col, Card, Icon, PageHeader, Carousel } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
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
      section1: [
        {
          url: "./assets/images/index_icon1.png",
          title: "- 办学特色 -",
          desc: <p style={{ textAlign: "center", margin: 0, padding: 0, color: "#999" }}>
            北美个性化培养+中国基础教育<br />
            线上学历教育+线下辅助教学<br />
            北美教育局认证名师+上海交大教辅团队
          </p>
        },
        {
          url: "./assets/images/index_icon2.png",
          title: "- 教学资源 -",
          desc: <p style={{ textAlign: "center", margin: 0, padding: 0, color: "#999" }}>
            首家北美K12学历教育中国落地<br />
            OSSD、AP国际官方认证课程体系提供商<br />
            STEAM等多类国际级竞赛中国签约协办方
          </p>
        },
        {
          url: "./assets/images/index_icon3.png",
          title: "- 科技融合 -",
          desc: <p style={{ textAlign: "center", margin: 0, padding: 0, color: "#999" }}>
            打造哈佛、麻省理工同级别学习管理平台<br />
            利用网络教学平台方案整合国际超一流资源<br />
            AI智能家教辅助系统，大数据学情分析
          </p>
        }

      ],
      section2: [
        {
          title: "海外实体学校",
          desc: "以北美实体学校为办学基础，提供国际认证教学体系、北美认证教师资源与国际人才培养方案，为中国莘莘学子提供最优质的国际化教育，开拓更广阔的国际发展空间。"
        },
        {
          title: "Famous北美在线学校",
          desc: "提供北美高中学历教育、美国大学先修课程以及学术背景提升途径，将学生的英语语言应用、学分补修体系、高中课程体系、学习行为习惯等方面与世界名校全面对接。",
        },
        {
          title: "Famous北美离岸私塾",
          desc: "为中国学生提供精英型国外大学准备项目。学生可通过6-8个月的高质量课程学习，满足海外大学的全部学术要求，快速搭建通往世界名校的“黄金跳板”。",
        },
        {
          title: "国际课程整体配套",
          desc: "为国际学校提供完整解决方案。包含北美认证教学体系、北美认证学科教师、体系化课程内容、科学有效的授课模式，为学生颁布海外毕业证书，为教师提佛那个海外远程培训及海外认证。",
        },
        {
          title: "校园信息化平台",
          desc: "以科技辅助教师教学为核心，贯穿教务管理、学生学习、家校沟通等多个环节；通过AI、大数据、碎片式直连传输结合传统计算机技术，集中整合北美优质教育资源， 引领教育信息化新时代。",
        },
        {
          title: "大型国际教育活动",
          desc: "拥有世界级别赛事及教育公益活动的多年参办经验。首届国际青少年无人机大赛协办方，滑铁卢数学竞赛中国俱乐部唯一签约承办单位，加拿大大型教育公益讲座联合举办方。",
        },
      ]
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
    const { getall } = this.props.example,
      { section1, section2 } = this.state;

    return (
      <Row style={{ margin: 0 }}>
        <div className={styles.dotc}>
          <Carousel autoplay speed={800} draggable autoplaySpeed={4000}>
            {
              getall &&
              getall.map((Item, i) => {
                let imgurl = `http://localhost:8000/edu${Item.url}`
                return (
                  Item.jumpurl ?
                    <Link to={Item.jumpurl} key={i} className={styles.banner}>
                      <img src={imgurl} alt="" style={{ width: "100%", height: "auto" }} />
                    </Link> :
                    <div key={i} className={styles.banner}>
                      <img src={imgurl} alt="" style={{ width: "100%", height: "auto" }} />
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
              section1.map((item, i) => (
                <Col key={i} xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} style={{ margin: "12px 0px" }}>
                  <div className={styles.hovered}>
                    <img style={{ width: "38%", margin: "12px auto", maxWidth: 140 }} src={item.url} alt="" />
                    <h3 style={{ textAlign: "center" }}>{item.title}</h3>
                    {item.desc}
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
                    海学达国际教育集团是一家集国际课程输出、教育产品研发、教育信息化服务等于一体的大型综合性教育科技集团。
                    作为国际教育行业的探索者和先行者，IAC国际教育将北美最领先的 “ALTSCHOOL”精英教育模式（比尔盖茨、扎克伯格鼎力推荐）首次引入中国，以个性化发展教育为基础，以教学实际为根基，与全球优秀教育机构、一流科技企业共同合作，在6大板块、13个领域深入研究，打造出全国领先的教育信息化核心技术和优质完善的国际教育体系。自成立以来，IAC国际教育始终致力于为世界上的每一个学生提供高端、平等的国际化学术交流平台和最优化的国际课程体系，帮助学生成长为主动学习与探索、善于反思与创新、具有国际视野和社会责任心的世界公民和未来青年领袖
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
                section2.map((item, i) => {
                  return (
                    <Col key={i} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8} style={{padding:24}}>
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
                          <p>{item.desc}</p>  
                        </div>
                        <div  className={styles.hidebac}>
                        </div> 
                        <div className={styles.jump}>
                            <Link style={{display:"flex",justifyContent:"center",alignItems:"center",width:30,height:30}} to="/404">
                              <img style={{width:20}} src="./assets/images/eyes.png" alt=""/>  
                            </Link> 
                        </div> 
                       
                      </div>
                    </Col>
                  )
                })

              }


            </Row>
          </Row>
        </div>


      </Row>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;