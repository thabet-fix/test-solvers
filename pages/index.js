import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <div className={styles.container}>
      <Container>
        <div className='row'>
          <div className='col-sm-6'>
            hello
          </div>
          <div className='col-sm-6'>
            world
          </div>
        </div>
      </Container>
    </div>
  )
}
