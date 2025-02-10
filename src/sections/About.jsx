import { useState } from 'react'
import Globe from 'react-globe.gl'
import { Button } from '../components/Button'

export const About = () => {
    
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('joaquin.sanchez.suazo@gmail.com')

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

  return (
    <section className='c-space my-20 '>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

            {/*Primer container*/}
            <div className='col-span-1 xl:row-span-3 hover:scale-102 transition duration-300'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>Hola, soy Joaquin</p>
                        <p className='grid-subtext'>Explora mi portafolio. Aquí encontrarás una muestra de mis proyectos, habilidades y conocimientos adquiridos.</p>
                        <span className='text-white'><br></br>" Si puedes imaginarlo puedes programarlo"</span>
                    </div>
                </div>
            </div>

            {/*Segundo container*/}
            <div className='col-span-1 xl:row-span-3 hover:scale-102 transition duration-300'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>Skills</p>
                        <p className='grid-subtext'>Experiencia Frontend y Backend en proyectos personales.</p>

                    </div>

                </div>

            </div>

            {/*Tercer container*/}
            <div className='col-span-1 xl:row-span-4 hover:scale-102 transition duration-300'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h[326] felx justify-center items-center'>
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor='rgba(0, 0, 0, 0)'
                            backgroundImageOpacity={0.5}
                            shadowAtmosphere
                            shadowGraticules
                            globeImageUrl={'//unpkg.com/three-globe/example/img/earth-day.jpg'}
                            bumpImageUrl={'//unpkg.com/three-globe/example/img/earth-topology.png'}
                           
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>Estoy disponible para trabajo remoto</p>
                        <p className='grid-subtext'>Vivo en Chile y tengo disponibilidad inmediata para nuevos desafios.</p>

                        <Button
                            name='Contactame'
                            isBeam
                            containerClass='w-full mt-10'
                        />
                    </div>
                </div>
            </div>

            {/*Cuarto container*/}
            <div className='xl:col-span-2 xl:row-span-3 hover:scale-102 transition duration-300'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Un poco sobre mi</p>
                        <p className='grid-subtext'>Soy Tecnico Avansado en Programacion, formado en la Universidad Diego Portales.
                        Actualmente estoy en constante aprendisaje sobre desarrollo web y busco mi primera oportunidad para aplicar mis habilidades y conocimientos en un entorno profesional y aprender de un equipo experimentado.</p>
                    </div>
                </div>
            </div>

            {/*Quinto container*/}
            <div className='xl:col-span-1 xl:row-span-2 hover:scale-102 transition duration-300'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contactame</p>
                        <p className='text-white text-center animate-bounce mt-6'>joaquin.sanchez.suazo@gmail.com</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? '/assets/tick.svg' :
                                        '/assets/copy.svg'} alt="copy" className='mt-4' />

                        </div>

                    </div>

                </div>
            </div>




        </div>
    </section>
  )
}

