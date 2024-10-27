import { useEffect, useState } from 'react';
import Head from 'next/head';
import Styles from './index.module.css'

import WelcomePage from '../components/welcome';


export default function Home() {

  const [ready, setReady] = useState(false)
  const [isWelcome, setIsWelcome] = useState(true)

  // LIFECYCLES

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 1200)
  }, [])


  if (!ready) return <div className={Styles.wrapperLogin}><img className={Styles.loading}src="/assets/images/flower front 1.png" alt="loading" /></div>

  return (
    <div className={Styles.wrapper}>
      <WelcomePage />
    </div>
  );
}
