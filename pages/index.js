import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Icon from "../public/assets/uelogo.png"
// import HeadLogo from '../public/assets/ue-logo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ulug’bek Ergashev | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="shortcut icon" href="./uelogo.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}