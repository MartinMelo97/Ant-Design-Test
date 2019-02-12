import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { NavLink, Switch, Route } from 'react-router-dom'
import './App.scss';
import Home from './components/home/Home'
import Products from './components/products/Products'
import Patients from './components/patients/Patients'

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout
    const { Item } = Menu
    return (
      <Layout className="layout">
        <Header className="header">
          <Menu
          className="menu"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{lineHeight: "64px"}}
          >
            <Item key="home" className="header-footer-text">
            <NavLink to="/" className="items-color-white">
              Inicio
            </NavLink>
            </Item>
            <Item key="products" className="header-footer-text">
            <NavLink to="products" className="items-color-white">
            Productos
            </NavLink>
            </Item>
            <Item key="patients" className="header-footer-text">
            <NavLink to="patients" className="items-color-white">
            Pacientes
            </NavLink>
            </Item>
          </Menu>
        </Header>
        <Content className="content">
          <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/patients" component={Patients} />
          </Switch>
          </div>
        </Content>
        <Footer className="footer">
          <p className="header-footer-text">Todos los derechos reservados Actosoft 2019.</p>
        </Footer>
      </Layout>
    );
  }
}

export default App;
