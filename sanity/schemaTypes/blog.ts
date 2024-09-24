export default{
    name: 'blog',
    type: 'document',
    title: 'BLOG',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options:{
                source: 'title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'CoverImage'
        },
        {
            name: 'subtitle',
            type: 'text',
            title: 'Sub Title'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of:[
                {
                    type:'block'
                }
            ]
        }
    ],
}