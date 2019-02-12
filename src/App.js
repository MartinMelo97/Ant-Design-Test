import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { NavLink, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home/Home'
import Products from './components/products/Products'
import Patients from './components/patients/Patients'

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout
    const { Item } = Menu
    return (
      <Layout className="layout">
        <Header>
          <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{lineHeight: "64px"}}
          >
            <Item key="home">
            <NavLink to="/">
              Inicio
            </NavLink>
            </Item>
            <Item key="products">
            <NavLink to="products">
            Productos
            </NavLink>
            </Item>
            <Item key="patients">
            <NavLink to="patients">
            Pacientes
            </NavLink>
            </Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/patients" component={Patients} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
