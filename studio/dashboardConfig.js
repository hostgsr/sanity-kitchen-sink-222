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
                  buildHookId: '631870c09e690d1704efec44',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-222-studio',
                  apiId: 'f2f0e9cb-81ea-44d4-9d97-28c4e19b426d'
                },
                {
                  buildHookId: '631870c09e690d17b4efead2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-222',
                  apiId: '160e803d-bb2e-400c-a8a5-a0c6a5720702'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hostgsr/sanity-kitchen-sink-222',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-222.netlify.app', category: 'apps'}
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
