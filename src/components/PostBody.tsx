import React from 'react'
import ReactMarkdown from 'react-markdown'

const components: {} = {
  p: (p: { children: string }) => {
    return <p className="my-6 text-lg">{p.children}</p>
  },
  a: (a: { children: string; href: string }) => {
    return (
      <a
        href={a.href}
        target="_blank"
        className="border- border-b border-b-transparent text-blue-600 transition-colors hover:border-b-zinc-300">
        {a.children}
      </a>
    )
  },
  h2: (h2: { children: string }) => {
    return <h2 className="text-3xl">{h2.children}</h2>
  },
  h3: (h3: { children: string }) => {
    return <h3 className="text-2xl">{h3.children}</h3>
  },
  img: (img: { src: string; alt: string }) => {
    return (
      <img
        src={`${img.src}?w=1200&auto=format&auto=compress`}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="rounded-md shadow"
      />
    )
  }
}

const PostBody: React.FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown
      components={components}
      className="flex flex-col gap-y-4 py-12">
      {content}
    </ReactMarkdown>
  )
}
export default PostBody
