import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

function FunData(e,step){
    let proportion = step; //按照比例切割
    let num = 0;
    let _data =[];
    for(let i=0;i<e.length;i++){
        if(i % proportion == 0 && i != 0){
            _data.push(e.slice(num,i));
            num = i;
        }
        if((i+1)==e.length){
            _data.push(e.slice(num,(i+1)));
        }
    }
    return _data;
}

@connect(({ example }) => ({
    example
}))
class Internation extends Component {
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

    render() {
        let { data, datas } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.mostbanner} style={{ background: `url(./assets/images/active.jpg) no-repeat center`, backgroundSize: "cover" }}>
                    <div className={styles.minddle}>
                        <SubTitles
                            title="大型国际教育活动"
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
                                title={<span>大型国际教育活动简介 <Icon type="swap-right" /></span>}
                                tstyle={{ fontSize: 24, color: "#cd2920" }}
                                lstyle={{ backgroundColor: "transparent" }}
                                desc="IAC国际教育致力于研究并分析国际教育最新态势及本土化发展，为K-12 阶段的国际教育在中国教育机构和学校的实施提供可行性指导及解决方案，为中国学生提供多样化的课外活动平台及能力培养机会，为中国家庭提供权威的国际教育资讯与理念。通过以下四大模块，构建中外人文交流与教育合作的平台，促进国际教育行业的可持续发展。"
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


                    <Row style={{ margin: 0, marginTop: 20, backgroundColor: "#fff" }}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ padding: "2.6rem 2.6rem 3rem 2.6rem"}}>
                            <SubTitles
                                title={<span>国际认证师资培训 </span>}
                                tstyle={{ fontSize: 18, color: "#d95750" }}
                                lstyle={{ backgroundColor: "#d95750" }}
                                desc="由美国大学理事会、上海交通大学等各国教育专家组成的国际教育研究与师资培训中心，通过对中国与西方国家（美、加、英、澳等）在基础教育阶段在教育理念、教育政策、教育实践等不同纬度的比较和研究，为中国基础教育和教学的改良与改革提供本土化的国际课程设计与教学方案以及师资培训，从而促进国外高等教育与中国基础教育的衔接、北美学历课程的本土化发展，以及中国教师的业务素养与全球视野。"
                                dstyle={{ fontSize: 14 }}
                            >
                            </SubTitles>
                            <Row style={{marginTop:24}}>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/shizipeixun/1.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/shizipeixun/2.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/shizipeixun/3.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/shizipeixun/4.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/shizipeixun/5.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/shizipeixun/6.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ padding: "2.6rem 2.6rem 5rem 2.6rem",backgroundColor:"#7a7a7a"}}>
                            <SubTitles
                                title={<span>教育公益事业发展 </span>}
                                tstyle={{ fontSize: 18, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc="凭借北美公立教育系统的教育学者的广泛影响力，以及海外名校校友的榜样力量，通过大型公益讲座、定期走访、互联网传播等途径，分享第一手的海外升学、生活和文化资讯。通过教育传递公益之美，促进中西方教育的交流互动和跨文化传播，并让更多学生及家长了解国际教育的价值，获得更丰富的教育经历。"
                                dstyle={{ fontSize: 14,color:"#f0f0f0" }}
                            >
                            </SubTitles>
                            <Row style={{marginTop:24}}>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/gongyi/1.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/gongyi/2.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/gongyi/3.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/gongyi/4.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/gongyi/5.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/gongyi/6.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{ margin: 0,backgroundColor: "#fff" }}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ padding: "2.6rem 2.6rem 5rem 2.6rem",backgroundColor:"#7a7a7a"}}>
                            <SubTitles
                                title={<span>青少年海外游学活动 </span>}
                                tstyle={{ fontSize: 18, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc="基于国际游学政策指引，针对学生“知行结合”的游学需求，每年联合大型国际游学机构、北美公立教育局和世界顶尖大学，开展国际学生集体旅行、集中食宿方式进行研究性学习和旅行体验相结合的国际游学活动。旨在通过定期的海外游学活动，提升学生的英文素颜，开拓国际世界，结交世界好友。 "
                                dstyle={{ fontSize: 14,color:"#f0f0f0" }}
                            >
                            </SubTitles>
                            <Row style={{marginTop:24}}>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/youxue/1.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/youxue/2.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/youxue/3.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/youxue/4.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/youxue/5.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/youxue/6.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ padding: "2.6rem 2.6rem 3rem 2.6rem"}}>
                            <SubTitles
                                title={<span>国际竞赛活动组办 </span>}
                                tstyle={{ fontSize: 18, color: "#d95750" }}
                                lstyle={{ backgroundColor: "#d95750" }}
                                desc="搭建高水平的国际竞赛平台，推广高水平国际竞赛和跨文化交流。IAC国际教育以项目学习为基础，以能力提升为宗旨，以国际竞赛为出口，专注于挖掘和拓展青少年的潜能，帮助中国青少年提高科学素养、增强动手能力、融汇跨学科知识、具备国际视野与合作能力。"
                                dstyle={{ fontSize: 14 }}
                            >
                            </SubTitles>
                            <Row style={{marginTop:24}}>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/jingsaihuodong/1.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/jingsaihuodong/2.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/jingsaihuodong/3.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/jingsaihuodong/4.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/jingsaihuodong/5.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} style={{ height: 100, background: `url(http://iaceducation.com/src/images/jingsaihuodong/6.png) no-repeat center`, backgroundSize: "cover" }}>
                                </Col>
                            </Row>
                        </Col>

                        
                    </Row>
                </div>


                    



            </div>)
 
    }


}


export default Internation;