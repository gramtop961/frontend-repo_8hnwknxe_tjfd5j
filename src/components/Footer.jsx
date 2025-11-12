import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#contact" className="p-2 rounded-md hover:bg-gray-100" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
