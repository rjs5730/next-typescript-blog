import React from 'react'
import { Container } from 'src/styles/Containers'
import { Title } from 'src/styles/TextElements'
import PostPreview from 'src/types/PostPreview'
import PostListing from './PostListing'

interface MainSectionProps {
  posts: PostPreview[]
}

const MainSection: React.FC<MainSectionProps> = ({ posts }) => {
  return (
    <main>
      <Container>
        <Title>All Posts</Title>
        <PostListing posts={posts} />
      </Container>
    </main>
  )
}

export default MainSection
