import React from 'react';
import ss from "./SecSeven.module.css";
function SecSeven() {
  return (
    <div className={ss.container}>
     <h1 className={ss.hh}>У вас есть вопросы?</h1>
     <p className={ss.po}>Заполните эту форму и мы свяжемся с вами</p>
      <div className={ss.man}>
          <div className={ss.div}>
               <div className={ss.p}>
                    <p className={ss.pone}>*</p>
                    <p>Имя:</p>
               </div>
               <input type="text" className={ss.mjk} />
          </div>
          <div className={ss.div}>
               <div className={ss.p}>
                    <p className={ss.pone}>*</p>
                    <p>Телефон номер:</p>
               </div>
               <input type="text" className={ss.mjk} />
          </div>
      </div>
      <div className={ss.man}>
          <div className={ss.div}>
               <div className={ss.p}>
                    <p>Текст вопроса или запроса:</p>
               </div>
               <input type="text" className={ss.mk} />
          </div>
      </div>
      <div className={ss.mn}>
         <div className={ss.div}>
               <button type="button" className={ss.btn}>Отправить</button>
         </div>
      </div>
    </div>
  )
}

export default SecSeven