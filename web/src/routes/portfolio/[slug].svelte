<script context="module">
  import blocksToHtml from '@sanity/block-content-to-html'
  import client from '../../sanityClient'
  import serializers from '../../components/serializers'
	export async function preload({ params }) {
		// the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params
    const filter = '*[_type == "teamMember" && slug.current == $slug]'
    const projection = '';
    // const projection = `{
    //   ...,
    //   body[]{
    //     ...,
    //     children[]{
    //       ...,
    //       _type == 'authorReference' => {
    //         author->
    //       }
    //     }
    //   }
    // }`

    const query = filter + projection
    const post = await client.fetch(query, { slug }).catch(err => this.error(500, err))
    return { post: {
      ...post,
      body: blocksToHtml({blocks: post.body, serializers, ...client.clientConfig })
    } };
	}
</script>