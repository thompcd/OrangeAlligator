export default {
    name: 'teamMember',
    type: 'document',
    title: 'Team Member',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      },
      {
        name: 'jobTitle',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'bio',
        type: 'text',
        title: 'Bio'
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image'
      }
    }
  }
  