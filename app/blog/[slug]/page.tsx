import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { blogPosts, getPostBySlug } from '@/lib/data/blog'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }): React.ReactElement {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Very basic Markdown to HTML parser just for paragraphs and headings, 
  // since we don't have a markdown library installed
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.trim().startsWith('### ')) {
        return <h3 key={i} className="text-2xl font-bold mt-8 mb-4 text-[var(--text-primary)]">{block.replace('### ', '')}</h3>
      }
      if (block.trim().startsWith('- ')) {
        const items = block.split('\n').filter(l => l.trim().startsWith('- '));
        return (
          <ul key={i} className="list-disc pl-5 my-4 space-y-2 text-[var(--text-secondary)] text-base leading-relaxed">
            {items.map((item, j) => {
              const text = item.replace('- ', '');
              // Basic bold replacement
              const parts = text.split(/\*\*(.*?)\*\*/g);
              return (
                <li key={j}>
                  {parts.map((part, k) => (k % 2 === 1 ? <strong key={k} className="text-[var(--text-primary)]">{part}</strong> : part))}
                </li>
              )
            })}
          </ul>
        )
      }
      return <p key={i} className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">{block.trim()}</p>
    })
  }

  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <article>
          <header
            className="pt-40 pb-20 border-b border-[var(--border)]"
            style={{ background: 'var(--bg)' }}
          >
            <div className="max-w-3xl mx-auto px-6 md:px-8">
              <div className="flex flex-col gap-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors w-fit"
                >
                  <ArrowLeft size={14} />
                  Back to Insights
                </Link>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-widest">
                  <span className="text-[#2563EB] bg-[rgba(37,99,235,0.10)] border border-[rgba(37,99,235,0.20)] px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.02em] text-balance">
                  {post.title}
                </h1>
                
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-3 mt-4 pt-6 border-t border-[var(--border)]">
                  <div className="w-10 h-10 rounded-full bg-[rgba(37,99,235,0.12)] text-[#2563EB] flex items-center justify-center font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{post.author}</p>
                    <p className="text-xs text-[var(--text-tertiary)]">Kalpana Software Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="py-16 bg-[var(--bg)]">
            <div className="max-w-3xl mx-auto px-6 md:px-8">
              <div className="prose prose-invert max-w-none">
                {renderContent(post.content)}
              </div>
            </div>
          </div>
        </article>
        
        <CTABannerSection />
      </main>
    </>
  )
}
