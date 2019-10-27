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
        name: 'skills',
        type: 'array',
        title: 'Skills',
        of: [
          {
            type: 'reference',
            to: {
              type: 'skill'
            }
          }
        ]
      },
      {
        name: 'bio',
        type: 'text',
        title: 'Bio'
      },
      {
        name: 'linkedIn',
        type: 'url',
        title: 'LinkedIn URL'
      },
      {
        name: 'facebook',
        type: 'url',
        title: 'Facebook URL'
      },
      {
        name: 'twitter',
        type: 'url',
        title: 'Twitter URL'
      },
      {
        name: 'github',
        type: 'url',
        title: 'Github URL'
      },
      {
        name: 'deviantArt',
        type: 'url',
        title: 'DeviantArt URL'
      },
      {
        name: 'devTo',
        type: 'url',
        title: 'Dev.To URL'
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
  