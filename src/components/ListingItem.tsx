import React from 'react'
import ListingElement from 'src/styles/ListingElement'
import PostPreview from 'src/types/PostPreview'
import AppLink from './AppLink'

interface ListingItemProps {
  post: PostPreview
}

const ListingItem: React.FC<ListingItemProps> = ({ post }) => {
  return (
    <ListingElement>
      <AppLink href={`/blog/${post.slug}`} label={post.title} />
      {post.excerpt && <p>{post.excerpt}</p>}
    </ListingElement>
  )
}

export default ListingItem
