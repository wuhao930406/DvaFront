import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline, Spin } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example, loading }) => ({
    example,
    loads: loading.effects['example/getachieve']
}))
class Achiev extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getachieve: []
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

    componentWillMount() {
        this.setNewState("getachieve", null, () => {
            let reshieve = JSON.parse(JSON.stringify(this.props.example.getachieve));
            if (reshieve.length > 0) {
                let resdata = reshieve.map((item) => {
                    let more = item.mores.split("^");
                    more = more.map((t, n) => {
                        return {
                            num: t.split("|")[0],
                            leaf: t.split("|")[1],
                            content: t.split("|")[2],
                        }
                    })
                    item.mores = more
                    return item
                })

                this.setState({
                    getachieve: resdata
                })
            }
        })
    }

    render() {
        let { getachieve } = this.state,
            { getpublic } = this.props.example;
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
                res = bacurl ? bacurl : "./assets/images/archiev.jpg";
            } else {
                res = bacurl ? bacurl : ""
            }
            return res
        }
        return (
            <div className={styles.container}>
                <Spin spinning={this.props.loads}>
                    <div className={styles.mostbanner} style={{ background: `url(${getbac("Achiev","bacurl")}) no-repeat center`, backgroundSize: "cover" }}>
                        <div className={styles.minddle}>
                            <SubTitles
                                title="企业成绩"
                                tstyle={{ fontSize: 36, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc={getbac("Achiev","desc")}
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
                                    desc={getachieve[0] ? getachieve[0].totaldesc : ""}
                                    dstyle={{ color: "#333", fontSize: "14px" }}
                                >
                                </SubTitles>
                                <div className={styles.flexrow} style={{ marginTop: 60 }}>
                                    <a href="mailto:haixueda@163.com">
                                        <img style={{ width: 20, marginRight: 20 }} src="./assets/images/email.png" alt="" />
                                    </a>
                                    <a href={`http://wpa.qq.com/msgrd?v=3&uin=${this.props.example.getcontact.contact?this.props.example.getcontact.contact.qq:"2650574358"}&site=qq&menu=yes`}>
                                        <img style={{ width: 20 }} src="./assets/images/message.png" alt="" />
                                    </a>
                                </div>

                            </Col>
                            <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17} style={{ padding: "2.4rem 2.6rem 80px 2.6rem", backgroundColor: "#fff", position: "relative" }}>
                                <SubTitles
                                    title={getachieve[0] ? getachieve[0].title : ""}
                                    tstyle={{ fontSize: 18, color: "#d95750" }}
                                    lstyle={{ backgroundColor: "#d95750", width: 48 }}
                                    desc={getachieve[0] ? getachieve[0].desc : ""}
                                    dstyle={{ color: "#333", fontSize: "14px" }}
                                    advance={getachieve[0] ? getachieve[0].mores : ""}
                                >
                                </SubTitles>
                                <img style={{ position: "absolute", right: 24, bottom: 24, height: 70 }} src="./assets/images/worldbac.png" alt="" />
                            </Col>
                        </Row>

                        <Row style={{ margin: 0, marginTop: 20 }}>
                            <Col span={24} style={{ padding: "3rem 2.6rem", background: `url(./assets/images/teacher.jpg) no-repeat center`, backgroundSize: "cover" }}>
                                <SubTitles
                                    title={getachieve[1] ? getachieve[1].title : ""}
                                    tstyle={{ fontSize: 18, color: "#fff" }}
                                    lstyle={{ backgroundColor: "#fff", width: 48 }}
                                    desc={getachieve[1] ? getachieve[1].desc : ""}
                                    dstyle={{ color: "#f0f0f0", fontSize: 14 }}
                                    advance={getachieve[1] ? getachieve[1].mores : ""}
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

                        <Row style={{ margin: 0, marginTop: 20, backgroundColor: "#737373", }}>
                            <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11} style={{ margin: 0, padding: "3rem 2.6rem", background: `url(./assets/images/archiev.png) no-repeat 90% 3rem`, backgroundSize: "32px auto", backgroundColor: "#fff" }}>
                                <SubTitles
                                    title={getachieve[2] ? getachieve[2].title : ""}
                                    tstyle={{ fontSize: 18, color: "#ce281f" }}
                                    lstyle={{ backgroundColor: "#d95750", width: 48 }}
                                    desc={getachieve[2] ? getachieve[2].desc : ""}
                                    dstyle={{ color: "#333", fontSize: 14 }}
                                    advance={getachieve[2] ? getachieve[2].mores : ""}
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
                            <Col xs={24} sm={24} md={24} lg={13} xl={13} xxl={13} style={{ padding: "3rem 2.6rem", margin: 0, background: `url(./assets/images/jy.png) no-repeat 90% 3rem`, backgroundSize: "32px auto" }}>
                                <SubTitles
                                    title={getachieve[3] ? getachieve[3].title : ""}
                                    tstyle={{ fontSize: 18, color: "#fff" }}
                                    lstyle={{ backgroundColor: "#fff", width: 48 }}
                                    desc={getachieve[3] ? getachieve[3].desc : ""}
                                    dstyle={{ color: "#f0f0f0", fontSize: 14 }}
                                    advance={getachieve[3] ? getachieve[3].mores : ""}
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
                </Spin>





            </div>
        );

    }


}


export default Achiev;