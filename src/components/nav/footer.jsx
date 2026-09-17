
import './nav.css';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className=' col-6 col-lg-3'>
                        <h1 className='logo'>Zeyad Badr</h1>
                    </div>
                    <div className='col-6 col-lg-2'>
                        <h1 className='footer-title'>Visit Link</h1>
                        <ul className='list'>
                            <li>Shop</li>
                            <li>Privacy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className='col-6 col-lg-2'>
                        <h1 className='footer-title'>Company</h1>
                        <ul className='list'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact US</li>
                        </ul>
                    </div>
                     <div className='col-6 col-lg-2'>
                        <h1 className='footer-title'>Contact</h1>
                        <ul className='list'>
                            <li>+20 01554867419</li>
                            <li>Info zeyad-badr-portfolio.zeadbadr57.workers.dev</li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <h1 className='footer-title'>contact</h1>
                        <p>
                            simply dummy text of the printing and typesetting industry
                        </p>
                    </div>
                </div>
                <div className='row border-top mt-3'>
                    <div className='col-12 my-4'> 
                        <p className='text-muted'>@ 2025 By Zeyad Badr. All rights reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer;