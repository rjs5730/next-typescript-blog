import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import PostPreview from 'src/types/PostPreview'

import fs from 'fs'
import matter from 'gray-matter'

import Layout from 'src/components/Layout'
import Hero from 'src/components/Hero'
import MainSection from 'src/components/MainSection'

interface BlogProps {
  posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout pageTitle="Blog">
      <Hero />
      <MainSection posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files = fs.readdirSync('src/_posts')
  const posts = files.map((fname) => {
    const md = fs.readFileSync(`src/_posts/${fname}`).toString()
    const { data, excerpt } = matter(md, { excerpt: true })
    console.log('test', excerpt)
    return {
      slug: fname.replace('.md', ''),
      title: data.title,
      excerpt,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Blog
