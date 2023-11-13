import React from 'react'
import Header from '../components/header'
import ContactButton from '../components/contact-button'
import Footer from '../components/footer'
import SliderValojs from '../components/SliderValojs'
import Button from '../components/Button'
import "./cabina.css"
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

function Cabina() {
  return (
    <div>
      
        <Header title={<span id='cabinaTitle1'> CABINA <br></br> INFLABLE <br></br> DE <span id='cabinaFoto'> FOTOS  </span></span>} isHome={false} backgroundImage={'header-cabina-pic.jpg'} />
          <ContactButton/>
        <main id='MainCabina'>
          <section className='Cabina'>
            <div className='cabinaSubtitleContainer'>
              <h2 className='CabinaSubtitle'>¿Que te ofrecemos?</h2>
            </div>
            <div className='cabinaDescription'>
              <div className='cabinaDescriptionImgContainer'>
                <img className='cabinaDescriptionImg' src='./Cabina-pic.jpg' alt='Foto Cabina inflable'></img>
              </div>
              <div className='cabinaDescriptionUlContainer'>
                <ul className='cabinaDescriptionUl'>
                  <li className='cabinaDescriptionLi'>
                    Todo lo que necesitas para sacar fotos que se conviertan en recuerdos imborrables:
                  </li>
                  <li className='cabinaDescriptionLi'>
                    <span className='lititle'>
                      Cabina espaciosa
                    </span>
                    <br></br>
                    nuestar cabina es amplia, comoda y tiene espacio hasta para 6 personas. invita a tus amigos, familiares y entra para divertirte como nunca
                  </li>
                  <li className='cabinaDescriptionLi'>
                    <span className='lititle'>
                      Impreciones al toque
                    </span>
                    <br></br>
                    En cuestion de segundos, tendras tus fotos en las manos, y si, las impresiones son de alta calidad, ¡vas a querer enmarcarlas!
                  </li>
                  <li className='cabinaDescriptionLi'>
                    <span className='lititle'>
                      Operacion facil
                    </span>
                    <br></br>
                    Nuestra cabina es tan facil de usar que hasta la nonna se va animar. Solo entra, posa y listo,¡tus fotos se imprimen como por arte de amgia!
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
                  ¿estas organizando un evento que necesita un toque de diversion,¡Tenemos la soluion para vos!
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

export default Cabina