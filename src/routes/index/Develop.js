import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example }) => ({
    example
}))
class Develop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reverse:false,
            data: [
                {
                    time: "2013",
                    title: "教育情怀，初心不改",
                    desc: "学生留学过早，听不懂课；孩子高中叛逆，不好好上课；学生考上世界名校，却无法尽快融入当地社交生活。加拿大两位大学教授、一位私立学校校长、一位公立高中数学部部长为了解决以上教学难题，迫切的聚在一起，试图追本溯源，求得一方妙计。“建立一所能够直接解决以上问题的学校，或许就是我们一直要找的答案”——于此，海学达国际教育正式成立",
                    imgurl: "./assets/images/img_88.jpg"
                },
                {
                    time: "2014",
                    title: "各司其职，各有建树",
                    desc: `1.签约知名出版社3家
                    • Nielsen Book
                    • Oxford University Press
                    • National Geographic Learning
                    2.签约安大略省教师学院 (Ontario Teacher College)教师培训
                    3.签约北美教育局认证教师40+
                    4.签约资深教学顾问2人
                    • 北美高三数学教科书作者
                    • 北美数学协会会长`,
                    imgurl: "./assets/images/img_89.jpg"
                },
                {
                    time: "2015",
                    title: "两年筹备，初露锋芒",
                    desc: `1.与加拿大联邦政府、加拿大安大略省教育局、美国联邦政府签署NOI
                    2.新签约知名出版社4家
                    • McGraw-Hill Education
                    • Pearson Education
                    • Cengage Learning
                    • Scholastic
                    3.新增资深教学顾问2人
                    • 加拿大杜兰区教育局局长
                    • 加拿大安大略省教育律师
                    4.与知名大学签署教师培训协议
                    • 多伦多大学，滑铁卢大学
                    • 美国西北大学，纽约大学，普林斯顿大学
                    5.成功举办加拿大安大略省首届大学公益教育论坛`,
                    imgurl: "./assets/images/img_90.jpg"
                },
                {
                    time: "2016",
                    title: "创新教育，实施新学",
                    desc: `1.海学达得到加拿大安大略省教育局学校认证：880844
                    2.成为加拿大联邦高校联盟OFIS荣誉成员：061517S
                    3.与滑铁卢大学签署数学项目合作协议(CEMC)
                    4.与北美数学协会签署合作协议（AMC）
                    5.与美国数学大联盟组委会签署合作协议 (Math League)
                    6.综合北美原版数学教材及中国学生思维特点，出版第一套北美数学思维训练教材
                    7.加拿大下属学校Yan’s Growing Success正式推广北美数学思维训练课程，面向全球学生开展在线课程培训
                    8.成立Insight Academy of Canada水牛城（美国纽约州）新校区`,
                    imgurl: "./assets/images/img_91.jpg"
                },
                {
                    time: "2017",
                    title: "优质教育，培育英才",
                    desc: `1.100%毕业生进入世界前80名校，其中3人进入常春藤名校。
                    2.联手多伦多大学，共同举办首届国际青少年无人机大赛，并获得全球团体第六名
                    3.滑铁卢数学竞赛（CEMC）海学达团体成绩排名全球第二，80%考生进入全球TOP 25%，获得荣誉证书。
                    4.全美数学竞赛（AMC）海学达团体成绩排名全加拿大第五名。
                    5.美国数学联盟竞赛（Math League）海学达团体成绩排名全球第6，40%考生进入全球TOP 5%
                    建立下属网络学校——FamousEdu北美在线，致力通过网络技术革新为世界上的每一个学生提供高端、平等的国际化学术交流平台
                    6.建立下属网络学校——FamousEdu北美在线，致力通过网络技术革新为世界上的每一个学生提供高端、平等的国际化学术交流平台`,
                    imgurl: "./assets/images/img_92.jpg"
                },
                {
                    time: "2018",
                    title: "强强联手，走向世界",
                    desc: `1.海学达获得美国大学理事会College Board授权认证：826542

                    2.与西班牙Redleaf国际教育机构签署西班牙优秀学生定向输出战略合作协议
                    
                    3.与加拿大安大略省杜兰区教育局下属Ajax High School等四家公立学校结为姐妹学校
                    
                    4.整合最优教育科研团队，开发独家在线学习管理系统及教务系统
                    
                    5.海学达学员100%进入世界前80名校，其中5人进入常春藤名校
                    
                    6.滑铁卢数学竞赛（CEMC）海学达考生个人成绩以满分夺取全球第一
                    
                    7.推出国际STEAM教育课程体系，并在2018年度VEX机器人世界锦标赛中获得初中组冠军
                    
                    8.完善北美小学同步课程体系，打造K-12教育全覆盖的新局面`,
                    imgurl: "./assets/images/img_93.jpg"
                },
            ]

        }
    }

    render() {
        let { data,reverse } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.mostbanner} style={{ background: `url(./assets/images/develop.jpg) no-repeat center`,backgroundSize:"cover" }}>
                    <div className={styles.minddle}>
                        <SubTitles
                            title="发展历程"
                            tstyle={{ fontSize: 36, color: "#fff" }}
                            lstyle={{ backgroundColor: "#fff" }}
                            desc="海学达国际教育致力于培养高素质国际人才"
                            dstyle={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 8, color: "#fff" }}
                        >
                        </SubTitles>
                    </div>
                </div>
                <div className={styles.minddle} style={{ padding: 68, backgroundColor: "#fff", margin: "20px auto", overflow: "hidden" }}>
                    <Row>
                        <Col span={24}>
                            <div className={styles.developtitle}>
                                <h2>
                                    海学达发展历程
                                </h2>
                                <p>
                                    2013年发展至今 &nbsp;<a onClick={()=>{
                                         this.setState({
                                            reverse:!reverse
                                         })   
                                    }}>切换{reverse?"正序":"倒序"}</a>
                                </p>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                            <Timeline reverse={reverse} mode="alternate" pending="Future..." 
                            pendingDot={<Icon type={reverse?"arrow-up":"arrow-down"} />}>
                                {
                                    data && data.map((Item, i) => {
                                        return (
                                            <Timeline.Item key={i}>
                                                <div className={styles.developitem}>
                                                    <h2 style={{ color: "#d95750" }}>{Item.time}</h2>
                                                    <p>
                                                        <span>{Item.title}</span>
                                                        {Item.desc}
                                                    </p>
                                                    <div className={styles.imgcon} style={i % 2 == 0 ?
                                                        { backgroundImage: `url(${Item.imgurl})` }
                                                        :
                                                        { backgroundImage: `url(${Item.imgurl})`, float: "right" }
                                                    }>
                                                    </div>
                                                </div>
                                            </Timeline.Item>
                                        )
                                    })
                                }


                            </Timeline>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                            <Timeline reverse={reverse} mode="left" pending="Future..." pendingDot={<Icon type={reverse?"arrow-up":"arrow-down"} />}>
                                {
                                    data && data.map((Item, i) => {
                                        return (
                                            <Timeline.Item key={i}>
                                                <div className={styles.developitem}>
                                                    <h2 style={{ color: "#d95750" }}>{Item.time}</h2>
                                                    <p>
                                                        <span>{Item.title}</span>
                                                        {Item.desc}
                                                    </p>
                                                    <div className={styles.imgcon} style={
                                                        { backgroundImage: `url(${Item.imgurl})` }
                                                    }>
                                                    </div>
                                                </div>
                                            </Timeline.Item>
                                        )
                                    })
                                }
                            </Timeline>
                        </Col>

                    </Row>




                </div>






            </div>
        );

    }


}


export default Develop;