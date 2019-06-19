import Item from "antd/lib/list/Item";
import { Row,Col } from "antd";
import styles from '../routes/IndexPage.css';
const SubTitles = ({ ...props }) => {

    return (
        <div>
            <h2 style={{
                fontSize: 24,
                fontWeight: "lighter",
                color: "#333",
                ...props.tstyle,
            }}>
                {props.title}
            </h2>
            <div style={{
                height: 1,
                width: 30,
                backgroundColor: "#000",
                marginBottom: 18,
                ...props.lstyle,
            }}>
            </div>
            {
                props.desc && <p style={{
                    fontSize: 18,
                    color: "#999",
                    fontWeight: "lighter",
                    backgroundColor: "transparent",
                    ...props.dstyle,
                }}>
                    {props.desc}
                </p>
            }
            <Row gutter={24} style={{margin:0,padding:0}}>
                {
                    props.advance && props.advance.map((Item, i) => {
                        return (
                            <Col span={props.span?props.span:12}>
                                <div className={styles.advance}>
                                    <h2 style={props.advancestyle?{...props.advancestyle.h2}:{}}>
                                        {Item.num.split(",")[0]}
                                        <span>
                                        {Item.num.split(",")[1]}
                                        </span>
                                    </h2>
                                    <p style={props.advancestyle?{...props.advancestyle.p}:{}}>
                                        {Item.name}
                                    </p>
                                </div>
                            
                            </Col>  
                        )

                    })
                }
            </Row>

        </div>
    )



}
export default SubTitles