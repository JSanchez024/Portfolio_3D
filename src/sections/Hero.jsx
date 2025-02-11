import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import { HackerRoom } from '../components/HackerRoom';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import { Target } from '../components/Target';
import { ReactLogo } from '../components/ReactLogo';
import Cube from '../components/Cube';
import { Rings } from '../components/Rings';
import { HeroCamera } from '../components/HeroCamera';
import { Button } from '../components/Button';
const Hero = () => {
   

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className='min-h-screen w-full flex flex-col relative '>
        <div className=' flex flex-col sm:mt-25 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-white text-2xl font-medium text-center font-generalsans'>Hola, Soy Joaquin <span className='waving-hand'>✌️</span></p>
            <p className="hero_tag  text-gray-300 letter-spacing ">Bienvenidos</p>
        </div>

        <div className='w-full h-full absolute inset-0 '>
                {/*<Leva />*/}
            <Canvas className='w-full h-full pt-20'>
                <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera
                        
                        makeDefault position={isSmall ? [0, 0, 25] : isMobile ? [0, 2, 20] : isTablet ? [0, 3, 20] : [6, 0, 20]}
                        //makeDefault position={[0, 0, 23] }
                    />

                    <HeroCamera isMobile={isMobile}>

                        <HackerRoom
                            position={sizes.deskPosition}
                            scale={sizes.deskScale}
                            rotation={[0.2, -Math.PI, 0]}
                        />
                    
                    </HeroCamera>

                    <group>
                        <Target 
                            position={sizes.targetPosition}
                        />

                        <ReactLogo 
                            position={sizes.reactLogoPosition}
                        />

                        <Cube
                            position={sizes.cubePosition}
                        />

                        <Rings 
                            position={sizes.ringPosition}
                        />

                    </group>


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

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href="#about" className='w-fit'>
                <Button name='Comencemos' isBeam containetClass="sm:w-fit w-full sm:min-w-96" />
            </a>
        </div>
    </section>
  )
}

export default Hero;



