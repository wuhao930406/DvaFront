import { Row,Col,Card,Icon,PageHeader  } from 'antd';
import { Link } from 'dva/router';
import styles from '../IndexPage.css';
const HomePage = ({children}) => {
  const models = [{name:'模块1',icon:"edit"}, 
  {name:'模块2',icon:"form"}, 
  {name:'模块3',icon:"copy"}, 
  {name:'模块4',icon:"scissor"}, 
  {name:'模块5',icon:"delete"}, 
  {name:'模块6',icon:"snippets"}],
  h = document.body.clientHeight;
    return (
      <Row>
        111
        
      </Row>
    );
  };
  
  HomePage.propTypes = {
  };
  
  export default HomePage;