const navItems = [
    {
        id : 1,
        title : "Products",
        item1 : "Overview",
        item2 : "Pricing",
        item3 : "Marketplace",
        item4 : "Features",
        item5 :  "Integrations"
    },
    {
        id : 2,
        title : "Company",
        item1 : "About",
        item2 : "Team",
        item3 : "Blog",
        item4 : "Careers"
    },
    {
        id : 3,
        title : "Connect",
        item1 : "Contact",
        item2 : "Newsletter",
        item3 : "LinkedIn"
    }
]

const logNavTitles = (navItem) => {
    console.log(navItem.title)
}

navItems.map(logNavTitles)

export default navItems;