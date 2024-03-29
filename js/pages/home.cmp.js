export default {
    template: `
    <section class="home-page">
        <header class="home-header flex">
            <router-link exact to="/"><i class="fab fa-sketch"></i> Appsus</router-link>
        </header>
        <main>
            <section class="main-grid-menu">
                <ul class="menu-list flex">

                
                    <li class="animated fadeInLeft delay-0.7s"><router-link to="/mail"><img src="./././img/gmail-icon.png"/><span>Mail App</span></router-link></li>
                    <li class="animated fadeIn delay-1s"><router-link to="/about"><img src="./././img/about.png"/><span>About Us</span></router-link></li>
                    <li class="animated fadeInRight delay-1.2s"><router-link to="/keep"><img src="./././img/keep.png"/><span>Keep App</span></router-link></li>
                </ul>
            </section>
        </main>
    </section>
    `


}