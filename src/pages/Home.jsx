import React from 'react';
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap'

import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'

import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import { useEffect, useState } from 'react'

const Home = () => {

  const [trendinProducts, setTrendinProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item=> item.category === 'chair');

    const filteredBestSalesProducts = products.filter(
      item=> item.category === 'sofa');


    setTrendinProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, [])

  return <Helmet title={'Home'}>
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero_content">
              <p className="hero_subtitle">
                Trending product in {year}
              </p>
              <h2>Make Your Interior More Minimalistics & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti id laborum est veniam excepturi atque autem nihil ratione at</p>

              <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>

            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

    </section>

    <Services />

    <services className="trending_products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendinProducts}/>
        </Row>
      </Container>
    </services>

    <section className="best_sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
              <h2 className='section_title'>Best Sales</h2>
          </Col>

          <ProductsList data={bestSalesProducts}/>
            
        </Row>
      </Container>
    </section>

    <section className="timer_count">
      <Container>
        <Row>
          <Col lg='6' md='6'>
          </Col>
          <Col lg='6' md='6'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home