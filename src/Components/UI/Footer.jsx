import { MdPlace } from 'react-icons/md';
import footerDetails from '../../api/footerApi.json';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';
import { NavLink } from 'react-router';

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerDetails.map((footerDetail, index) => {
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[footerDetail.icon]}</div>
              <div className="footer-contact-text">
                <p>{footerDetail.title}</p>
                <p>{footerDetail.details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2026, All Right Reserved
                <NavLink to="https://github.com/Shisir-Karki" target="_blank">
                  ShisirKarki
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/shisir-karki-b20729427/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};