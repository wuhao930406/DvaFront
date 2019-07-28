import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline, Spin } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example, loading }) => ({
    example,
    loads: loading.effects['example/getcourse']
}))
class Internation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "美国大学先修课程",
                    url: "./assets/images/international-img1.jpg"
                },
                {
                    name: "加拿大高中学历课程",
                    url: "./assets/images/international-img2.jpg"
                },
                {
                    name: "北美小学同步课程",
                    url: "./assets/images/international-img3.jpg"
                },
                {
                    name: "国际背景提升课程",
                    url: "./assets/images/international-img4.jpg"
                },
            ],
            datas: [
                {
                    title: "OSSD加拿大高中学分 配套课程",
                    desc: `为学生发布加拿大高中毕业证,9-12年级，45门课，学科全覆盖,英联邦教育体系，学分全球通用,OCT加拿大认证教师全程授课`,
                },
                {
                    title: "AP美国大学理事会(College Board)认证课程",
                    desc: "College Board认证编号：826542,北美大学先修课程系统讲解,AP课程最全面，知识点全覆盖"
                },
                {
                    title: "AP美国大学理事会 配套课程",
                    desc: `结课即发美国大学理事会认证成绩单,38门课程全面开放, AP本校教师代培及远程辅助`,
                },
                {
                    title: "北美数学思维训练课程",
                    desc: "对接滑铁卢数学竞赛(CEMC)、AMC(全美数学竞赛)、Math League(美国数学大联盟杯赛),大陆首版北美数学思维训练系列教材"
                }
                ,
                {
                    title: "北美公立高中国际课程",
                    desc: "对接加拿大安大略省多家公立高中姐妹学校,2+1/2.5+0.5/暑期混班等多种解决方案,学分完全转换，课程无缝对接,公立教育局指派教师资源，长期支持合作办学"
                }
                ,
                {
                    title: "升学申请服务体系",
                    desc: "北美升学顾问一对一建立申请方案，把控申请流程,海外文书申请团队，本校教师服务本校学生, 建立终生电子学习档案，保障申请内容质量"
                }
                ,
                {
                    title: "国际教育专项备用金",
                    desc: "国际学术交流专项奖学金,优秀师生激励奖学金, 国际教师交流会议,国际学生紧急助学金预案"
                }
                ,
                {
                    title: "课外活动及教育配套",
                    desc: "大学申请全程跟踪,十八种全国范围学生社团, 每月二次北美同步社会/学术活动,全球范围校友信息平台"
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
        this.setNewState("getcourse")
    }


    render() {
        let { data, datas } = this.state,
            { getcourse,getpublic } = this.props.example;
            function getbac(key, i) {
                let bacurl = "", res = "";
                if (getpublic) {
                    getpublic.map((item) => {
                        if (item.title == key) {
                            bacurl = item[i]
                        }
                    })
                }
                if (i === "bacurl") {
                    res = bacurl ? bacurl : "./assets/images/internation.jpg";
                } else {
                    res = bacurl ? bacurl : ""
                }
                return res
            }
        return (
            <Spin spinning={this.props.loads}>
                <div className={styles.container}>
                    <div className={styles.mostbanner} style={{ background: `url(${getbac("Internation","bacurl")}) no-repeat center`, backgroundSize: "cover" }}>
                        <div className={styles.minddle}>
                            <SubTitles
                                title="国际课程整体配套"
                                tstyle={{ fontSize: 36, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc={getbac("Internation","desc")}
                                dstyle={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 8, color: "#fff" }}
                            >
                            </SubTitles>
                        </div>
                    </div>
                    <div className={styles.minddle} style={{ paddingTop: 20 }}>
                        <Row style={{ margin: 0, backgroundColor: "#fff" }}>
                            <Col span={24} style={{ padding: "2.4rem 2.6rem", backgroundColor: "#fff" }}>
                                <SubTitles
                                    title={<span>课程简介 <Icon type="swap-right" /></span>}
                                    tstyle={{ fontSize: 24, color: "#cd2920" }}
                                    lstyle={{ backgroundColor: "transparent" }}
                                    desc={getcourse.coursedesc}
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

                        <Row style={{ margin: 0, marginTop: 20, backgroundColor: "#999", padding: "2.6rem 2.6rem 3rem 2.6rem" }}>
                            <Col span={24}>
                                <SubTitles
                                    title={<span><Icon type="appstore" /> 课程模块 </span>}
                                    tstyle={{ fontSize: 18, color: "#fff" }}
                                    lstyle={{ backgroundColor: "#fff" }}
                                >
                                </SubTitles>
                            </Col>
                            {
                                getcourse.cmodule?
                                getcourse.cmodule.map((item, i) => {
                                    return (
                                        <Col key={i} xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className={styles.modulehover} style={{ backgroundImage: `url(${item.url})` }}>
                                            <p>{item.title}</p>
                                            <a href={item.pdfurl} target="_blank"><Icon type="eye" style={{ marginTop: 80, color: "#fff" }}></Icon></a>
                                        </Col>
                                    )
                                }):null
                            }
                        </Row>

                        <Row style={{ margin: 0, marginTop: 20, backgroundColor: "#fff", padding: "2.6rem 2.6rem 3rem 2.6rem" }}>
                            <Col span={24}>
                                <SubTitles
                                    title={<span><Icon type="profile" /> 产品介绍 </span>}
                                    tstyle={{ fontSize: 18, color: "#d95750" }}
                                    lstyle={{ backgroundColor: "#d95750", marginBottom: 36 }}
                                >
                                </SubTitles>
                            </Col>
                            {
                                getcourse.cpro?
                                getcourse.cpro.map((item, i) => {
                                    return (
                                        <Col key={i} xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} className={styles.cursorhover} style={{ backgroundColor: i % 2 == 0 ? "#f9f9f9" : "#f0f0f0" }}>
                                            <div className={styles.imgcontain}>
                                                <img src={`./assets/images/curs${i + 1}.png`} alt="" />
                                                <img src={`./assets/images/cur${i + 1}.png`} alt="" />
                                            </div>

                                            <SubTitles
                                                title={<span>{item.title}</span>}
                                                tstyle={{ fontSize: 16, color: "#333" }}
                                                lstyle={{ backgroundColor: "transparent",display:"none" }}
                                                desc={item.desc}
                                                dstyle={{ fontSize: 14 }}
                                            >
                                            </SubTitles>

                                        </Col>
                                    )
                                }):null
                            }
                        </Row>

                    </div>






                </div>
            </Spin>

        );

    }


}


export default Internation;