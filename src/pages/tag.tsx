import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Chip, { TLabel } from "../shared-UI/Chip/Chip"
import { IPost } from "../types/post.type"

interface ITagProps {
  data: any
  location: {
    pathname: string
    search: string
  }
}

/**
 * Hardcoded for tag query.
 * Bear in mind to update this mapping when adding new tag
 */

const tagQueryMapping = {
  "?q=java": "java",
  "?q=javascript": "javascript",
  "?q=oop": "oop",
  "?q=rxjs": "rxjs",
} as const

type TtagQueryKey = keyof typeof tagQueryMapping

const Tag = ({ data, location }: ITagProps) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes as IPost[]

  const [allTagPosts, setAllTagPosts] = React.useState(posts)

  const query = location?.search as TtagQueryKey
  const tag = tagQueryMapping[query]

  React.useEffect(() => {
    const tagPost = posts.filter(
      (post: any) => post.frontmatter.tag.toLowerCase() === tag
    )
    setAllTagPosts(tagPost)
  }, [tag])

  if (allTagPosts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {allTagPosts.map((post: any) => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  <Chip
                    label={
                      (post.frontmatter?.tag?.toLowerCase() as TLabel) ||
                      "default"
                    }
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Tag

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tag
        }
      }
    }
  }
`
