import React from 'react'
import './ContactUs.css'
import { assets } from '../../../assets/assets'

const ContactUs = () => {
  return (
    <>
      <div className='title'>
        <p>Contact Us</p>
        <h1>Get In Touch</h1>
      </div>
      <div className='contact'>
        <div className="cont-right">
          <h1>Send Us a Message
            <img src={assets.msgIcon} className='w-8 ml-2.5' alt="" />
          </h1>
          <p className='max-w-112.5'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>
          <ul>
            <li> <img src={assets.mailIcon} alt="" />contact@eduSphere.com</li>
            <li> <img src={assets.phoneIcon} alt="" />+1 123-456-7890</li>
            <li> <img src={assets.locationIcon} alt="" />77 Manchester Ave,<br /> Cambridg MA 02139, San tiago</li>
          </ul>
        </div>
        <div className='cont-left'>
          <form>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required=""></input>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required=""></input>
            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your email id" required=""></input>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required=""></textarea>
            <div className="h-captcha" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"><iframe src="https://newassets.hcaptcha.com/captcha/v1/1dab630d2576352c6ab33820f3c19d7400cd0955/static/hcaptcha.html#frame=checkbox&amp;id=0bqt521483d7&amp;host=greatstack.in&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;andint=off&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&amp;theme=light&amp;origin=https%3A%2F%2Fgreatstack.in&amp;clientOptions=%7B%22sentry%22%3Atrue%2C%22reportapi%22%3A%22https%3A%2F%2Faccounts.hcaptcha.com%22%2C%22recaptchacompat%22%3A%22off%22%2C%22custom%22%3Afalse%2C%22hl%22%3A%22en-US%22%2C%22tplinks%22%3A%22on%22%2C%22andint%22%3A%22off%22%2C%22pat%22%3A%22on%22%2C%22pstissuer%22%3A%22https%3A%2F%2Fpst-issuer.hcaptcha.com%22%2C%22endpoint%22%3A%22https%3A%2F%2Fapi.hcaptcha.com%22%2C%22theme%22%3A%22light%22%2C%22size%22%3A%22normal%22%2C%22confirm-nav%22%3Afalse%7D" tabIndex="0" frameBorder="0" scrolling="no" allow="private-state-token-redemption" title="Widget containing checkbox for hCaptcha security challenge" data-hcaptcha-widget-id="0bqt521483d7" data-hcaptcha-response="" style={{pointerEvents: 'auto', backgroundColor: 'rgba(255, 255, 255, 0)', borderRadius: '4px', width: '302px', height: '76px', overflow: 'hidden'}}></iframe><textarea id="h-captcha-response-0bqt521483d7" name="h-captcha-response" style={{display: 'none'}}></textarea></div>
            <button type="submit" className="btn dark-btn submit-btn">
              Submit now
              <img src={assets.whiteArrow} alt="" />
            </button>
          </form>
        </div>





      </div>
    </>
  )
}

export default ContactUs
