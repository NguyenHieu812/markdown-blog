'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Giscus from '@giscus/react'

export default function Comments() {
  // const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }
  return (
    <>
      {/* <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} /> */}
      <Giscus
        repo="NguyenHieu812/markdown-blog"
        repoId="R_kgDOMzY7HA"
        category="Announcements"
        categoryId="DIC_kwDOMzY7HM4Ci8WW"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
        cross-origin="anonymous"
      />
    </>
  )
}
