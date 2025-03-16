import React from 'react'
import './WhoWeAre.css'
import MrAhmedImg from '../../../images/Mr-Ahmed.png'

const WhoWeAre = ({ language }) => {
  return (
    <div className='who-we-are' id='who-we-are'>
      <div className="container">
        <h2>{language ? "Who We Are" : "من نحن"}</h2>
        <div className="who-we-are-content">
          <div className="image-section">
            <img src={MrAhmedImg} alt="Mubaader Services" />
          </div>
          <div className={`text-section ${!language ? 'rtl' : ''}`}>
            <div className="content">
              {language ? (
                // English Content
                <>
                  <p>
                    Established in 2009 MUBAADER SERVICES is a one-stop-shop clinic for Small & Medium Businesses. 
                    We offer a range of solutions to support, enhance, and grow your business on it's stages of:
                  </p>
                  <ul>
                    <li>Conceptual</li>
                    <li>Ideas generation</li>
                    <li>Launching your product or services</li>
                    <li>Grow your home business model to an official business store</li>
                  </ul>
                  <p>
                    We offer innovative solutions to launch your business in Kuwait market. We also recover from distress, 
                    leverage technology, stimulate growth, adapt to ministry procedures, tap into market through:
                  </p>
                  <ul>
                    <li>Marketing packages</li>
                    <li>Content establishment (Web)</li>
                    <li>Social media support</li>
                    <li>Integrate our trainings and workshops to compliment the entrepreneurs, SMEs, and Startups</li>
                  </ul>
                </>
              ) : (
                // Arabic Content
                <>
                  <p>
                    تأسست مبادر للخدمات في عام 2009 كعيادة متكاملة للشركات الصغيرة والمتوسطة.
                    نقدم مجموعة من الحلول لدعم وتعزيز وتنمية أعمالك في مراحلها المختلفة:
                  </p>
                  <ul>
                    <li>المفاهيم الأساسية</li>
                    <li>توليد الأفكار</li>
                    <li>إطلاق منتجك أو خدماتك</li>
                    <li>تطوير نموذج عملك المنزلي إلى متجر تجاري رسمي</li>
                  </ul>
                  <p>
                    نقدم حلولاً مبتكرة لإطلاق عملك في السوق الكويتي. كما نساعد في التعافي من التعثر،
                    والاستفادة من التكنولوجيا، وتحفيز النمو، والتكيف مع إجراءات الوزارة، والدخول إلى السوق من خلال:
                  </p>
                  <ul>
                    <li>باقات التسويق</li>
                    <li>إنشاء المحتوى (الويب)</li>
                    <li>دعم وسائل التواصل الاجتماعي</li>
                    <li>دمج التدريبات وورش العمل لدعم رواد الأعمال والشركات الصغيرة والمتوسطة والشركات الناشئة</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre