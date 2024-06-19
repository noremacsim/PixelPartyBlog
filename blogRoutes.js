
export default [
    {
        path: '/blog',
        component: () => import('@/views/blog/blog.vue'),
            meta: {
                jsonLd: {
                  "@context": "https://schema.org",
                  "@type": "Blog",
                  "name": "PixelParty Wedding Blog",
                  "description": "PixelParty Blog all things wedding and disposable camera app related sometimes even all kinds of events",
                  "url": "https://pixelparty.site/blog/",
                  "isAccessibleForFree": true,
                  "publisher": {
                    "@type": "Organization",
                    "name": "PixelParty",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://pixelparty.site/img/icons/114.png"
                    }
                  },
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://pixelparty.site/blog/"
                  },
                  "blogPosts": {
                    "@type": "BlogPosting",
                    "itemListElement": [
{
            "@type": "ListItem",
            "position": 0,
            "url": "https://pixelparty.site/blog/posts/A-Review-of-PixelParty-the-Ultimate-Wedding-Disposable-Camera-App",
            "name": "A Review of PixelParty, the Ultimate Wedding Disposable Camera App",
            "image": "https://pixelparty.site/blog/images/pasted-7.png"
        },{
            "@type": "ListItem",
            "position": 1,
            "url": "https://pixelparty.site/blog/posts/Hey-party-people",
            "name": "Hey party people!",
            "image": "https://pixelparty.site/blog/images/pasted-10.png"
        },{
            "@type": "ListItem",
            "position": 2,
            "url": "https://pixelparty.site/blog/posts/Introducing-PixelParty-Your-Ultimate-Disposable-Camera-App-Experience",
            "name": "Introducing PixelParty: Your Ultimate Disposable Camera App Experience!",
            "image": "https://pixelparty.site/blog/images/pasted-11.png"
        },{
            "@type": "ListItem",
            "position": 3,
            "url": "https://pixelparty.site/blog/posts/PixelParty-Revolutionizing-Wedding-Photography-Memories",
            "name": "PixelParty - Revolutionizing Wedding Photography & Memories",
            "image": "https://pixelparty.site/blog/images/pasted-0.png"
        },]
                  }
                }
            }
        },{
            path: '/blog/posts/A-Review-of-PixelParty-the-Ultimate-Wedding-Disposable-Camera-App',
            component: () => import('@/views/blog/posts/A-Review-of-PixelParty-the-Ultimate-Wedding-Disposable-Camera-App.vue'),
            meta: {
                title: 'A Review of PixelParty, the Ultimate Wedding Disposable Camera App',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Discover how PixelParty, the innovative wedding disposable camera app, can transform your wedding day memories. With unlimited photo uploads, instant access, and an easy-to-use QR code system, PixelParty ensures every special moment is captured. Read our in-depth review and learn why PixelParty is a must-have for modern weddings.'
                    },
                    {
                        name: 'keywords',
                        content: 'Wedding Disposable Camera App, Wedding, Disposable Camera App, Wedding Apps'
                    },
                    {
                        name: 'author',
                        content: 'PixelParty'
                    },
                    {
                        name: 'publish_date',
                        content: 'Jun 18, 2024'
                    },
                    // Twitter Card
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        name: 'twitter:title',
                        content: 'A Review of PixelParty, the Ultimate Wedding Disposable Camera App'
                    },
                    {
                        name: 'twitter:description',
                        content: 'Discover how PixelParty, the innovative wedding disposable camera app, can transform your wedding day memories. With unlimited photo uploads, instant access, and an easy-to-use QR code system, PixelParty ensures every special moment is captured. Read our in-depth review and learn why PixelParty is a must-have for modern weddings.'
                    },
                    {
                        name: 'twitter:image',
                        content: 'https://pixelparty.site/blog/images/pasted-7.png'
                    },
                    // Open Graph
                    {
                        property: 'og:title',
                        content: 'A Review of PixelParty, the Ultimate Wedding Disposable Camera App'
                    },
                    {
                      property: 'og:type',
                      content: 'article'
                    },
                    {
                      property: 'og:url',
                      content: 'https://pixelparty.site/blog/posts/A-Review-of-PixelParty-the-Ultimate-Wedding-Disposable-Camera-App'
                    },
                    {
                        property: 'og:description',
                        content: 'Discover how PixelParty, the innovative wedding disposable camera app, can transform your wedding day memories. With unlimited photo uploads, instant access, and an easy-to-use QR code system, PixelParty ensures every special moment is captured. Read our in-depth review and learn why PixelParty is a must-have for modern weddings.'
                    },
                    {
                        property: 'og:image',
                        content: 'https://pixelparty.site/blog/images/pasted-7.png'
                    },
                ],
                jsonLd: {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://pixelparty.site/blog/posts/A-Review-of-PixelParty-the-Ultimate-Wedding-Disposable-Camera-App"
                  },
                  "headline": "A Review of PixelParty, the Ultimate Wedding Disposable Camera App",
                  "image": [
                    "https://pixelparty.site/blog/images/pasted-7.png"
                   ],
                  "datePublished": "Jun 18, 2024",
                  "dateModified": "Jun 18, 2024",
                  "author": {
                    "@type": "Person",
                    "name": "NoremacSim"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "PixelParty",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://pixelparty.site/img/icons/114.png"
                    }
                  },
                  "description": "Discover how PixelParty, the innovative wedding disposable camera app, can transform your wedding day memories. With unlimited photo uploads, instant access, and an easy-to-use QR code system, PixelParty ensures every special moment is captured. Read our in-depth review and learn why PixelParty is a must-have for modern weddings.",
                  "articleBody": null
                }
            }
        },{
            path: '/blog/posts/Hey-party-people',
            component: () => import('@/views/blog/posts/Hey-party-people.vue'),
            meta: {
                title: 'Hey party people!',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Elevate your next event with PixelParty, the ultimate party photography app. Capture and share every moment with ease using a unique QR code. Join the party revolution today!'
                    },
                    {
                        name: 'keywords',
                        content: 'party photography, PixelParty app, QR code photos, event memories, digital scrapbooking, party planning, smartphone photography, personalized QR cards, photo sharing, party albums, party memories, event photography, graduation party, birthday bash, spontaneous gathering, party revolution, digital memories, party album, 5-star rated app, shared memories.'
                    },
                    {
                        name: 'author',
                        content: 'PixelParty'
                    },
                    {
                        name: 'publish_date',
                        content: 'Jun 18, 2024'
                    },
                    // Twitter Card
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        name: 'twitter:title',
                        content: 'Hey party people!'
                    },
                    {
                        name: 'twitter:description',
                        content: 'Elevate your next event with PixelParty, the ultimate party photography app. Capture and share every moment with ease using a unique QR code. Join the party revolution today!'
                    },
                    {
                        name: 'twitter:image',
                        content: 'https://pixelparty.site/blog/images/pasted-10.png'
                    },
                    // Open Graph
                    {
                        property: 'og:title',
                        content: 'Hey party people!'
                    },
                    {
                      property: 'og:type',
                      content: 'article'
                    },
                    {
                      property: 'og:url',
                      content: 'https://pixelparty.site/blog/posts/Hey-party-people'
                    },
                    {
                        property: 'og:description',
                        content: 'Elevate your next event with PixelParty, the ultimate party photography app. Capture and share every moment with ease using a unique QR code. Join the party revolution today!'
                    },
                    {
                        property: 'og:image',
                        content: 'https://pixelparty.site/blog/images/pasted-10.png'
                    },
                ],
                jsonLd: {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://pixelparty.site/blog/posts/Hey-party-people"
                  },
                  "headline": "Hey party people!",
                  "image": [
                    "https://pixelparty.site/blog/images/pasted-10.png"
                   ],
                  "datePublished": "Jun 18, 2024",
                  "dateModified": "Jun 18, 2024",
                  "author": {
                    "@type": "Person",
                    "name": "NoremacSim"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "PixelParty",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://pixelparty.site/img/icons/114.png"
                    }
                  },
                  "description": "Elevate your next event with PixelParty, the ultimate party photography app. Capture and share every moment with ease using a unique QR code. Join the party revolution today!",
                  "articleBody": null
                }
            }
        },{
            path: '/blog/posts/Introducing-PixelParty-Your-Ultimate-Disposable-Camera-App-Experience',
            component: () => import('@/views/blog/posts/Introducing-PixelParty-Your-Ultimate-Disposable-Camera-App-Experience.vue'),
            meta: {
                title: 'Introducing PixelParty: Your Ultimate Disposable Camera App Experience!',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Discover PixelParty, the ultimate disposable camera app. Effortlessly capture and share event memories with a unique QR code. Join the memory revolution today!'
                    },
                    {
                        name: 'keywords',
                        content: 'disposable camera app, PixelParty, QR code photos, event memories, digital scrapbooking, event planning, smartphone photography, customizable QR codes, photo sharing, event albums, memory preservation, digital to tangible, shared experiences, party photography, event creation, birthday bash, reunion photos, digital innovation, 5-star rated app, capture the moment.'
                    },
                    {
                        name: 'author',
                        content: 'PixelParty'
                    },
                    {
                        name: 'publish_date',
                        content: 'Jun 18, 2024'
                    },
                    // Twitter Card
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        name: 'twitter:title',
                        content: 'Introducing PixelParty: Your Ultimate Disposable Camera App Experience!'
                    },
                    {
                        name: 'twitter:description',
                        content: 'Discover PixelParty, the ultimate disposable camera app. Effortlessly capture and share event memories with a unique QR code. Join the memory revolution today!'
                    },
                    {
                        name: 'twitter:image',
                        content: 'https://pixelparty.site/blog/images/pasted-11.png'
                    },
                    // Open Graph
                    {
                        property: 'og:title',
                        content: 'Introducing PixelParty: Your Ultimate Disposable Camera App Experience!'
                    },
                    {
                      property: 'og:type',
                      content: 'article'
                    },
                    {
                      property: 'og:url',
                      content: 'https://pixelparty.site/blog/posts/Introducing-PixelParty-Your-Ultimate-Disposable-Camera-App-Experience'
                    },
                    {
                        property: 'og:description',
                        content: 'Discover PixelParty, the ultimate disposable camera app. Effortlessly capture and share event memories with a unique QR code. Join the memory revolution today!'
                    },
                    {
                        property: 'og:image',
                        content: 'https://pixelparty.site/blog/images/pasted-11.png'
                    },
                ],
                jsonLd: {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://pixelparty.site/blog/posts/Introducing-PixelParty-Your-Ultimate-Disposable-Camera-App-Experience"
                  },
                  "headline": "Introducing PixelParty: Your Ultimate Disposable Camera App Experience!",
                  "image": [
                    "https://pixelparty.site/blog/images/pasted-11.png"
                   ],
                  "datePublished": "Jun 18, 2024",
                  "dateModified": "Jun 18, 2024",
                  "author": {
                    "@type": "Person",
                    "name": "NoremacSim"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "PixelParty",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://pixelparty.site/img/icons/114.png"
                    }
                  },
                  "description": "Discover PixelParty, the ultimate disposable camera app. Effortlessly capture and share event memories with a unique QR code. Join the memory revolution today!",
                  "articleBody": null
                }
            }
        },{
            path: '/blog/posts/PixelParty-Revolutionizing-Wedding-Photography-Memories',
            component: () => import('@/views/blog/posts/PixelParty-Revolutionizing-Wedding-Photography-Memories.vue'),
            meta: {
                title: 'PixelParty - Revolutionizing Wedding Photography & Memories',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Discover PixelParty, the ultimate disposable camera app for weddings. Capture, share, and relive every magical moment effortlessly. Join the wedding photography revolution and turn digital memories into tangible keepsakes. Explore more at PixelParty Weddings.'
                    },
                    {
                        name: 'keywords',
                        content: 'PixelParty, wedding photography, disposable camera app, wedding album, QR code wedding photos, wedding photo sharing, wedding keepsakes, capture wedding moments, wedding photography solution, digital wedding memories'
                    },
                    {
                        name: 'author',
                        content: 'PixelParty'
                    },
                    {
                        name: 'publish_date',
                        content: 'Jun 18, 2024'
                    },
                    // Twitter Card
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        name: 'twitter:title',
                        content: 'PixelParty - Revolutionizing Wedding Photography & Memories'
                    },
                    {
                        name: 'twitter:description',
                        content: 'Discover PixelParty, the ultimate disposable camera app for weddings. Capture, share, and relive every magical moment effortlessly. Join the wedding photography revolution and turn digital memories into tangible keepsakes. Explore more at PixelParty Weddings.'
                    },
                    {
                        name: 'twitter:image',
                        content: 'https://pixelparty.site/blog/images/pasted-0.png'
                    },
                    // Open Graph
                    {
                        property: 'og:title',
                        content: 'PixelParty - Revolutionizing Wedding Photography & Memories'
                    },
                    {
                      property: 'og:type',
                      content: 'article'
                    },
                    {
                      property: 'og:url',
                      content: 'https://pixelparty.site/blog/posts/PixelParty-Revolutionizing-Wedding-Photography-Memories'
                    },
                    {
                        property: 'og:description',
                        content: 'Discover PixelParty, the ultimate disposable camera app for weddings. Capture, share, and relive every magical moment effortlessly. Join the wedding photography revolution and turn digital memories into tangible keepsakes. Explore more at PixelParty Weddings.'
                    },
                    {
                        property: 'og:image',
                        content: 'https://pixelparty.site/blog/images/pasted-0.png'
                    },
                ],
                jsonLd: {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://pixelparty.site/blog/posts/PixelParty-Revolutionizing-Wedding-Photography-Memories"
                  },
                  "headline": "PixelParty - Revolutionizing Wedding Photography & Memories",
                  "image": [
                    "https://pixelparty.site/blog/images/pasted-0.png"
                   ],
                  "datePublished": "Jun 18, 2024",
                  "dateModified": "Jun 18, 2024",
                  "author": {
                    "@type": "Person",
                    "name": "NoremacSim"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "PixelParty",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://pixelparty.site/img/icons/114.png"
                    }
                  },
                  "description": "Discover PixelParty, the ultimate disposable camera app for weddings. Capture, share, and relive every magical moment effortlessly. Join the wedding photography revolution and turn digital memories into tangible keepsakes. Explore more at PixelParty Weddings.",
                  "articleBody": null
                }
            }
        },]