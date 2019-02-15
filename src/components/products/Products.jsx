import React, { Component } from 'react'
import { Card, Icon, Avatar, Row, Col } from 'antd';
import './products.scss'
class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    name: "Chochitos",
                    precio: "$250.00",
                    desc: "Para todo tipo de mal",
                    img: "https://www.supermexicanos.com/sitio/wp-content/uploads/2012/09/chochos.jpg"
                },
                {
                    name: "Loratadina",
                    precio: "$50.00",
                    desc: "Alergias",
                    img: "https://www.laboratoriochile.cl/wp-content//uploads/2018/07/Loratadina_10MG_30C_BE.jpg"
                },
                {
                    name: "Ibuprofeno",
                    precio: "$20.00",
                    desc: "Alternativa al paracetamol",
                    img: "https://www.laboratoriochile.cl/wp-content//uploads/2016/04/Ibuprofeno_600MG_20C.jpg"
                },
                {
                    name: "Ibuprofeno",
                    precio: "$20.00",
                    desc: "Alternativa al paracetamol",
                    img: "https://www.laboratoriochile.cl/wp-content//uploads/2016/04/Ibuprofeno_600MG_20C.jpg"
                },
                {
                    name: "Ibuprofeno",
                    precio: "$20.00",
                    desc: "Alternativa al paracetamol",
                    img: "https://www.laboratoriochile.cl/wp-content//uploads/2016/04/Ibuprofeno_600MG_20C.jpg"
                },
                {
                    name: "Ibuprofeno",
                    precio: "$20.00",
                    desc: "Alternativa al paracetamol",
                    img: "https://www.laboratoriochile.cl/wp-content//uploads/2016/04/Ibuprofeno_600MG_20C.jpg"
                },
                {
                    name: "Ibuprofeno",
                    precio: "$20.00",
                    desc: "Alternativa al paracetamol",
                    img: "https://www.laboratoriochile.cl/wp-content//uploads/2016/04/Ibuprofeno_600MG_20C.jpg"
                }
            ]
        }
    }

    render() {
        const { Meta } = Card;
        return(
            <div>
                <Row gutter={16}>
                {this.state.products.map((product, index)=>(
                    <Col span={8} >
                     <Card
                     className="card"
                     cover={<img 
                                className="card-img" 
                                src={product.img} 
                                alt={product.name} 
                            />}
                     actions={[
                                <Icon type="dollar" />,
                                <Icon type="shopping-cart" />
                            ]}
                    >
                    <Meta 
                    avatar={<Avatar src="https://avatars2.githubusercontent.com/u/6130385?s=460&v=4" />}
                    title={`${product.name} - ${product.precio}`}
                    description={product.desc}
                    />
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        );
    }
 }

 export default Products