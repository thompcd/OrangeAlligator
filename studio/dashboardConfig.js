export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8ae92c29d39c2c4dc69abe',
                  title: 'Sanity Studio',
                  name: 'OrangeAlligator-studio',
                  apiId: 'd01659c4-5af0-46b8-8a86-f620facc2938'
                },
                {
                  buildHookId: '5d8ae92ca0d89336a252be20',
                  title: 'Blog Website',
                  name: 'OrangeAlligator',
                  apiId: '4f608a89-9567-4691-b4c8-ccdbb07267e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thompcd/OrangeAlligator',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://OrangeAlligator.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
