'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [selectedService, setSelectedService] = useState('')
  const [messageText, setMessageText] = useState('')

  const handleServiceClick = (service: string) => {
    setSelectedService(service)
    // Set message text based on service
    if (service === 'Evenementen & Feesten') {
      setMessageText('Ik ben geïnteresseerd in jullie Evenementen & Feesten service. ')
    } else if (service === 'Private Dining') {
      setMessageText('Ik ben geïnteresseerd in jullie Private Dining service. ')
    } else if (service === 'Bedrijfscatering') {
      setMessageText('Ik ben geïnteresseerd in jullie Bedrijfscatering service. ')
    }
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main>
      <section 
        className="hero"
        style={{
          backgroundImage: 'url(/Heroachtergrond.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '90vh',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: '2rem 4rem',
          paddingBottom: '4rem',
          position: 'relative'
        }}
      >
        <button 
          className="cta-button"
          onClick={() => {
            const contactSection = document.getElementById('contact')
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          style={{
            backgroundColor: '#F1EFE7',
            color: '#17320B',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            fontWeight: 'normal',
            fontFamily: 'inherit',
            cursor: 'pointer',
            borderRadius: '0',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
        >
          Boeking aanvragen
        </button>
      </section>

      {/* Catering Sectie */}
      <section 
        id="catering"
        className="section-creme"
        style={{
          backgroundColor: '#F1EFE7',
          minHeight: '90vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6rem 4rem'
        }}
      >
        <div style={{ maxWidth: '1400px', width: '100%' }}>
          {/* Top Section */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '5rem',
            marginBottom: '6rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 
                className="title-animate"
                style={{ 
                  fontSize: '4rem', 
                  color: '#17320B', 
                  fontWeight: '300',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}
              >
                Onze Catering Services
              </h2>
            </div>
          </div>

          {/* Services Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '5rem',
            marginTop: '4rem'
          }}>
            {/* Service 01 */}
            <div>
              <div style={{
                marginBottom: '1rem'
              }}>
                <img 
                  src="/Party.png" 
                  alt="Evenementen" 
                  style={{ 
                    width: '130px', 
                    height: '130px',
                    marginBottom: '1rem',
                    objectFit: 'contain'
                  }} 
                />
                <div style={{
                  borderBottom: '1px solid rgba(23, 50, 11, 0.3)'
                }}></div>
              </div>
              <h4 style={{ 
                fontSize: '1.6rem', 
                color: '#17320B', 
                marginBottom: '1.5rem',
                fontWeight: 'normal'
              }}>
                Evenementen & Feesten
              </h4>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#17320B', 
                lineHeight: '1.8',
                opacity: 0.75,
                marginBottom: '2rem'
              }}>
                Van intieme verjaardagen tot grootse bruiloften. Wij zorgen voor een culinaire ervaring die uw gasten nooit zullen vergeten. Elk detail wordt zorgvuldig afgestemd op uw wensen en de sfeer van uw feest.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => handleServiceClick('Evenementen & Feesten')}
                  style={{
                    backgroundColor: '#17320B',
                    color: '#F1EFE7',
                    border: 'none',
                    padding: '0.875rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(23, 50, 11, 0.85)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#17320B'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Aanvragen
                </button>
                <a 
                  href="#contact"
                  onClick={() => handleServiceClick('Evenementen & Feesten')}
                  style={{
                    color: '#17320B',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  Meer informatie
                </a>
              </div>
            </div>

            {/* Service 02 */}
            <div>
              <div style={{
                marginBottom: '1rem'
              }}>
                <img 
                  src="/Private.png" 
                  alt="Private Dining" 
                  style={{ 
                    width: '130px', 
                    height: '130px',
                    marginBottom: '1rem',
                    objectFit: 'contain'
                  }} 
                />
                <div style={{
                  borderBottom: '1px solid rgba(23, 50, 11, 0.3)'
                }}></div>
              </div>
              <h4 style={{ 
                fontSize: '1.6rem', 
                color: '#17320B', 
                marginBottom: '1.5rem',
                fontWeight: 'normal'
              }}>
                Private Dining
              </h4>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#17320B', 
                lineHeight: '1.8',
                opacity: 0.75,
                marginBottom: '2rem'
              }}>
                Een exclusieve culinaire reis bij u thuis. Geniet van een persoonlijk samengesteld menu in de intimiteit van uw eigen omgeving. Onze chef komt naar u toe voor een onvergetelijke avond.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => handleServiceClick('Private Dining')}
                  style={{
                    backgroundColor: '#17320B',
                    color: '#F1EFE7',
                    border: 'none',
                    padding: '0.875rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(23, 50, 11, 0.85)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#17320B'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Aanvragen
                </button>
                <a 
                  href="#contact"
                  onClick={() => handleServiceClick('Private Dining')}
                  style={{
                    color: '#17320B',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  Meer informatie
                </a>
              </div>
            </div>

            {/* Service 03 */}
            <div>
              <div style={{
                marginBottom: '1rem'
              }}>
                <img 
                  src="/Business.png" 
                  alt="Bedrijfscatering" 
                  style={{ 
                    width: '130px', 
                    height: '130px',
                    marginBottom: '1rem',
                    objectFit: 'contain'
                  }} 
                />
                <div style={{
                  borderBottom: '1px solid rgba(23, 50, 11, 0.3)'
                }}></div>
              </div>
              <h4 style={{ 
                fontSize: '1.6rem', 
                color: '#17320B', 
                marginBottom: '1.5rem',
                fontWeight: 'normal'
              }}>
                Bedrijfscatering
              </h4>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#17320B', 
                lineHeight: '1.8',
                opacity: 0.75,
                marginBottom: '2rem'
              }}>
                Professionele catering voor zakelijke bijeenkomsten, conferenties en bedrijfsfeesten. Indruk maken begint bij de smaak. Van lunch tot walking dinner, wij verzorgen het tot in de puntjes.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => handleServiceClick('Bedrijfscatering')}
                  style={{
                    backgroundColor: '#17320B',
                    color: '#F1EFE7',
                    border: 'none',
                    padding: '0.875rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(23, 50, 11, 0.85)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#17320B'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Aanvragen
                </button>
                <a 
                  href="#contact"
                  onClick={() => handleServiceClick('Bedrijfscatering')}
                  style={{
                    color: '#17320B',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  Meer informatie
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerij Sectie */}
      <section 
        id="gallerij"
        className="section-green"
        style={{
          backgroundColor: '#17320B',
          minHeight: '90vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6rem 4rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decoratief Icoon element */}
        <img 
          src="/Icoon.png" 
          alt=""
          style={{
            position: 'absolute',
            top: '-30%',
            left: '-20%',
            width: '1200px',
            height: 'auto',
            opacity: 0.05,
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1400px', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Title - Left aligned */}
          <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
            <h2 
              className="title-animate"
              style={{ 
                fontSize: '4rem', 
                color: '#F1EFE7', 
                fontWeight: '300',
                letterSpacing: '0'
              }}
            >
              Gallerij
            </h2>
          </div>
          
          {/* Bento Box Style Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 200px)',
            gap: '1.5rem',
            width: '100%'
          }}>
            {/* Image 1 - Large horizontal */}
            <div style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
              border: '1px solid #F1EFE7',
              overflow: 'hidden'
            }}>
              <img 
                src="/Heroachtergrond.png" 
                alt="Gallery 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Image 2 - Tall right */}
            <div style={{
              gridColumn: 'span 2',
              gridRow: 'span 3',
              border: '1px solid #F1EFE7',
              overflow: 'hidden'
            }}>
              <img 
                src="/Heroachtergrond.png" 
                alt="Gallery 2"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Image 3 - Small square */}
            <div style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              border: '1px solid #F1EFE7',
              overflow: 'hidden'
            }}>
              <img 
                src="/Heroachtergrond.png" 
                alt="Gallery 3"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Image 4 - Small square */}
            <div style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              border: '1px solid #F1EFE7',
              overflow: 'hidden'
            }}>
              <img 
                src="/Heroachtergrond.png" 
                alt="Gallery 4"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          
          {/* Meer zien knop */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            marginTop: '3rem'
          }}>
            <button 
              style={{
                backgroundColor: 'transparent',
                color: '#F1EFE7',
                border: '1px solid #F1EFE7',
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                fontWeight: 'normal',
                fontFamily: 'inherit',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(241, 239, 231, 0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Meer zien
            </button>
          </div>
        </div>
      </section>

      {/* Over Ons Sectie */}
      <section 
        id="over-ons"
        className="section-creme"
        style={{
          backgroundColor: '#F1EFE7',
          minHeight: '90vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6rem 2rem'
        }}
      >
        <div style={{ 
          maxWidth: '1400px', 
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '5rem',
          alignItems: 'center'
        }}>
          <div style={{ 
            overflow: 'hidden',
            height: '600px',
            position: 'relative',
            border: '1px solid rgba(23, 50, 11, 0.2)'
          }}>
            <img 
              src="/Heroachtergrond.png" 
              alt="Mats en Thyon"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          
          <div style={{ padding: '2rem' }}>
            <h2 
              className="title-animate"
              style={{ 
                fontSize: '4rem', 
                color: '#17320B', 
                marginBottom: '2.5rem',
                fontWeight: '300',
                letterSpacing: '0'
              }}
            >
              Ontmoet Mats en Gag!
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#17320B', 
              lineHeight: '2',
              opacity: 0.75,
              marginBottom: '2rem'
            }}>
              Tafel van Twee is ontstaan uit de passie voor koken van twee jonge ondernemers: <strong style={{ fontWeight: '500' }}>Mats</strong> en <strong style={{ fontWeight: '500' }}>Thyon</strong>. 
              Wat begon als een gezamenlijke liefde voor culinaire creativiteit, is uitgegroeid tot een exclusieve 
              cateringservice die het verschil maakt.
            </p>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#17320B', 
              lineHeight: '2',
              opacity: 0.75,
              marginBottom: '2rem'
            }}>
              Wij geloven in puur vakmanschap, ambachtelijke bereiding en een persoonlijke benadering. 
              Elk gerecht wordt met zorg samengesteld, elk event met aandacht tot in de details verzorgd.
            </p>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#17320B', 
              lineHeight: '2',
              opacity: 0.75,
              marginBottom: '2rem'
            }}>
              Van intiem tot groots, van klassiek tot vernieuwend – wij maken van uw moment een onvergetelijke 
              culinaire ervaring. Onze filosofie is simpel: eerlijk eten, vers bereid, met respect voor het product 
              en de gelegenheid.
            </p>
            <div style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(23, 50, 11, 0.2)'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: '#17320B',
                opacity: 0.6,
                fontStyle: 'italic'
              }}>
                &quot;Goed eten hoeft niet ingewikkeld te zijn. Het draait om smaak, presentatie en de liefde waarmee het wordt bereid.&quot;
              </p>
              <p style={{
                fontSize: '1rem',
                color: '#17320B',
                opacity: 0.7,
                marginTop: '1rem'
              }}>
                – Mats & Thyon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sectie */}
      <section 
        id="contact"
        className="section-green"
        style={{
          backgroundColor: '#17320B',
          minHeight: '90vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decoratief Icoon element */}
        <img 
          src="/Icoon.png" 
          alt=""
          style={{
            position: 'absolute',
            bottom: '-30%',
            right: '-20%',
            width: '1200px',
            height: 'auto',
            opacity: 0.04,
            pointerEvents: 'none'
          }}
        />
        <div style={{ 
          maxWidth: '1400px', 
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 
              className="title-animate"
              style={{ 
                fontSize: '4rem', 
                color: '#F1EFE7', 
                marginBottom: '1rem',
                fontWeight: '300',
                letterSpacing: '0'
              }}
            >
              Laat ons je wensen weten!
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#F1EFE7',
              opacity: 0.7,
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Heeft u vragen of wilt u direct een vrijblijvende offerte aanvragen? Neem gerust contact met ons op.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2.5rem',
            marginTop: '2rem'
          }}>
            {/* Contactgegevens */}
            <div style={{ 
              padding: '2rem',
              border: '1px solid rgba(241, 239, 231, 0.2)',
              backgroundColor: 'rgba(241, 239, 231, 0.05)'
            }}>
              <h3 style={{ 
                fontSize: '1.75rem', 
                color: '#F1EFE7', 
                marginBottom: '2rem',
                fontWeight: 'normal'
              }}>
                Bereik ons gerust via direct contact
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(241, 239, 231, 0.2)' }}>
                <div>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#F1EFE7', 
                    opacity: 0.6,
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Email
                  </p>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#F1EFE7', 
                    opacity: 0.95
                  }}>
                    info@tafelvantwee.nl
                  </p>
                </div>

                <div>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#F1EFE7', 
                    opacity: 0.6,
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Telefoon
                  </p>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#F1EFE7', 
                    opacity: 0.95
                  }}>
                    +31 6 12 34 56 78
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(241, 239, 231, 0.2)' }}>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#F1EFE7', 
                  opacity: 0.6,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Adres
                </p>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#F1EFE7', 
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Voorbeeldstraat 123<br />
                  1234 AB Amsterdam<br />
                  Nederland
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(241, 239, 231, 0.2)' }}>
                <div>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#F1EFE7', 
                    opacity: 0.6,
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    KVK
                  </p>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#F1EFE7', 
                    opacity: 0.95
                  }}>
                    12345678
                  </p>
                </div>

                <div>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#F1EFE7', 
                    opacity: 0.6,
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    BTW
                  </p>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#F1EFE7', 
                    opacity: 0.95
                  }}>
                    NL123456789B01
                  </p>
                </div>
              </div>

              <div>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#F1EFE7', 
                  lineHeight: '1.8',
                  opacity: 0.75
                }}>
                  Wij streven ernaar om binnen 24 uur te reageren op uw aanvraag. Voor dringende zaken kunt u ons het beste telefonisch bereiken.
                </p>
              </div>
            </div>

            {/* Contactformulier */}
            <div style={{ 
              padding: '2rem',
              border: '1px solid rgba(241, 239, 231, 0.2)',
              backgroundColor: 'rgba(241, 239, 231, 0.05)'
            }}>
              <h3 style={{ 
                fontSize: '1.75rem', 
                color: '#F1EFE7', 
                marginBottom: '0.75rem',
                fontWeight: 'normal'
              }}>
                Boekingsaanvraag
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#F1EFE7',
                opacity: 0.7,
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Vul onderstaand formulier in en wij nemen zo spoedig mogelijk contact met u op voor een vrijblijvend gesprek.
              </p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="Volledige naam *"
                  required
                  style={{
                    padding: '1.2rem',
                    backgroundColor: 'rgba(241, 239, 231, 0.05)',
                    border: '1px solid rgba(241, 239, 231, 0.3)',
                    color: '#F1EFE7',
                    fontSize: '1.05rem',
                    fontFamily: 'inherit'
                  }}
                />
                
                <input
                  type="email"
                  placeholder="Email adres *"
                  required
                  style={{
                    padding: '1.2rem',
                    backgroundColor: 'rgba(241, 239, 231, 0.05)',
                    border: '1px solid rgba(241, 239, 231, 0.3)',
                    color: '#F1EFE7',
                    fontSize: '1.05rem',
                    fontFamily: 'inherit'
                  }}
                />
                
                <input
                  type="tel"
                  placeholder="Telefoonnummer *"
                  required
                  style={{
                    padding: '1.2rem',
                    backgroundColor: 'rgba(241, 239, 231, 0.05)',
                    border: '1px solid rgba(241, 239, 231, 0.3)',
                    color: '#F1EFE7',
                    fontSize: '1.05rem',
                    fontFamily: 'inherit'
                  }}
                />
                
                <div 
                  className="form-double-input"
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '1.75rem' 
                  }}
                >
                  <input
                    type="text"
                    placeholder="Datum evenement (dd-mm-jjjj)"
                    style={{
                      padding: '1.2rem',
                      backgroundColor: 'rgba(241, 239, 231, 0.05)',
                      border: '1px solid rgba(241, 239, 231, 0.3)',
                      color: '#F1EFE7',
                      fontSize: '1.05rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Aantal gasten (bijv. 50)"
                    style={{
                      padding: '1.2rem',
                      backgroundColor: 'rgba(241, 239, 231, 0.05)',
                      border: '1px solid rgba(241, 239, 231, 0.3)',
                      color: '#F1EFE7',
                      fontSize: '1.05rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Vertel ons meer over uw evenement..."
                  rows={6}
                  style={{
                    padding: '1.2rem',
                    backgroundColor: 'rgba(241, 239, 231, 0.05)',
                    border: '1px solid rgba(241, 239, 231, 0.3)',
                    color: '#F1EFE7',
                    fontSize: '1.05rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    lineHeight: '1.6'
                  }}
                />
                
                <button
                  type="submit"
                  style={{
                    padding: '1.25rem 2.5rem',
                    backgroundColor: '#F1EFE7',
                    color: '#17320B',
                    border: 'none',
                    fontSize: '1.15rem',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: '400',
                    letterSpacing: '0'
                  }}
                >
                  Verstuur aanvraag
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#F1EFE7',
        borderTop: '1px solid rgba(23, 50, 11, 0.2)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <img 
            src="/Icoon.png" 
            alt="Tafel van Twee"
            style={{
              width: '60px',
              height: 'auto',
              marginBottom: '1.5rem',
              opacity: 0.8
            }}
          />
          <p style={{
            color: '#17320B',
            opacity: 0.7,
            fontSize: '1rem',
            letterSpacing: '0.05em'
          }}>
            © 2025 Tafel van Twee. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </main>
  )
}
