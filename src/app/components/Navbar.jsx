import Image from 'next/image';
import logo from '../../../public/logo.png';
import styles from '../../styles/Navbar.module.css';


function Navbar() {
  return (
    <div className="navbar-logo">
      <a href="/" className="left-menu">
        <Image src="/logo.png" alt="PHARMACY" width={200} height={50} />
      </a>
    </div>
  );
}

export default Navbar;
