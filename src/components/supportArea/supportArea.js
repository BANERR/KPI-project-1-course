//react
import { useState } from 'react'

//Style
import './supportArea.css'

//images
import suportAreaBackgound from '../../images/suportAreaBackgound.png'

const SupportArea = () => {
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputTel, setInputTel] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  const submitSupportArea = async () => {
    if(inputName.length > 0 && inputEmail.length > 0 && inputTel.length > 0 && inputMessage.length > 0){
      document.getElementById("name").classList.add('support-area-input-success')
      document.getElementById("email").classList.add('support-area-input-success')
      document.getElementById("tel").classList.add('support-area-input-success')
      document.getElementById("message").classList.add('support-area-input-success')

      const data = {
        name: inputName,
        email: inputEmail,
        tel: inputTel,
        message: inputMessage
      }

      try {
        const response = await fetch('http://127.0.0.1:5000/submit_support_area', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error:', error);
      }

    }
    if(inputName.length === 0){
      document.getElementById("name").classList.add('support-area-input-warn')
    }
    if(inputEmail.length === 0){
      document.getElementById("email").classList.add('support-area-input-warn')
    }
    if(inputTel.length === 0){
      document.getElementById("tel").classList.add('support-area-input-warn')
    }
    if(inputMessage.length === 0){
      document.getElementById("message").classList.add('support-area-input-warn')
    }
  }
      


    return(
        <div className="support-area-wrapper">
            <img src={suportAreaBackgound} className="support-area-backgound" alt=""/>
            <div className="support-area-container">
                <div className="support-area-text-container">
                    <div className="support-area-subtitle">Форма зворотного зв’язку</div>
                    <div className="support-area-title subtitle-text">Залишились питання?</div>
                    <div className="support-area-text small-text">Для зв’язку з керівництвом компанії, скористайтеся спеціальною формою:</div>
                </div>
                <div className="support-area-inputs-container">
                    <input id="name" 
                      type="text" 
                      placeholder="Ім'я" 
                      className="support-area-input"
                      value={inputName}
                      onChange={(event)=>setInputName(event.target.value)}
                    />

                    <input 
                      id="email" 
                      type="email" 
                      placeholder="E-mail" 
                      className="support-area-input"
                      value={inputEmail}
                      onChange={(event)=>setInputEmail(event.target.value)}
                    />
                    <input 
                      id="tel" 
                      type="tel" 
                      placeholder="Контактний телефон" 
                      className="support-area-input"
                      value={inputTel}
                      onChange={(event)=>setInputTel(event.target.value)}
                    />
                    <input 
                      id="message" 
                      type="text" 
                      placeholder="Повідомлення" 
                      className="support-area-input"
                      value={inputMessage}
                      onChange={(event)=>setInputMessage(event.target.value)}
                    />

                    <button className="boxes-information-button gradient-button small-text" onClick={() => submitSupportArea()}>НАДІСЛАТИ</button>
                </div>
            </div>
        </div>
    )
}

export default SupportArea;