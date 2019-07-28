import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline, Spin } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example, loading }) => ({
    example,
    loads: loading.effects['example/getcooperate']
}))
class Partner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    num: "5,+",
                    name: "顶级名校联合推出",
                },
                {
                    num: "50,+",
                    name: "资深教育/信息化顾问",
                },
                {
                    num: "500,+",
                    name: "专业教育从业人员",
                },
                {
                    num: "20,+",
                    name: "知识产权",
                },
            ],
            datas: [
                {
                    title: "全方位海内外资源平台",
                    desc: `收购/并购北美及欧洲实体学校，与中国上海交通大学教授及教师签约长期深入合作，为海内外合作校搭建了广阔的合作平台，无缝对接丰富教育资源。`,
                },
                {
                    title: "权威教学体系认证",
                    desc: `依托加拿大教育局和美国大学理事会的支持及监管，提供国际认证的北美高中教学体系－加拿大高中学历教育和美国大学先修课程，全面对接世界名校。`
                },
                {
                    title: "电子化信息支持",
                    desc: `自主研发的综合直播教学、教务管理、财务结算等一站式综合学习管理及服务体系，做到全系列公开透明化，获得各合作院校的高度认可。`,
                },
                {
                    title: "专业服务辐射全国",
                    desc: `全国定期教育巡讲、国际教师培训大会、学生学业紧急情况处理等，总公司可通过全网化的管理系统15分钟内出面指定方案，8小时内指派服务团队。`
                }
                ,
                {
                    title: "国际教育全方位解决方案",
                    desc: `为合作方解决项目营建、品牌对接、市场招生、师资储备、课程实施、学生服务等一系列中长期战略发展资源和支持服务。`
                }
                ,
                {
                    title: "多年国际教育成功经验",
                    desc: `自成立以来，始终专注于建立国际学校、合作办学，对国际化人才培养模式已形成深刻见解，可为各合作院校高质量办学保驾护航。`
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
        this.setNewState("getcooperate")
    }

    render() {
        let { data, datas } = this.state, 
        { getcooperate ,getpublic } = this.props.example;
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
                res = bacurl ? bacurl : "./assets/images/partner.jpg";
            } else {
                res = bacurl ? bacurl : ""
            }
            return res
        }

        return (
            <Spin spinning={this.props.loads}>
                <div className={styles.container}>
                    <div className={styles.mostbanner} style={{ background: `url(${getbac("Partner","bacurl")}) no-repeat center`, backgroundSize: "cover" }}>
                        <div className={styles.minddle}>
                            <SubTitles
                                title="合作伙伴"
                                tstyle={{ fontSize: 36, color: "#fff", textShadow: "1px 1px 4px #000" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc={getbac("Partner","desc")}
                                dstyle={{ backgroundColor: "rgba(0,0,0,0.4)", padding: 8, color: "#fff" }}
                            >
                            </SubTitles>
                        </div>
                    </div>
                    <div className={styles.minddle} style={{ paddingTop: 20 }}>
                        <Row style={{ margin: 0, backgroundColor: "#fff" }}>
                            <Col span={24} style={{ padding: "2.4rem 2.6rem", backgroundColor: "#fff" }}>
                                <SubTitles
                                    title={<span>我们的优势 <Icon type="arrow-down" /></span>}
                                    tstyle={{ fontSize: 24, color: "#cd2920" }}
                                    lstyle={{ backgroundColor: "transparent" }}
                                >
                                </SubTitles>
                                {
                                    getcooperate.adv ?
                                        getcooperate.adv.map((item, i) => {
                                            return (
                                                <Col key={i} xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} className={styles.cursorhover} style={{ backgroundColor: i % 2 == 0 ? "#f9f9f9" : "#f0f0f0", height: 400 }}>
                                                    <div className={styles.imgcontain}>
                                                        <img src={`./assets/images/curs${i + 1}.png`} alt="" />
                                                        <img src={`./assets/images/cur${i + 1}.png`} alt="" />
                                                    </div>

                                                    <SubTitles
                                                        title={<span>{item.title}</span>}
                                                        tstyle={{ fontSize: 16, color: "#333" }}
                                                        lstyle={{ backgroundColor: "transparent" }}
                                                        desc={item.desc}
                                                        dstyle={{ fontSize: 14 }}
                                                    >
                                                    </SubTitles>

                                                </Col>
                                            )
                                        }) : null
                                }
                            </Col>
                        </Row>


                        <Row style={{ margin: 0, marginTop: 20, background: `url(./assets/images/partnerbac.jpg) no-repeat right bottom`, backgroundSize: "contain", backgroundColor: "#666" }}>
                            <Col span={24} style={{ padding: "2.6rem 2.6rem 3rem 2.6rem" }}>
                                <SubTitles
                                    title={<span> 合作模式 </span>}
                                    tstyle={{ fontSize: 18, color: "#fff" }}
                                    lstyle={{ backgroundColor: "#fff" }}
                                    desc="IAC国际教育集团多年来已在全球积累无数成功办学经验可确保我们的合作方规避投资办学的失败风险，省时省力低投入高效的开展国际教育事业。"
                                    dstyle={{ fontSize: 14, color: "#fff" }}
                                >
                                </SubTitles>
                                <Row style={{ marginTop: 24, backgroundColor: "rgba(0,0,0,0.6)" }}>
                                    {
                                        getcooperate.model ?
                                            getcooperate.model.map((item, i) => {
                                                return (
                                                    i % 2 !== 0 ?
                                                        <Col key={i} xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} style={{ backgroundColor: "rgba(255,255,255,0.9)", padding: 24 }}>
                                                            <SubTitles
                                                                title={<span> {item.title} </span>}
                                                                tstyle={{ fontSize: 16, color: "#333" }}
                                                                lstyle={{ backgroundColor: "#fff", display: "none" }}
                                                                desc={<ul>
                                                                    {item.desc}
                                                                    <Link to="/" style={{ marginTop: 18, color: "#666", display: "block" }}>查看更多 <Icon type="arrow-right" /></Link>
                                                                </ul>}
                                                                dstyle={{ fontSize: 12, color: "#666" }}
                                                            >
                                                            </SubTitles>
                                                        </Col>
                                                        :
                                                        <Col key={i} xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} style={{ padding: 24 }}>
                                                            <SubTitles
                                                                title={<span> {item.title}  </span>}
                                                                tstyle={{ fontSize: 16, color: "#fff" }}
                                                                lstyle={{ backgroundColor: "#fff", display: "none" }}
                                                                desc={<ul>
                                                                    {item.desc}
                                                                    <Link to="/" style={{ marginTop: 18, color: "#f0f0f0", display: "block" }}>查看更多 <Icon type="arrow-right" /></Link>
                                                                </ul>}
                                                                dstyle={{ fontSize: 12, color: "#ddd" }}
                                                            >
                                                            </SubTitles>

                                                        </Col>
                                                )

                                            }) : null
                                    }



                                </Row>
                            </Col>


                        </Row>
                    </div>
                </div>
            </Spin>)
    }


}


export default Partner;