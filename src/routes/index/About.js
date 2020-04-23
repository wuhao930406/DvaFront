import { Row, Col, Card, Icon, PageHeader, Carousel, Spin } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example, loading }) => ({
  example,
  loads: loading.effects['example/getaboutus']
}))
class About extends Component {
  constructor(props) {
    super(props);
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
    //getenv
    this.setNewState("getaboutus");
    this.setNewState("getenv");
    this.setNewState("getservice");
  }


  render() {
    let { getaboutus, getenv, getservice,getpublic } = this.props.example;

    function getbac(key,i){
      let bacurl = "",res="";
      if(getpublic){
        getpublic.map((item)=>{
          if(item.title==key){
            bacurl = item[i]
          }
        })
      }
      if( i==="bacurl" ){
       res = bacurl?bacurl:"./assets/images/aboutus.jpg";
      }else{
       res = bacurl?bacurl:"" 
      }
      return res
    }  

    function geturl(i) {
      if (getenv[i]) {
        return `/edu${getenv[i].url}`
      } else {
        return `/edu/public/404.png`
      }
    }


    return (
      <div className={styles.container}>
        <Spin spinning={this.props.loads}>
          <div className={styles.mostbanner} style={{ background: `url(${getbac("About","bacurl")}) no-repeat center`, backgroundSize: "cover" }}>
            <div className={styles.minddle}>
              <SubTitles
                title="企业介绍"
                tstyle={{ fontSize: 36, color: "#fff" }}
                lstyle={{ backgroundColor: "#fff" }}
                desc={getbac("About","desc")}
                dstyle={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 8, color: "#fff" }}
              >
              </SubTitles>
            </div>
          </div>
          <div className={styles.minddle} style={{ paddingTop: 20 }}>
            <Row style={{ margin: 0, backgroundColor: "#fff" }}>
              <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14} style={{ padding: "3rem 2.6rem", backgroundColor: "#fff" }}>
                <SubTitles
                  title="海学达国际教育"
                  tstyle={{ fontSize: 36, color: "#cd2920" }}
                  lstyle={{ backgroundColor: "#cd2920" }}
                  desc={getaboutus.companydesc}
                  dstyle={{ color: "#333", fontSize: "16px" }}
                >
                </SubTitles>
                <div className={styles.flexrow} style={{ marginTop: 18 }}>
                  <a href="mailto:haixueda@163.com">
                    <img style={{ width: 20, marginRight: 20 }} src="./assets/images/email.png" alt="" />
                  </a>
                  <a href={`http://wpa.qq.com/msgrd?v=3&uin=${this.props.example.getcontact.contact?this.props.example.getcontact.contact.qq:"2650574358"}&site=qq&menu=yes`}>
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
                    getservice.map((item, i) => {
                      return (
                        <Link to={item.id==4?"/main/internation":item.id==5?"/main/school":item.id==6?"/main/activity":""} key={i}>
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

            <Row style={{ margin: 0, marginTop: 20, backgroundColor: "#fff" }}>
              <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7} style={{ padding: "3rem 2.6rem", backgroundColor: "#fff" }}>
                <SubTitles
                  title="办公环境"
                  tstyle={{ fontSize: 18, color: "#d95750" }}
                  lstyle={{ backgroundColor: "#d95750" }}
                  desc={getaboutus.workenv}
                  dstyle={{ color: "#333", fontSize: "14px" }}
                >
                </SubTitles>
                <div className={styles.ifont}>
                  <p>{getaboutus.plant} <span>m<sup>2</sup></span></p>
                  <p>办公总面积</p>

                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
                <div className={styles.pichover} style={{ background: `url(${geturl(0)}) no-repeat center`, width: "100%", height: "410px" }}>
                  <p>
                    {getenv[0] ? getenv[0].picname : "请上传图片"}
                  </p>
                </div>
              </Col>
            </Row>


            <Row style={{ margin: 0, marginTop: 20 }}>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
                <div className={styles.pichover} style={{ background: `url(${geturl(1)}) no-repeat center`, width: "100%", height: "410px" }}>
                  <p>
                    {getenv[1] ? getenv[1].picname : "请上传图片"}
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
                <div className={styles.pichover} style={{ background: `url(${geturl(2)}) no-repeat center`, width: "100%", height: "410px" }}>
                  <p>
                    {getenv[2] ? getenv[2].picname : "请上传图片"}
                  </p>
                </div>
              </Col>
            </Row>

            <Row style={{ margin: 0, marginTop: 20, backgroundColor: "#737373" }}>
              <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
                <div className={styles.pichover} style={{ background: `url(${geturl(3)}) no-repeat center`, width: "100%", height: "410px" }}>
                  <p>
                    {getenv[3] ? getenv[3].picname : "请上传图片"}
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

        </Spin>




      </div>
    );

  }


}


export default About;