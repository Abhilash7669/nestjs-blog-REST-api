'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-mastery documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' :
                                            'id="xs-controllers-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' :
                                        'id="xs-injectables-links-module-AppModule-e884a00d14a89820d1e7d14b1a6021a0a3847607be7166c0ec2f8cb43f9e60b595561e1b67ac3f5fb3754147266e9ae43ef905af8f3e9103f5e076ab11b9e0b8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' :
                                            'id="xs-controllers-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' :
                                        'id="xs-injectables-links-module-PostsModule-185151e3522f45f244366c467ac11003d6e677d4bbbd3f2e2a146082c91bc58a3366298620c319699e988aafd0f954d45d48f25e99c957ec2cc9554788109802"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' :
                                            'id="xs-controllers-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' :
                                        'id="xs-injectables-links-module-UsersModule-fff9ece0be2ffcf8742f9774e9d809b149dd974761a773b1c375d5fe629211506801c76b5dbd5d97e48c130ab18bc39f4fdfa26d1806600e0cc0e97ec59e00aa"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostsDto.html" data-type="entity-link" >CreatePostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostsMetaDataDto.html" data-type="entity-link" >CreatePostsMetaDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsersDto.html" data-type="entity-link" >CreateUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsParamsDto.html" data-type="entity-link" >GetPostsParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamsDto.html" data-type="entity-link" >GetUsersParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersQueryDto.html" data-type="entity-link" >GetUsersQueryDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});