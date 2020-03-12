const HomeDescription = `Three levels of cascading vegetable gardens churning out 
    the sweetest produce and a team of outrageously talented cooks and from-of-house 
    staff combine to make Plaza Athénée the ultimate restaurant experience.`;

const menuDescription = `We want your time with us to count. So along with an inviting 
    atmosphere where everyone can be comfortable, we offer delectable handcrafted appetizers,
    a glass of wine and the caring and service that you deserve.`;

export const tabs = (currentTab = 'Home') => `
    <div class="global-header ${currentTab === 'Home' ? 'yellow-bg' : 'dark-bg'}">
        <nav class="big-container">
            <ul>
                <li ${currentTab === 'Home' ? 'class="current"' : ''} id="home">Home</li>
                <li ${currentTab === 'Menu' ? 'class="current"' : ''} id="menu">Menu</li>
                <li ${currentTab === 'Contact' ? 'class="current"' : ''} id="contact">Contact</li>
            </ul>
        </nav>
    </div>
`;

export const hero = (title = 'Plaza Athénée', description = HomeDescription, imageClass = 'home') => `
    <div class="hero">
        <div class="hero-text ${imageClass === 'home' ? 'dark-bg' : 'yellow-bg'}">
            <h2 class="title" style="${imageClass === 'home' ? 'color: #ead975;' : ''}">${title}</h2>
            <p>${description}</p>
        </div>
        <div class="hero-image ${imageClass}"></div>
    </div>
`;

export const home = () => `
    ${tabs('Home')}
    <div class="page-body split yellow-dark-gradient" id="tab-container">
        <div class="big-container tab-content">
            ${hero()}
        </div>
    </div>
`;

export const menu = () => `
    ${tabs('Menu')}
    <div class="page-body split dark-yellow-gradient" id="tab-container">
        <div class="big-container tab-content">
            ${hero('Menu', menuDescription, 'menu')}
        </div>
    </div>
`;