import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../../images/mubaader-logo.png'

const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Mubaader Logo" />
            <p>{language ? 
              "Your one-stop-shop clinic for Small & Medium Businesses in Kuwait" : 
              "عيادتك الشاملة للشركات الصغيرة والمتوسطة في الكويت"}
            </p>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h3>{language ? "Quick Links" : "روابط سريعة"}</h3>
              <ul>
                <li><a href="#">{language ? "Home" : "الرئيسية"}</a></li>
                <li><a href="#">{language ? "Who We Are" : "من نحن"}</a></li>
                <li><a href="#">{language ? "What We Do" : "ماذا نقدم"}</a></li>
                <li><a href="#">{language ? "Portfolio" : "معرض أعمالنا"}</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h3>{language ? "Our Services" : "خدماتنا"}</h3>
              <ul>
                <li><a href="#">{language ? "Business Setup" : "تأسيس الأعمال"}</a></li>
                <li><a href="#">{language ? "Marketing Solutions" : "حلول التسويق"}</a></li>
                <li><a href="#">{language ? "Digital Presence" : "التواجد الرقمي"}</a></li>
                <li><a href="#">{language ? "Consulting" : "الاستشارات"}</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h3>{language ? "Contact Us" : "تواصل معنا"}</h3>
              <ul>
                <li>{language ? "Kuwait City, Kuwait" : "مدينة الكويت، الكويت"}</li>
                <li>+965 XXXX XXXX</li>
                <li>info@mubaader.com</li>
              </ul>
              <div className="social-links">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            {language ? 
              "© 2024 Mubaader Services. All rights reserved." : 
              "© 2024 مبادر للخدمات. جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer