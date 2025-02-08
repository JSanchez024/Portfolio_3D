import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import { HackerRoom } from '../components/HackerRoom';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';

const Hero = () => {
   

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className='min-h-screen w-full flex flex-col relative border-2 border-purple-500 '>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-white text-2xl font-medium text-center font-generalsans'>Hola, Soy Joaquin <span className='waving-hand'>✌️</span></p>
            <p className="hero_tag  text-gray-300 letter-spacing">Bienvenidos</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
                {/*<Leva />*/}
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera
                        makeDefault position={isSmall ? [0, 0, 22] : isMobile ? [0, 2, 18] : isTablet ? [0, 3, 18] : [0, 4, 15]}
                    />

                    <HackerRoom
                        position={sizes.deskPosition}
                        scale={sizes.deskScale}
                        rotation={[0, -Math.PI, 0]}
                    />


                    <ambientLight 
                        intensity={1} 
                    />

                    <directionalLight 
                        position={[10, 10, 10]} 
                        intensity={0.5} 
                    />

                </Suspense>

            </Canvas>

        </div>
    </section>
  )
}

export default Hero;



