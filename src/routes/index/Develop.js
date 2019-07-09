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
            {getdevlop} = this.props.example;

        return (
            <div className={styles.container}>
                <div className={styles.mostbanner} style={{ background: `url(./assets/images/develop.jpg) no-repeat center`, backgroundSize: "cover" }}>
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






            </div>
        );

    }


}


export default Develop;