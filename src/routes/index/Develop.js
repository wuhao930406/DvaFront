import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline, Spin } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';

@connect(({ example, loading }) => ({
    example,
    loads: loading.effects['example/getdevlop']
}))
class Develop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reverse: false,
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
        this.setNewState("getdevlop")
    }

    render() {
        let { reverse } = this.state,
            { getdevlop, getpublic } = this.props.example;
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
                res = bacurl ? bacurl : "./assets/images/develop.jpg";
            } else {
                res = bacurl ? bacurl : ""
            }
            return res
        }
        return (
            <div className={styles.container}>
                <Spin spinning={this.props.loads}>
                    <div className={styles.mostbanner} style={{ background: `url(${getbac("Develop","bacurl")}) no-repeat center`, backgroundSize: "cover" }}>
                        <div className={styles.minddle}>
                            <SubTitles
                                title="发展历程"
                                tstyle={{ fontSize: 36, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc={getbac("Develop","desc")}
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
                                        2013年发展至今 &nbsp;<a onClick={() => {
                                            this.setState({
                                                reverse: !reverse
                                            })
                                        }}>切换{reverse ? "正序" : "倒序"}</a>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                                <Timeline reverse={reverse} mode="alternate" pending="Future..."
                                    pendingDot={<Icon type={reverse ? "arrow-up" : "arrow-down"} />}>
                                    {
                                        getdevlop && getdevlop.map((Item, i) => {
                                            return (
                                                <Timeline.Item key={i}>
                                                    <div className={styles.developitem}>
                                                        <h2 style={{ color: "#d95750" }}>{Item.year}</h2>
                                                        <p>
                                                            <span>{Item.title}</span>
                                                            {Item.desc}
                                                        </p>
                                                        <div className={styles.imgcon} style={i % 2 == 0 ?
                                                            { backgroundImage: `url(${Item.url})` }
                                                            :
                                                            { backgroundImage: `url(${Item.url})`, float: "right" }
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
                                <Timeline reverse={reverse} mode="left" pending="Future..." pendingDot={<Icon type={reverse ? "arrow-up" : "arrow-down"} />}>
                                    {
                                        getdevlop && getdevlop.map((Item, i) => {
                                            return (
                                                <Timeline.Item key={i}>
                                                    <div className={styles.developitem}>
                                                        <h2 style={{ color: "#d95750" }}>{Item.time}</h2>
                                                        <p>
                                                            <span>{Item.title}</span>
                                                            {Item.desc}
                                                        </p>
                                                        <div className={styles.imgcon} style={
                                                            { backgroundImage: `url(${Item.url})` }
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
                </Spin>
            </div>
        );

    }


}


export default Develop;