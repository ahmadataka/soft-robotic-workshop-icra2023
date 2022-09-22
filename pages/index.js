import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Soft Robotics Workshop at ICRA 2023!" />
        <p className="description">
          Soft Robotics: Fusing function with structure
        </p>

        <Header title="Abstract" />
        <p className="description">
          The advent of soft material technologies in robotics has brought many distinct advantages, such as inherent compliance, safety, high manoeuvrability, and reconfigurability. Along with these advantages, the past years have seen many interesting applications for soft robots in areas such as surgical robotics, extreme environments, and logistics and material handling. Despite these rapid developments, many challenges that are key to the widespread adoption and efficient utilization of novel soft material technologies are still outstanding.
          A major challenge that lies at the core of the field of soft robots is the fusion and integration of different functions with the soft robot body. The ability of different structures in a soft robot to seamlessly carry out different functions, for example, an actuator that is also a self-sensing element or the backbone of a robot body, will produce numerous advantages. Such a fusion is underpinned by many aspects, such as design methodologies, the development of multifunctional components, manufacturing techniques to cofabricate functional structures, sensing and perception of data, and morphological computation.
          The main objective of this workshop is to serve as a focal point for discussing this grand challenge of “Fusing Function with Structure in Soft Robotics’’. The workshop will host talks, short presentations, an Early Career Researchers Showcase and a panel discussion and will involve soft robotics researchers specializing in the broad domains of soft actuation, sensing, functional materials, manufacturing, and physical intelligence.
        </p>

        
      </main>

      <Footer />
    </div>
  )
}
