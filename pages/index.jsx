import { useEffect, useState } from 'react';
import Head from 'next/head';
import Styles from './index.module.css'


export default function Home() {

  const [ready, setReady] = useState(false)

  // LIFECYCLES

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 1200)
  }, [])


  if (!ready) return <div className={Styles.wrapperLogin}><img className={Styles.loading}src="/assets/images/flower front 1.png" alt="loading" /></div>

  return (
    <div className={Styles.wrapper}>ready</div>
  );
}
