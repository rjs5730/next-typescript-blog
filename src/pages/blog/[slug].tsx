import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Container } from 'src/styles/Containers'
import { Title } from 'src/styles/TextElements'

interface BlogPostProps {
  content: string
  excerpt: string
  frontmatter: {
    title: string
    author: string
    date: string
  }
}

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, excerpt, content }) => {
  return (
    <Layout pageTitle="About" description={excerpt}>
      <Container>
        <h3>
          By {frontmatter.author} - {frontmatter.date}
        </h3>
        <Title>{frontmatter.title}</Title>
        <ReactMarkdown children={content} />
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('src/_posts')
  const paths = files.map((fname) => ({
    params: {
      slug: fname.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  try {
    const slug = params?.slug
    const md = await fs.readFileSync(path.join('src', '_posts', `${slug}.md`)).toString()
    const { data, content, excerpt } = matter(md)
    const date = data.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    return {
      props: {
        frontmatter: {
          title: data.title,
          author: data.author,
          date,
        },
        excerpt,
        content,
      },
    }
  } catch (error) {
    console.error(error)
  }
}

export default BlogPost
