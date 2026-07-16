import type { BlogPost } from '@/lib/types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'engineering-over-assembly-why-we-avoid-templates',
    title: 'Engineering Over Assembly: Why We Avoid Templates in Enterprise Projects',
    excerpt: 'When failure isn\'t an option, copy-pasting code from templates introduces unacceptable risk. Here is why we insist on custom architectures for critical systems.',
    content: `
At Kalpana Software Solutions, one of our core principles is "Engineering Over Assembly." In an era where many agencies act more as integrators of templates and plugins rather than true engineers, we maintain a strict policy of bespoke architecture for enterprise systems.

### The Problem with Templates

Templates are built for the average use case. They are designed to appeal to the broadest possible audience, which means they contain thousands of lines of code for features you will never use. This bloat increases the attack surface, degrades performance, and creates technical debt before you even write your first line of custom logic.

When a critical system goes down, you cannot wait on a template vendor in another time zone to issue a patch. You need an engineering team that understands the codebase because they wrote it.

### Our Approach

We start every project with a blank slate, but not from scratch. We rely on heavily tested, proven frameworks (like Next.js, FastAPI, and PostgreSQL), but the application logic, the database schema, and the UI components are crafted specifically for the problem at hand.

- **Security by Design:** We build role-based access control and encryption into the architecture from day one.
- **Maintainable Codebases:** Our handovers include comprehensive documentation and clean code that your internal team can actually read and own.
- **Performance:** Because we only ship the code that is needed, our systems consistently hit sub-200ms latency targets.

We don't assemble software; we engineer it. For our clients in healthcare, government, and finance, that difference is everything.
    `,
    date: 'Oct 12, 2025',
    author: 'Gaurav Kr Tripathi',
    readTime: '4 min read',
    category: 'Engineering Principles'
  },
  {
    slug: 'the-true-cost-of-technical-debt-in-healthcare',
    title: 'The True Cost of Technical Debt in Healthcare Data Systems',
    excerpt: 'A look into how legacy databases and brittle APIs compromise patient care, and how we modernize these systems safely.',
    content: `
Technical debt is often framed as a future problem for the engineering team. In the healthcare sector, however, technical debt is a present danger to patient outcomes.

When we began work on the MediChain project, we encountered a common scenario: a regional network running on siloed, paper-backed systems interspersed with legacy SQL databases that had not been updated in a decade.

### The Impact of Legacy Tech

The most immediate impact was latency. Not just API latency, but human latency. When a clinician needs to access a patient's cross-departmental history, waiting 30 minutes for faxes and phone calls can lead to critical misdiagnoses.

Furthermore, these legacy systems lacked granular audit trails. Security was binary: you either had access to the system, or you didn't. In a HIPAA-compliant environment, this is unacceptable.

### Modernization Strategies

You cannot simply turn off a hospital's database and migrate overnight. Our approach involves the Strangler Fig pattern:
1. **API Abstraction:** We wrap legacy systems in modern REST or GraphQL APIs to standardize data access.
2. **Incremental Migration:** We migrate specific modules (e.g., patient intake) to the new infrastructure while keeping the legacy system as the source of truth.
3. **Cutover:** Once the new module is verified, we flip the switch.

This methodical approach allowed us to deliver MediChain with zero downtime, upgrading their infrastructure to a high-availability AWS environment with end-to-end encryption.
    `,
    date: 'Nov 28, 2025',
    author: 'Gaurav Kr Tripathi',
    readTime: '5 min read',
    category: 'Case Studies'
  },
  {
    slug: 'winning-the-sih-internal-hackathon-lessons-learned',
    title: 'Winning the SIH Internal Hackathon: Lessons in Rapid Prototyping',
    excerpt: 'How our team secured 1st place through ruthless prioritization, clean architecture, and a focus on the end-user.',
    content: `
Hackathons are often seen as venues for chaotic, spaghetti-code sprints. However, our 1st place finish at the Smart India Hackathon (SIH) Internal Selection Round proved that disciplined engineering always wins out over rushed feature-cramming.

### The Challenge

We were tasked with building a complex problem statement solution within a strict 36-hour window. Many teams immediately started building flashy UIs with hardcoded data. We took a different approach.

### 1. Ruthless Prioritization

In the first two hours, we stripped the problem statement down to its absolute core. We defined the "critical path" – the single user journey that the judges needed to see to understand the value of our solution. Everything else was discarded.

### 2. Architecture First

Before writing a single component, we sketched our database schema and API contracts. We agreed on the data models. This meant the frontend and backend could be developed completely in parallel without integration nightmares at hour 30.

### 3. The Power of "Boring" Tech

We didn't experiment with a new beta framework. We used our audited stack: Next.js, Tailwind, and a stable backend. This allowed us to move incredibly fast because we weren't fighting the tools; we were solving the problem.

### The Result

When demo time came, our application didn't crash. The data was real, the state management was solid, and the core workflow was flawless. The lesson is clear: even under extreme time pressure, engineering fundamentals matter.
    `,
    date: 'Jan 15, 2026',
    author: 'Gaurav Kr Tripathi',
    readTime: '3 min read',
    category: 'Company News'
  }
]

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}
