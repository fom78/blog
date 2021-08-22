import { getFileBySlug, getFiles } from '../lib/mdx'

export default function Post({ source, frontmatter }) {
    return <h1>hola</h1>
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug)
    console.log({source, frontmatter});
    return {
      props:{source, frontmatter}
    }
  }

  export async function getStaticPaths() {
    const posts = await getFiles("posts");
    const paths = posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }