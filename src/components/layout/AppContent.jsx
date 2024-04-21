import { Layout } from 'antd';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 56px)',
    color: '#000',
    backgroundColor: '#fff',
    padding: '1rem' ,
    // display: 'block',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // type:"flex" ,
    // justify: "center" ,
    // align: "middle"
  };

export default function AppContent(props) {
    return(
        <Layout.Content style={contentStyle}>
          {props.content}
        </Layout.Content>
    )
}