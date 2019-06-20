import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example }) => ({
    example
}))
class Internation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name:"美国大学先修课程",
                    url:"./assets/images/international-img1.jpg"
                },
                {
                    name:"加拿大高中学历课程",
                    url:"./assets/images/international-img2.jpg"
                },
                {
                    name:"北美小学同步课程",
                    url:"./assets/images/international-img3.jpg"
                },
                {
                    name:"国际背景提升课程",
                    url:"./assets/images/international-img4.jpg"
                },

            ],

        }
    }

    render() {
        let { data } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.mostbanner} style={{ background: `url(./assets/images/internation.jpg) no-repeat center`,backgroundSize:"cover" }}>
                    <div className={styles.minddle}>
                        <SubTitles
                            title="国际课程整体配套"
                            tstyle={{ fontSize: 36, color: "#fff" }}
                            lstyle={{ backgroundColor: "#fff" }}
                            desc="海学达国际教育致力于培养高素质国际人才"
                            dstyle={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 8, color: "#fff" }}
                        >
                        </SubTitles>
                    </div>
                </div>
                <div className={styles.minddle} style={{ paddingTop: 20 }}>
                    <Row style={{ margin: 0, backgroundColor: "#fff" }}>
                        <Col span = {24} style={{ padding: "2.4rem 2.6rem", backgroundColor: "#fff" }}>
                            <SubTitles
                                title={<span>课程简介 <Icon type="swap-right" /></span>}
                                tstyle={{ fontSize: 24, color: "#cd2920" }}
                                lstyle={{ backgroundColor: "transparent" }}
                                desc="IAC国际教育专注于建立国际学校，合作办学，引入优秀的国际课程体系到中国，并输出中国课程体系到海外。作为国际教育行业的探索者和先行者，IAC依托于北美自建实体教育资源，将北美最领先的 “ALTSCHOOL”精英教育模式（比尔盖茨、扎克伯格鼎力推荐）首次引入中国，以个性化发展教育为基础，以教学实际为根基，专注于精选并提供北美优质的课程体系及院校资源，与此同时，还搭建了专业的学术标准研发和质量控制中心对确定运作这些课程体系的学校进行全方位的学术支持和质量监控， 确保教学和管理达到标准。"
                                dstyle={{ color: "#333", fontSize: "14px" }}
                            >
                            </SubTitles>
                            <div className={styles.flexrow} style={{ marginTop: 60 }}>
                                <a href="http://www.baidu.com">
                                    <img style={{ width: 20, marginRight: 20 }} src="./assets/images/email.png" alt="" />
                                </a>
                                <a href="http://www.baidu.com">
                                    <img style={{ width: 20 }} src="./assets/images/message.png" alt="" />
                                </a>
                            </div>

                        </Col>
                    </Row>

                    <Row style={{ margin: 0, marginTop: 20,backgroundColor:"#fff",padding: "3rem 2.6rem" }}>
                        <Col span={24}>
                            <SubTitles
                                title={<span>课程模块 </span>}
                                tstyle={{ fontSize: 18, color: "#333" }}
                                lstyle={{ backgroundColor: "transparent" }}
                            >
                            </SubTitles>
                        </Col>
                        {
                            data.map((item,i)=>{
                                return (
                                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className={styles.modulehover} style={{backgroundImage:`url(${item.url})`}}>
                                        <p>{item.name}</p>   
                                        <Link to="/"><Icon type="eye" style={{marginTop:80,color:"#fff"}}></Icon></Link>    
                                    </Col> 
                                )
                            })
                        }
                      


                    </Row>

                  
                </div>






            </div>
        );

    }


}


export default Internation;