import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Section'
import SkillBar from './components/SkillBar'
import './index.css'

function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (href === '#' || href?.length < 2) return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}

export default function App() {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />

      {/* Home / Introduction */}
      <Section id="home">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
            <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">Welcome</p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Hi, I'm <span className="text-indigo-600">Your Name</span>
            </h1>
            <p className="mt-2 text-lg text-gray-600">Web Developer | Designer | Creator</p>
            <p className="mt-5 text-gray-600 max-w-prose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut urna et sapien mollis lobortis. I love building delightful, performant web experiences.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">View Portfolio</a>
              <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">Contact Me</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
            <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-indigo-100 shadow-lg">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Your portrait" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About Me */}
      <Section id="about" title="About Me" subtitle="A quick snapshot of who I am and what I care about.">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta risus at felis congue, sed hendrerit justo lacinia. Integer luctus, augue et dapibus lacinia, magna augue facilisis odio, sit amet malesuada lacus lectus vitae turpis.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-3 text-gray-700">
            <div>
              <p className="font-medium">Education</p>
              <p className="text-sm text-gray-600">B.S. in Computer Science, Your University (2017–2021)</p>
            </div>
            <div>
              <p className="font-medium">Interests</p>
              <p className="text-sm text-gray-600">Design systems, performant UIs, open-source, photography, and hiking.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="A blend of technical and soft skills I bring to teams.">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <SkillBar name="JavaScript / TypeScript" level={90} />
            <SkillBar name="React / Next.js" level={88} />
            <SkillBar name="Node.js / API" level={80} />
            <SkillBar name="HTML / CSS / Tailwind" level={92} />
          </div>
          <div className="space-y-4">
            <SkillBar name="UI/UX & Design Systems" level={85} />
            <SkillBar name="Communication" level={90} />
            <SkillBar name="Leadership" level={80} />
            <SkillBar name="Problem Solving" level={88} />
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work showcasing code, craft, and care.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop`}
                  alt={`Project ${i}`}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Project Title {i}</h3>
                <p className="mt-1 text-sm text-gray-600">Short description of the project showing what it does and the stack used.</p>
                <span className="mt-3 inline-flex text-sm text-indigo-600 group-hover:underline">View More →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Have a question or want to work together? Send a message.">
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! (sample)') }} className="grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label className="text-sm text-gray-700" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required className="h-11 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-gray-700" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="h-11 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" placeholder="jane@example.com" />
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-gray-700" htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows="5" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" placeholder="Tell me about your project..." />
          </div>
          <div className="flex">
            <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Send Message</button>
          </div>
        </form>
      </Section>

      <Footer />
    </div>
  )
}
