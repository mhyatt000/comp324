// inspired by nicholas synovic

function get_URL() {
    return window.location.href.split('/').slice(-1)
}
function get_page() {
    const page = get_URL()
    return String(page).split('.')[0]
}
function make_red(anchor) {
    // if you are on the current page then highlight its link in red
    const page = get_page()
    const re = RegExp('>.*<')
    const linktext = String(anchor).match(re)[0].slice(1,-1).toLowerCase()
    if (page === linktext || (page === 'index' && linktext === 'home')) {
        const out = '<a style="color:red"' + anchor.slice(2,-1) + '>'
        console.log(out)
        return out
    }
    return anchor
}

function build_navbar(){
    const navbar = document.getElementsByTagName("nav")[0]
    const template = document.createElement("template")

    template.innerHTML = `
            <div class="heading">
                <h2>The Web Fund</h2>
            </div>
            <ul class="nav-links">
                <li>${make_red('<a href="index.html">Home</a>')}</li>
                <li>${make_red('<a href="about.html">About</a>')}</li>
                <li>${make_red('<a href="graph.html">Graph</a>')}</li>
                <li>${make_red('<a href="contact.html">Contact</a>')}</li>
                <li>${make_red('<a href="news.html">News</a>')}</li>
            </ul>
    `
    navbar.appendChild(template.content)

}

function build_footer() {

    const footer = document.getElementsByTagName("footer")[0]
    const template = document.createElement("template")

    template.innerHTML = `
        <div class="section-body">
            By: Anthony Peters and Matt Hyatt
        </div>
    `
    footer.appendChild(template.content)
}

function build_sidebars() {

    const container = document.getElementsByClassName("container")[0]
    const template = document.createElement("template")

    template.innerHTML = `
        <div class="sidebar-left"></div>
        <div class="sidebar-right"></div>
    `
    container.appendChild(template.content)
}

function main(){

    build_navbar()
    build_sidebars()
    build_footer()

}
