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
                ]
            },

        }
    }

    render() {
        let { data } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.mostbanner} style={{ background: `url(./assets/images/archiev.jpg) no-repeat center` }}>
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
                                title="海学达国际教育"
                                tstyle={{ fontSize: 24, color: "#cd2920" }}
                                lstyle={{ backgroundColor: "transparent" }}
                                desc="致力于推动各类教研产权的开发及维护,更好地为广大海学达学子服务"
                                dstyle={{ color: "#666", fontSize: "14px" }}
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
                                title="国际化布局"
                                tstyle={{ fontSize: 18, color: "#000" }}
                                lstyle={{ backgroundColor: "#bfbfbf" }}
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
                                title="教职员工"
                                tstyle={{ fontSize: 18, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
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


                    <Row style={{ margin: 0, marginTop: 20 }}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
                            <div className={styles.pichover} style={{ background: `url(./assets/images/evn2.jpg) no-repeat center`, backgroundSize: "cover", width: "100%", height: "410px" }}>
                                <p>
                                    小会议室
                    </p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
                            <div className={styles.pichover} style={{ background: `url(./assets/images/evn3.jpg) no-repeat center`, backgroundSize: "cover", width: "100%", height: "410px" }}>
                                <p>
                                    大会议室
                    </p>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{ margin: 0, marginTop: 20 }}>
                        <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} style={{ padding: "0", margin: 0, height: 410, backgroundColor: "#f0f0f0" }}>
                            <div className={styles.pichover} style={{ background: `url(./assets/images/evn4.jpg) no-repeat center`, backgroundSize: "cover", width: "100%", height: "410px" }}>
                                <p>
                                    事业墙
                </p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7} style={{ padding: "24px 24px", height: 410, backgroundColor: "#737373" }}>
                            <SubTitles
                                title="海学达景愿"
                                tstyle={{ fontSize: 18, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc="海学达国际教育集团坚持以学生为中心，把提高质量作为教育事业的核心。基于多年来在国际教育领域的探索实践和反思总结，以及对国际先进教育理念、课程体系、大学选才标准的调研与分析，海学达国际教育对国际化人才的培养模式和国际教育的本土化形成了深刻见解，积累了丰富的经验与资源。通过不断研发和引进海内外优质教育资源，构建中外人文交流与教育合作的平台，海学达国际教育将为中国学生创造更多享受国际一流教育的机会，促进国际教育行业的可持续发展。"
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


export default Achiev;