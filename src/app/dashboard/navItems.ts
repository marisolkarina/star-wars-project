interface NavItem{
    path: string,
    title: string,
    icon?: string
}

const mylinks: NavItem[] = [
    {
        path: 'all-cards',
        title: 'Universo de cartas',
        icon: 'dashboard'
    },
    {
        path: 'buy-card',
        title: 'Comprar carta',
        icon: 'shop'
    },
    {
        path: 'my-cards',
        title: 'Mis cartas',
        icon: 'style'
    }
]

export default mylinks;