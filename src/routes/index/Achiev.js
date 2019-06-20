import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example }) => ({
    example
}))
class Achiev extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                section1: [
                    {
                        num: "3,家",
                        name: "北美K12及辅导学校",
                    },
                    {
                        num: "5,家",
                        name: "中国各省市线下合作中心",
                    },
                    {
                        num: "6,间",
                        name: "中国，韩国及西班牙办公室",
                    },
                    {
                        num: "2,家",
                        name: "北美幼儿园及小学",
                    },
                ],
                section2: [
                    {
                        num: "450,+",
                        name: "海外教职员工"
                    },
                    {
                        num: "7,%",
                        name: "博士以上学历"
                    },
                    {
                        num: "97,%",
                        name: "本科以上学历"
                    },
                    {
                        num: "68,%",
                        name: "女性教职员工"
                    },
                    {
                        num: "61,%",
                        name: "北美籍员工"
                    },
                    {
                        num: "26,%",
                        name: "中国籍员工"
                    },
                ],
                section3:[
                    {
                        num: "10,+",
                        name: "常青藤高校联盟因思德校友"
                    },
                    {
                        num: "NO.6",
                        name: "北美数学竞赛（AMC）全球排名"
                    },
                    {
                        num: "NO.2",
                        name: "数学竞赛（CEMC）团体排名"
                    },
                    {
                        num: "160,+",
                        name: "因思德学子累计获得奖学金"
                    },
                    {
                        num: "200,+",
                        name: "世界前100大学录取"
                    },
                    {
                        num: "400,+",
                        name: "美国数学大联盟杯赛累计获得人数"
                    },
                    
                ],
                section4:[
                    {
                        num: "20,+",
                        name: "软件系统著作权"
                    },
                    {
                        num: "90,+",
                        name: "书记作品著作权"
                    },
                    {
                        num: "2000,+",
                        name: "教学视频版权"
                    },
                    {
                        num: "40,+",
                        name: "商标权"
                    },
                    {
                        num: "20,+",
                        name: "独家课程著作权"
                    },
                    {
                        num: "100,+",
                        name: "课程版权"
                    },
                ]
            },

        }
    }

    render() {
        let { data } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.mostbanner} style={{ background: `url(./assets/images/archiev.jpg) no-repeat center`,backgroundSize:"cover" }}>
                    <div className={styles.minddle}>
                        <SubTitles
                            title="企业成绩"
                            tstyle={{ fontSize: 36, color: "#fff" }}
                            lstyle={{ backgroundColor: "#fff" }}
                            desc="海学达国际教育致力于培养高素质国际人才"
                            dstyle={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 8, color: "#fff" }}
                        >
                        </SubTitles>
                    </div>
                </div>
                <div className={styles.minddle} style={{ paddingTop: 20 }}>
                    <Row style={{ margin: 0, backgroundColor: "#f6f6f6" }}>
                        <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7} style={{ padding: "2.4rem 2.6rem", backgroundColor: "#f6f6f6" }}>
                            <SubTitles
                                title={<span>海学达成绩 <Icon type="swap-right" /></span>}
                                tstyle={{ fontSize: 24, color: "#cd2920" }}
                                lstyle={{ backgroundColor: "transparent" }}
                                desc="致力于推动各类教研产权的开发及维护,更好地为广大海学达学子服务"
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
                        <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} style={{ padding: "2.4rem 2.6rem 80px 2.6rem", backgroundColor: "#fff", position: "relative" }}>
                            <SubTitles
                                title="1.国际化布局"
                                tstyle={{ fontSize: 18, color: "#d95750" }}
                                lstyle={{ backgroundColor: "#d95750",width:48 }}
                                desc="海学达国际教育的合作伙伴遍布全球，平台广阔。截止2018年，已与美国、加拿大、英国、西班牙、韩国等多所顶级公立学校、优质私立学校、政府机构、学术组织及机构、权威认证机构、知名教育集团等签署协议，进行长期深入、多模式的合作。 "
                                dstyle={{ color: "#333", fontSize: "14px" }}
                                advance={data.section1}
                            >
                            </SubTitles>
                            <img style={{ position: "absolute", right: 24, bottom: 24, height: 70 }} src="./assets/images/worldbac.png" alt="" />
                        </Col>
                    </Row>

                    <Row style={{ margin: 0, marginTop: 20 }}>
                        <Col span={24} style={{ padding: "3rem 2.6rem", background: `url(./assets/images/teacher.jpg) no-repeat center`, backgroundSize: "cover" }}>
                            <SubTitles
                                title="2.教职员工"
                                tstyle={{ fontSize: 18, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff",width:48 }}
                                desc="由全球著名教育专家和北美一线认证教师组成的IAC国际教育教学及管理团队，以充分激发学生潜能，提供专业学习指导，培养学生养成独立思考习惯，训练学生具备批判性思维及推理的能力，提升学员的个人创造力，保持学员持续学习的热情为己任，不断总结和提高自身专业能力，更好地为广大IAC学子服务。 "
                                dstyle={{ color: "#f0f0f0", fontSize: 14 }}
                                advance={data.section2}
                                advancestyle={{
                                    h2: {
                                        color: "#fff"
                                    },
                                    p: {
                                        color: "#fff"
                                    }
                                }
                                }
                                span={8}
                            >
                            </SubTitles>
                        </Col>
                    </Row>

                    <Row style={{ margin: 0, marginTop: 20,  backgroundColor: "#737373", }}>
                        <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11} style={{ margin: 0,padding: "3rem 2.6rem",background:`url(./assets/images/archiev.png) no-repeat 90% 3rem`,backgroundSize:"32px auto", backgroundColor: "#fff" }}>
                            <SubTitles
                                title="3.教学成就"
                                tstyle={{ fontSize: 18, color: "#ce281f" }}
                                lstyle={{ backgroundColor: "#d95750",width:48 }}
                                desc="集中北美优质教育资源，培养全面高素质国际人才。截止2018年，IAC国际教育通过体系化的北美认证学历教育、行之有效的背景提升训练和完善的升学指导服务体系，帮助学生全面提升个人综合能力与申请竞争力，为最终进入海外一流学府学习深造打下坚实基础。"
                                dstyle={{ color: "#333", fontSize: 14 }}
                                advance={data.section3}
                                advancestyle={{
                                    h2: {
                                        color: "#d95750"
                                    },
                                    p: {
                                        color: "#666"
                                    }
                                }
                                }
                                span={8}
                            >
                            </SubTitles>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={13} xl={13} xxl={13} style={{ padding: "3rem 2.6rem", margin: 0,background:`url(./assets/images/jy.png) no-repeat 90% 3rem`,backgroundSize:"32px auto" }}>
                            <SubTitles
                                title="4.教研产权"
                                tstyle={{ fontSize: 18, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff",width:48 }}
                                desc="为促进“互联网+教育”，IAC国际教育积极与全球优秀教育机构、一流科技企业共同合作，以发展个性化教育为基础，以教学实际为出发点，致力于推动各类教研产权的开发及维护，并主动扩大科研人员的自主权，让集团更大释放创新活力。 "
                                dstyle={{ color: "#f0f0f0", fontSize: 14 }}
                                advance={data.section4}
                                advancestyle={{
                                    h2: {
                                        color: "#fff"
                                    },
                                    p: {
                                        color: "#fff"
                                    }
                                }
                                }
                                span={8}
                            >
                            </SubTitles>
                        </Col>
                    </Row>

                  
                </div>






            </div>
        );

    }


}


export default Achiev;