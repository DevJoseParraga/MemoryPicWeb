import React from 'react'
import Header from '../components/header'
import ContactButton from '../components/contact-button'
import Footer from '../components/footer'
import SliderValojs from '../components/SliderValojs'
import Button from '../components/Button'
import "./cabina.css"
function Plataforma() {
  const data =  [
    {
        id: "1",
        title:"Sebastian",
        desc: "Excelente servicio los invitados quedaron muy conformes!",
        img:"./Perfil testimonio 1.png"
      },
      {
        id: "2",
        title:"Matias",
        desc: "Excelente predisposición de los chicos, su excelente servicio y la gran experiencia.",
        img:"./Perfil testimonio 2.png"
      },
      {
        id: "3",
        title:"micaela",
        desc: "Nos encantó todo el servicio en general. No podemos quejarnos.",
        img:"./Perfil testimonio 3.png"
      },   
    {
        id: "4",
        title:"carlos",
        desc: "La predisposición, buena onda , y que se quedaron más de lo acordado",
        img:"./Perfil testimonio 1.png"
      },
      {
        id: "5",
        title:"Ramiro",
        desc: "Me gusto la practicidad de la cabina, poder llevarnos el recuerdo.",
        img:"./Perfil testimonio 2.png"
      },
      {
        id: "6",
        title:"Carla",
        desc: "Nos encantó todo el servicio en general, una locura",
        img:"./Perfil testimonio 3.png"
      },
    ]
  return (
    <div>
      <span></span>
       <Header title={<span>Plata<span className='forma360'>forma</span> <br></br><span className='title360'>360°</span></span>} isHome={false} backgroundImage={'header-cabina-pic.jpg'} />
          <ContactButton/>
          <main id='MainPlataforma'>
          <section className='Cabina'>
            <div className='cabinaSubtitleContainer'>
              <h2 className='CabinaSubtitle'>¿Que te ofrecemos?</h2>
            </div>
            <div className='cabinaDescription'>
              <div className='cabinaDescriptionImgContainer'>
                <img className='cabinaDescriptionImg' src='./Galeria 4.jpg' alt='Foto Cabina inflable'></img>
              </div>
              <div className='cabinaDescriptionUlContainer'>
                <ul className='cabinaDescriptionUl'>
                  <li className='cabinaDescriptionLi'>
                    Todo lo que necesitas para lograr videos que hagan alucinar a todos:
                  </li>
                  <li className='cabinaDescriptionLi'>
                    <span className='lititle'>
                     Girar sin parar
                    </span>
                    <br></br>
                    Subite a nuestra plataforma y gira en todas direcciones. Es como tener un escenario que se adapta a vos y tus ideas. ¡Las posibilidades son infinitas!
                  </li>
                  <li className='cabinaDescriptionLi'>
                    <span className='lititle'>
                      Videos de alto impacto
                    </span>
                    <br></br>
                    Loa videos que logres con nuesyta Plataformma 360° van a ser como un golpe de efecto. Impactantes y sorprendentes, listos para conquistar TikTok.
                  </li>
               
                </ul>
              </div>
            </div>
            </section>
            <section className='CabinaValoraciones'>
              <div className='CabinaValoracionesSubTitleContainer'>
                <h3 className='CabinaValoracionesSubTitle'>
                  Lo que Dicen de nosotros
                </h3>
                <div className='CabinaValoracionesCarruselContainer'>
                  <SliderValojs cards={data}></SliderValojs>
                </div>
              </div>
            </section>
            <section className='reservaSection'>
              <div className='reservaContainer'>
                <h4 className='resevaTitle'>
                  RESERVA
                </h4>
                <p className='reservaDesc'>
                  Si estas buscando la forma mas cipada de darle un giro inesperado a tus  fotos, ¡llegaste al lugar indicado! Nuestra plataforma360° es como un torbellino de creatividad que vana hcaer que tus imagenes se destaquen del resto 
                </p>
                <Button label='Contactanos' to='/contacto' />
              </div>
            </section>
            <section className='fotosSection'>
            <div className='fotosContainer1'>
                <img className='fotosImg1 fotos' src='./DSC_0111.jpg'></img>
                <img className='fotosImg1 fotos' src='./DSC_0123.jpg'></img>
                <img className='fotosImg1 fotos' src='./_DSC3430.jpg'></img>
              </div>
              <div className='fotosContainer2'>
                <img className='fotosImg2 fotos' src='./IMG_0834.jpg'></img>
                <img className='fotosImg2 fotos' src='./IMG_3747.jpg'></img>
                <img className='fotosImg2 fotos' src='./IMG_7481.jpg'></img>
              </div>
              <div className='fotosContainer3'>
                <img className='fotosImg3 fotos' src='./DSC_0123.jpg'></img>
                <img className='fotosImg3 fotos' src='./DSC_0123.jpg'></img>
                <img className='fotosImg3 fotos' src='./IMG_0834.jpg'></img>
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