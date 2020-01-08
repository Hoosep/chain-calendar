import React from 'react';
import './App.css';
import { Layout } from 'antd';

//Components
import CalendarContainer from './Calendar';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '1em' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <CalendarContainer />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
