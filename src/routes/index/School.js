import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline, Spin } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example,loading }) => ({
    example,
    loads: loading.effects['example/getschool']
}))
class School extends Component {
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
                    title: "LMS（IAC未来教室学习系统）",
                    desc: `一款综合学生/教师/教学三方使用需求，多角度打造的学习管理系统（LMS）
                    真正解决“翻转课堂”“双师课堂”“网络课堂”难题
                    做到国际教学资源“共享化”“安全长效储存” “透明化”
                    对标国际通用LMS软件，定制更符合中国特色教育的LMS软件`,
                },
                {
                    title: "双师直播课堂",
                    desc: `具有大容量、高稳定性、协作性强等特点，能够满足不同时区/地区教师共同教学的需求。
                    支持师生多方高清视频互动、快速数据共享、课室内文字聊天及文件传输等交互式课堂直播
                    支持PC端、手机、平板多种登录模式`
                },
                {
                    title: "家校互动追踪系统",
                    desc: `智能考勤平台管理：远距离非接触式自动读卡考勤，自动生成报表，可短信通知家长
                    家校服务平台家长版：考勤查询，作业查询，成绩查询，通知查询，孩子评语查询
                    方家校服务平台教师版：基础配置，用户与权限管理，课程设置，卡务管理，通知管理，学生信息管理等`,
                },
                {
                    title: "校园信息化管理系统",
                    desc: `教务系统：双师，走班，选课排课，全系服务，共计27项
                    管理系统：学生，学籍，教师，双师预约，共计42项
                    校园管理：宿舍，实习，评测共计22项
                    共7大板块，142项，涵盖K12至大学全套信息化解决方案`
                }
                ,
                {
                    title: "AI智能阅卷",
                    desc: `精准分析:备课，教学，评测，评价
                    快速批改:自动批阅，上分，分析
                    每分钟批阅50份试卷，并实时完成记录分析`
                }
                ,
                {
                    title: "ACRM",
                    desc: `模式新 - 可拖拽式生成各类表单，如活动报名、问卷、投票、代收款等。
                    O2O闭环 - 从营销事件发起、传播、裂变到数据沉淀、管理、分析
                    多环境配合- 完美对接微信、QQ等APP`
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
        this.setNewState("getschool")
    }


    render() {
        let { data, datas } = this.state,
            { getschool } = this.props.example;

        return (
            <Spin spinning={this.props.loads}>
                <div className={styles.container}>
                    <div className={styles.mostbanner} style={{ background: `url(./assets/images/school.jpg) no-repeat center`, backgroundSize: "cover" }}>
                        <div className={styles.minddle}>
                            <SubTitles
                                title="信息化校园平台"
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
                            <Col span={24} style={{ padding: "2.4rem 2.6rem", backgroundColor: "#fff" }}>
                                <SubTitles
                                    title={<span>信息化校园简介 <Icon type="swap-right" /></span>}
                                    tstyle={{ fontSize: 24, color: "#cd2920" }}
                                    lstyle={{ backgroundColor: "transparent" }}
                                    desc={getschool.schooldesc}
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
                                getschool.spro?
                                getschool.spro.map((item, i) => {
                                    return (
                                        <Col key={i} xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} className={styles.cursorhover} style={{ backgroundColor: i % 2 == 0 ? "#f9f9f9" : "#f0f0f0", height: 400 }}>
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


export default School;