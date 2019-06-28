import { Row, Col, Card, Icon, PageHeader, Carousel, Timeline,Button } from 'antd';
import { Link, router } from 'dva/router';
import SubTitles from '../../components/SubTitles'
import React, { Component } from 'react';
import styles from '../IndexPage.css';
import { connect } from 'dva';
import { Map,Marker  } from 'react-amap';

@connect(({ example }) => ({
    example
}))




class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center : { longitude: 120, latitude: 30 }
        }
    }
    changeCenter  = () =>{
        this.setState({
            center : { longitude: 120, latitude: 30 }
        })
    }

    render() {
        let { center } = this.state;
        const styleC = {
            background: `url('http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '30px',
            height: '40px',
            color: '#000',
            textAlign: 'center',
            lineHeight: '40px',
            position:"relative"
          }
        return (
            <div className={styles.container}>
                <div className={styles.mostbanner} style={{ background: `url(./assets/images/contact.jpg) no-repeat center`, backgroundSize: "cover" }}>
                    <div className={styles.minddle}>
                        <SubTitles
                            title="联系我们"
                            tstyle={{ fontSize: 36, color: "#fff",textShadow:"1px 1px 4px #000" }}
                            lstyle={{ backgroundColor: "#333" }}
                            desc="海学达国际教育致力于培养高素质国际人才"
                            dstyle={{ backgroundColor: "rgba(255,255,255,0.8)", padding: 8, color: "#555" }}
                        >
                        </SubTitles>
                    </div>
                </div>
                <div className={styles.minddle} style={{ paddingTop: 20 }}>
                    <Row style={{ margin: 0, backgroundColor: "#fff" }}>
                        <Col span={24} style={{ padding: "2.4rem 2.6rem", backgroundColor: "#fff" }}>
                            <SubTitles
                                title={<span>我们的位置 <Icon type="arrow-down" /></span>}
                                tstyle={{ fontSize: 18, color: "#cd2920" }}
                                lstyle={{ backgroundColor: "#cd2920" }}
                                desc="公司位于：xxxxxxxxxx"
                                dstyle={{fontSize:14}}
                            >
                            </SubTitles>
                            <div style={{ width:"100%", height: 400,marginTop:20,position:"relative"}}>
                                <Map amapkey={"7bde0458101af86ca3c3d828015b5bd3"} center={center} >
                                    <Marker position={center}>
                                        <div style={styleC}>
                                            <span className={styles.markertext}>我们在这里</span>
                                        </div>
                                    </Marker>
                                </Map>
                                <Button style={{position:"absolute",right:0,top:-58}} onClick={() => { this.changeCenter() }} icon = "redo">重置</Button>
                            </div>
                        </Col>
                    </Row>


                    <Row style={{ margin: 0, marginTop: 20, background: `url(./assets/images/contactbac.jpg) no-repeat left top`, backgroundSize: "contain", backgroundColor: "#666" }}>
                        <Col span={24} style={{ padding: "2.6rem 2.6rem 3rem 2.6rem"}}>
                            <SubTitles
                                title={<span> 联系方式 </span>}
                                tstyle={{ fontSize: 18, color: "#fff" }}
                                lstyle={{ backgroundColor: "#fff" }}
                                desc="期待您的来访~"
                                dstyle={{ fontSize: 14,color:"#fff" }}
                            >
                            </SubTitles>
                            <Row style={{marginTop:24,backgroundColor:"rgba(0,0,0,0.6)"}}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{padding:24}}>
                                    <SubTitles
                                        title={<span> 海学达联系方式1 </span>}
                                        tstyle={{ fontSize: 16, color: "#fff" }}
                                        lstyle={{ backgroundColor: "#fff",display:"none" }}
                                        desc={<ul>
                                            <li style={{marginBottom:18}}>联系方式描述...</li>
                                            <a style={{color:"#f0f0f0"}} href="tel:18351061956"><li><Icon style={{transform:"rotate(90deg)"}} type="phone" />18351061956</li></a>   
                                            </ul>}
                                        dstyle={{ fontSize: 12,color:"#ddd" }}
                                    >
                                    </SubTitles>

                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{backgroundColor:"rgba(255,255,255,0.9)",padding:24}}>  
                                    <SubTitles
                                        title={<span> 海学达联系方式2 </span>}
                                        tstyle={{ fontSize: 16, color: "#333" }}
                                        lstyle={{ backgroundColor: "#fff",display:"none" }}
                                        desc={<ul>
                                             <li style={{marginBottom:18}}>联系方式描述...</li>
                                            <a style={{color:"#333"}} href="tel:18351061956"><li><Icon style={{transform:"rotate(90deg)"}} type="phone" />18351061956</li></a>   
                                            </ul>}
                                        dstyle={{ fontSize: 12,color:"#666" }}
                                    >
                                    </SubTitles>
                                </Col>
                            </Row>
                        </Col>

                        
                    </Row>
                </div>


                    



            </div>)
 
    }


}


export default Contact;