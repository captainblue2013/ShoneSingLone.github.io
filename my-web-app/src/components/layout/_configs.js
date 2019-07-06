export default {
    info: {
        name: "ShoneSingLone's zone",
        docs: 'https://xaoxuu.com/wiki/material-x/',
        cdn: {
            css: {
                style: 'https://cdn.jsdelivr.net/gh/xaoxuu/cdn-material-x@19.5/css/style.css'
            },
            localJS: {
                app: 'https://cdn.jsdelivr.net/gh/xaoxuu/cdn-material-x@19.5/js/app.js',
                search: 'https://cdn.jsdelivr.net/gh/xaoxuu/cdn-material-x@19.5/js/search.js',
                volantis: 'https://cdn.jsdelivr.net/gh/xaoxuu/volantis@1.0/js/volantis.min.js'
            },
            js: {
                app: '/js/app.js',
                search: '/js/search.js',
                volantis: '/js/volantis.js'
            }
        }
    },
    style: 'pure',
    scrollreveal: true,
    nodewaves: true,
    busuanzi: true,
    music: {
        enable: true,
        color: '#1BCDFC',
        mode: 'circulation',
        server: 'netease',
        type: 'playlist',
        id: 2615636388,
        volume: 0.7,
        autoplay: false
    },
    avatar_placeholder: 'https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png',
    date_format: 'YYYY-MM-DD',
    updated_date_format: 'll',
    backstretch: {
        position: 'cover',
        duration: 6000,
        fade: 2500,
        images: ['https://img.vim-cn.com/6d/a0c9e6f9efad8b731cb7376504bd10d79d2053.jpg']
    },
    cover: {
        scheme: 'search',
        title: "SSL's zone",
        features: [{
                name: '博文',
                icon: 'fas fa-rss',
                url: '/'
            },
            {
                name: '项目',
                icon: 'fas fa-code-branch',
                url: 'projects/'
            },
            {
                name: '友链',
                icon: 'fas fa-link',
                url: 'friends/',
                rel: 'nofollow'
            },
            {
                name: '关于',
                icon: 'fas fa-info-circle',
                url: 'about/',
                rel: 'nofollow'
            }
        ]
    },
    menu_desktop: [{
            name: '示例',
            icon: 'fas fa-grin',
            url: '/'
        },
        {
            name: '分类',
            icon: 'fas fa-folder-open',
            url: 'blog/categories/',
            rel: 'nofollow'
        },
        {
            name: '标签',
            icon: 'fas fa-hashtag',
            url: 'blog/tags/',
            rel: 'nofollow'
        },
        {
            name: '归档',
            icon: 'fas fa-archive',
            url: 'blog/archives/',
            rel: 'nofollow'
        }
    ],
    menu_mobile: [{
            name: '近期文章',
            icon: 'fas fa-clock',
            url: '/'
        },
        {
            name: '文章归档',
            icon: 'fas fa-archive',
            url: 'blog/archives/',
            rel: 'nofollow'
        },
        {
            name: '开源项目',
            icon: 'fas fa-code-branch',
            url: 'projects/'
        },
        {
            name: '我的友链',
            icon: 'fas fa-link',
            url: 'friends/',
            rel: 'nofollow'
        },
        {
            name: '主题文档',
            icon: 'fas fa-book',
            url: 'https://xaoxuu.com/wiki/material-x/',
            rel: 'nofollow'
        },
        {
            name: '关于小站',
            icon: 'fas fa-info-circle',
            url: 'about/',
            rel: 'nofollow'
        }
    ],
    meta: {
        header: ['title', 'author', 'date', 'categories', 'counter', 'top'],
        footer: ['updated', 'tags', 'share']
    },
    body: ['article', 'comments'],
    sidebar: [{
            widget: 'author',
            avatar: 'https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png',
            social: true
        },
        {
            widget: 'toc'
        },
        {
            widget: 'grid',
            icon: 'fas fa-map-signs',
            title: '站内导航',
            rows: [{
                    name: '近期文章',
                    icon: 'fas fa-clock',
                    url: '/'
                },
                {
                    name: '文章归档',
                    icon: 'fas fa-archive',
                    url: 'blog/archives/',
                    rel: 'nofollow'
                },
                {
                    name: '开源项目',
                    icon: 'fas fa-code-branch',
                    url: 'projects/'
                },
                {
                    name: '我的友链',
                    icon: 'fas fa-link',
                    url: 'friends/',
                    rel: 'nofollow'
                },
                {
                    name: '主题文档',
                    icon: 'fas fa-book',
                    url: 'https://xaoxuu.com/wiki/material-x/',
                    rel: 'nofollow'
                },
                {
                    name: '关于小站',
                    icon: 'fas fa-info-circle',
                    url: 'about/',
                    rel: 'nofollow'
                }
            ]
        },
        {
            widget: 'category',
            more: {
                icon: 'fas fa-expand-arrows-alt',
                url: 'blog/categories/',
                rel: 'nofollow'
            }
        },
        {
            widget: 'tagcloud',
            icon: 'fas fa-fire',
            more: {
                icon: 'fas fa-expand-arrows-alt',
                url: 'blog/tags/',
                rel: 'nofollow'
            }
        },
        {
            widget: 'music',
            icon: 'fas fa-compact-disc',
            title: '最近在听',
            more: {
                icon: 'far fa-heart',
                url: 'https://music.163.com/#/user/home?id=63035382',
                rel: 'external nofollow noopener noreferrer',
                target: '_blank'
            },
            server: 'netease',
            type: 'playlist',
            id: 2615636388
        }
    ],
    social: [{
            icon: 'fas fa-rss',
            url: 'atom.xml'
        },
        {
            icon: 'fas fa-envelope',
            url: 'mailto:me@xaoxuu.com'
        },
        {
            icon: 'fab fa-github',
            url: 'https://github.com/xaoxuu'
        },
        {
            icon: 'fas fa-headphones-alt',
            url: 'https://music.163.com/#/user/home?id=63035382'
        }
    ],
    share: [{
            id: 'qq',
            name: 'QQ好友',
            img: 'https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/qq.png'
        },
        {
            id: 'qzone',
            name: 'QQ空间',
            img: 'https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/qzone.png'
        },
        {
            id: 'weibo',
            name: '微博',
            img: 'https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/weibo.png'
        }
    ],
    valine: {
        enable: true,
        volantis: true,
        guest_info: 'nick,mail,link',
        placeholder: '快来评论吧~',
        avatar: 'mp',
        pageSize: 10,
        verify: true,
        notify: true,
        lang: 'zh-cn',
        highlight: true
    },
    search: {
        enable: true,
        service: 'hexo',
        google_api_key: null,
        google_engine_id: null,
        algolia_app_id: null,
        algolia_api_key: null,
        algolia_index_name: null,
        azure_service_name: null,
        azure_index_name: null,
        azure_query_key: null,
        baidu_api_id: null
    },
    less: {
        compress: true
    }
}