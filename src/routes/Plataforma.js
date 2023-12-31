import React from 'react'
import Header from '../components/header'
import ContactButton from '../components/contact-button'
import Footer from '../components/footer'
import SliderValojs from '../components/SliderValojs'
import Button from '../components/Button'
import { encodedWppMessagePlataforma } from "../components/constants.js"
import "./cabina.css"
function Plataforma() {
  const data =  [
    {
        id: "1",
        title:"Ana",
        desc: "Excelente servicio los invitados y nosotros quedamos muy conformes!",
        fecha:"15/10/2023"
      },
      {
        id: "2",
        title:"Maricruz",
        desc: "Excelente predisposición de los chicos, su excelente servicio y la gran experiencia.",
        fecha:"15/10/2023"
      },
      {
        id: "3",
        title:"Nahuel Garcia",
        desc: "Nos encantó todo el servicio en general. No podemos quejarnos.",
        fecha:"20/10/2023"
      },   
    {
        id: "4",
        title:"Alejandra",
        desc: "La predisposición, buena onda, y que se quedaron más de lo acordado",
        fecha:"27/10/2023"
      },
      {
        id: "5",
        title:"valentina",
        desc: "Me gusto la practicidad de la cabina, poder llevarnos el recuerdo.",
        fecha:"30/10/2023"
      },
      {
        id: "6",
        title:"Maricruz",
        desc: "Excelente predisposición de los chicos, su excelente servicio y la gran experiencia.",
        fecha:"15/10/2023"
      },
    ]
  return (
    <div>
       <Header title={<span id='plataformaTitle' >Plata<span className='forma360'>forma</span> <br></br><span className='title360'>360°</span></span>} isHome={false} backgroundImage={'header-cabina-pic.jpg'} />
          <ContactButton wpp={encodedWppMessagePlataforma}/>
          <main id='MainPlataforma'>
          <section className='Cabina'>
            <div className='cabinaSubtitleContainer'>
              <h2 className='CabinaSubtitle'>¿Que te ofrecemos?</h2>
            </div>
            <div className='cabinaDescription'>
              <div className='cabinaDescriptionImgContainer'>
                <img className='cabinaDescriptionImg' src='./Galeria 4.jpg' alt='Foto plataforma360'></img>
              </div>
              <div className='cabinaDescriptionUlContainer'>
                <ul className='cabinaDescriptionUl'>
                  <li className='cabinaDescriptionLi'>
                    <h3>
                    Todo lo que necesitas para lograr videos que hagan alucinar a todos:
                    </h3>
                  </li>
                  <li className='cabinaDescriptionLi'>
                    <h3 className='lititle'>
                     Girar sin parar
                    </h3>
                    <br></br>
                    Subite a nuestra plataforma y gira en todas direcciones. Es como tener un escenario que se adapta a vos y tus ideas. ¡Las posibilidades son infinitas!
                  </li>
                  <li className='cabinaDescriptionLi'>
                    <h3 className='lititle'>
                      Videos de alto impacto
                    </h3>
                    <br></br>
                    Los videos que logres con nuestra Plataformma 360° van a ser como un golpe de efecto. Impactantes y sorprendentes, listos para conquistar TikTok.
                  </li>
               
                </ul>
              </div>
            </div>
            </section>
            <section className='CabinaValoraciones'>
              <div className='CabinaValoracionesSubTitleContainer'>
                <h2 className='CabinaValoracionesSubTitle'>
                  Lo que Dicen de nosotros
                </h2>
                <div className='CabinaValoracionesCarruselContainer'>
                  <SliderValojs cards={data}></SliderValojs>
                </div>
              </div>
            </section>
            <section className='reservaSection'>
              <div className='reservaContainer'>
                <h3 className='resevaTitle'>
                  Reserva
                </h3>
                <p className='reservaDesc'>
                ¿Estás organizando un evento y querés tener un detalle único? ¡Tenemos la solución para vos!
                </p>
                <Button label='Contactanos' to='/contacto' />
              </div>
            </section>
            <section className='fotosSection'>
                 <div className='fotosContainer1'>
                <img className='fotosImg1 fotos' src='./DSC_0111.jpg' alt='foto'></img>
                <img className='fotosImg1 fotos' src='./IMG_2821.jpg' alt='foto'></img>
                <img className='fotosImg1 fotos fotosNone' src='./_DSC3430.jpg' alt='foto'></img>
              </div>
              <div className='fotosContainer2'>
                <img className='fotosImg2 fotos' src='./IMG_2857.jpg' alt='foto'></img>
                <img className='fotosImg2 fotos' src='./IMG_2856.jpg' alt='foto'></img>
                <img className='fotosImg2 fotosNone fotos' src='./C20B419A-657B-4465-A321-391DCF0D9828.jpg' alt='foto'></img>
              </div>
              <div className='fotosContainer3'>
                <img className='fotosImg3 fotos' src='./IMG_2889.jpg' alt='foto'></img>
                <img className='fotosImg3 fotos' src='./DSC_0123.jpg'alt='foto'></img>
                <img className='fotosImg3 fotos fotosNone' src='./IMG_0834.jpg' alt='foto'></img>
              </div>
            </section>
        </main>

          <Footer
                photoCreator='lookstudio'
                photoLink='https://www.freepik.es/foto-gratis/chica-guapa-morena-copa-vino-bailando-sobre-fondo-negro-elegante-modelo-femenino-disfrutando-fiesta-cumpleanos_23590921.htm#page=3&query=fiesta&position=4&from_view=search&track=aitestb'
                creatorLink='https://mail.google.com/mail/?view=cm&fs=1&to=gonza.mauricioivan@gmail.com&su=Nueva%20Consulta&body=Hola,%20Queria%20hacer%20una%20consulta:'
                />  
    </div>
  )
}

export default Plataforma