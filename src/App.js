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
      <Content>
        <div className="container-main">
          <CalendarContainer />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
