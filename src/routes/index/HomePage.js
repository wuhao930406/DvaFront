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
      section1:[
        {
          url:"./assets/images/index_icon1.png",
          title:"- 办学特色 -",
          desc: <p style={{textAlign:"center",margin:0,padding:0,color:"#4f4f4f"}}> 
            北美个性化培养+中国基础教育<br/>
            线上学历教育+线下辅助教学<br/>
            北美教育局认证名师+上海交大教辅团队
          </p>
        },
        {
          url:"./assets/images/index_icon2.png",
          title:"- 教学资源 -",
          desc: <p style={{textAlign:"center",margin:0,padding:0,color:"#4f4f4f"}}> 
            首家北美K12学历教育中国落地<br/>
            OSSD、AP国际官方认证课程体系提供商<br/>
            STEAM等多类国际级竞赛中国签约协办方
          </p>
        },
        {
          url:"./assets/images/index_icon3.png",
          title:"- 科技融合 -",
          desc: <p style={{textAlign:"center",margin:0,padding:0,color:"#4f4f4f"}}> 
            打造哈佛、麻省理工同级别学习管理平台<br/>
            利用网络教学平台方案整合国际超一流资源<br/>
            AI智能家教辅助系统，大数据学情分析
          </p>
        }

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
          {section1} = this.state;

    return (
      <Row>
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
          <Row gutter={24}>
            <Col style={{marginBottom:63}}>
              <SubTitles title={"海学达国际教育"} tstyle={{ color: "#d95750" }}
              desc = "海学达国际教育的优势" dstyle={{color:"#7a7a7a"}}
              ></SubTitles>
            </Col>

            {
              section1.map((item,i) => (
                <Col key={i} xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} style={{margin:"12px 0px"}}>
                   <img style={{width:"38%",margin:"12px auto",maxWidth:140}} src={item.url} alt=""/>
                   <h3 style={{textAlign:"center"}}>{item.title}</h3>  
                   {item.desc}

                </Col>
              ))
            }


          </Row>

        </div>
      </Row>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;