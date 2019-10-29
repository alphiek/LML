import {colors} from '../Utilities/colors'

export const carouselCopy = {
    landlordBlogs: {
        blogs: true,
        page: 'landlords',
        h2: `Landlord Blog Title`,
        h2p2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a imperdiet est, vel ultrices ipsum.`,
        link: {

            name: `View all blogs<<<`,
            url: `https://likemindedliving.co.uk/blog/`
        },
        color: `${colors.textPrimary}`,
        bgColor: `${colors.white}`
    },
    blogs: {
        blogs: true,
        page: 'tenants',
        h2: `Looking for Inspiration?`,
        h2p2: `Check out our recent blogs and top tips for living in the city`,
        link: {
            name: `View all blogs <<<`,
            url: `https://likemindedliving.co.uk/blog/`
        },
        color: `${colors.textPrimary}`,
        bgColor: `${colors.white}`,
        divider: `${colors.mint}`,
    },
    properties: {
        h2: `Featured Properties`,
        link: {
            name: `View all available properties <<<`,
            url: `https://likemindedliving.co.uk/properties/`
        },
        color: `${colors.textPrimary}`,
        bgColor: `${colors.white}`
    },


}