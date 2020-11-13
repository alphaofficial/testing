import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react'


export default function Home() {

  async function getApp(){
    var requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWZhZTQyYjIzZTY3YjkwMDA4Yjg1OGQxIiwiaWF0IjoxNjA1MjU1ODU4fQ.nG6UA1gFzLcLdRodHgA32LF0imtuAzlOqwaK6UcmU4BL0eDTZHDFjmlcG-Y7VlywwGj-f9OTt-3ro2Y-GlJXmw`
      }
  };
  
  var url = `https://rootsiodev.com/proxy/v1.0/developer/getApps`
  fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => {
      console.log(result)
      var r = JSON.parse(result)
      if(r.code === 200){
          console.log(r.responses)
          
      }
      else if (r.code === 401 ||r.code === 400){
          // AUTH_LOGOUT()
      }
      else {
          console.log(r.message)
      }
  })
  .catch(error => {
      console.log(error)
  });
  }

  useEffect(()=> {
    getApp()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
