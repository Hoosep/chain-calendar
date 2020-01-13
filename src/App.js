import React from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';

//Components
import CalendarContainer from './Calendar';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="layout">
      <Header>
        <Row type="flex" justify="center" align="middle" gutter={32}>
          <Col xs={24}>
            <div className="logo" />
            <span className="title-app">
              Don't break the habit
            </span>
          </Col>
        </Row>
      </Header>
      <Content>
        <div className="container-main">
          <CalendarContainer />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2020. Created by Hoose
      </Footer>
    </Layout>
  );
}

export default App;
