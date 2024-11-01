import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <div>
                    <a  href='http://facebook.com' ><img src='/imagens/fb.png' alt='Facebook logo' /></a>
                    <a href='http://twitter.com'>< img src='/imagens/tw.png' alt='Twitter logo' /></a>
                    <a href='http://instagram.com/'><img src='/imagens/ig.png' alt='Instagram logo' /></a>
                </div>
                <img src='/imagens/logo.png' alt='Logo organo' />
                <h3>Desenvolvido por Alura</h3>
            </section>
        </footer>

    )
}
export default Footer
