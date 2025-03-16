import React from 'react'
import './WhatWeDo.css'
import { FaBusinessTime, FaChartLine } from 'react-icons/fa'
import { MdOutlineComputer, MdBusiness } from 'react-icons/md'

const WhatWeDo = ({ language }) => {
  return (
    <div className='what-we-do' id='what-we-do'>
      <div className="container">
        <h2>{language ? "What We Do" : "ماذا نقدم"}</h2>
        <div className="what-we-do-content">
          <div className="text-section">
            <div className={`content ${!language ? 'rtl' : ''}`}>
              {language ? (
                // English Content
                <>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaBusinessTime />
                    </div>
                    <h3>Location Search</h3>
                    <p>Mubaader Services provides ministerial support and getting license for your small and medium business.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaChartLine />
                    </div>
                    <h3>Human Resources</h3>
                    <p>Mubaader Services provides Human Resources Services for your small and medium business. We hire your staff you need in order to establish your business local as well as international.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdOutlineComputer />
                    </div>
                    <h3>Interior Design 3D & Detailse</h3>
                    <p>Mubaader Services provides Interior Design 3D & Detailse for your small and medium business. We design your business interior and exterior in 3D and detailse it for you.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Consulting</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                </>
              ) : (
                // Arabic Content
                <>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaBusinessTime />
                    </div>
                    <h3>تأسيس الأعمال</h3>
                    <p>نساعد رواد الأعمال في تأسيس أعمالهم مع خدمات شاملة للإعداد.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaChartLine />
                    </div>
                    <h3>حلول التسويق</h3>
                    <p>خدمات تسويقية استراتيجية لمساعدة عملك على النمو والوصول إلى الجمهور المستهدف.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdOutlineComputer />
                    </div>
                    <h3>التواجد الرقمي</h3>
                    <p>تطوير الويب وإدارة وسائل التواصل الاجتماعي لتعزيز تواجدك عبر الإنترنت.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>استشارات الأعمال</h3>
                    <p>توجيه وحلول خبيرة لنمو وتطوير الأعمال.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo