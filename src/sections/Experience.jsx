import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import { Developer } from '../components/Developer'


export const Experience = () => {
    const [animationName, setAnimationName] = useState('idle')


  return (
    <section className='c-space my-20'>
        <div className='w-full text-white'>
            <h3 className='head-text'>
                Mi Experiencia
            </h3>
            <div className='work-container'>
                <div className='work-canvas'>
                    <Canvas>
                        <ambientLight 
                            intensity={7} 
                        />
                        <spotLight 
                            position={[10, 10, 10]}
                            angle={0.15} 
                            penumbra={1} 
                        />
                        <directionalLight 
                            position={[10, 10, 10]}
                            angle={0.15}  
                            intensity={1}
                        />
                        <OrbitControls 
                            enableZoom={false}
                            maxPolarAngle={1.5}
                        />
                        <Suspense 
                            fallback={<CanvasLoader />}
                        >
                            <Developer 
                                position-y={-3}                                                              
                                scale={2.7}
                                animationName={animationName}
                            />
                        </Suspense>
                    </Canvas>
                </div>

                <div className='work-content text-white'>
                    <div  className='sm:py-10 py-5 sm:px-5 px-2.5 text-white'>
                        {workExperiences.map(({id, name, pos, icon, duration, title, animation}) => (
                            <div key={id} className='work-content_container group' onClick={() => setAnimationName(animation.toLocaleLowerCase())}
                             onPointerOver={() => setAnimationName(animation.toLowerCase())} onPointerOut={() => setAnimationName('idle')}>

                                <div className='flex flex-col h-full justify-start items-center py-2'>
                                    <div className='work-content_logo'>
                                        <img src={icon} alt="logo" className='w-full h-full' />
                                    </div>
                                    <div className='work-content_bar' />
                                </div>
                                <div className='sm:p-5 px-2.5 py-5'>
                                    <p className='font-bold text-white'>{name}</p>
                                    <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                    <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                                </div>

                            </div>
 
                        ))}

                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
