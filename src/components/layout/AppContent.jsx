import { Layout } from 'antd';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 56px)',
    color: '#000',
    backgroundColor: '#fff',
    padding: '1rem' ,
  };

export default function AppContent(props) {
    return(
        <Layout.Content style={contentStyle}>
          {props.content}
        </Layout.Content>
    )
}