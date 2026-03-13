import React, { useState, useEffect, useRef } from 'react'

function About() {
    const textContent = "Strong brands are shaped from the top down. Most agencies focus on visibility. We align company positioning with executive presence - as one system."
    const words = textContent.split(' ')
    
    const [wordOpacities, setWordOpacities] = useState(Array(words.length).fill(0.3))
    const sectionRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const sectionRect = sectionRef.current.getBoundingClientRect()
            const sectionHeight = sectionRect.height
            const windowHeight = window.innerHeight
            
            // Calculate scroll progress: 0 when section enters viewport, 1 when completely scrolled
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionRect.top) / (windowHeight + sectionHeight)))
            
            // Calculate which words should be visible
            const opacities = words.map((_, index) => {
                // Each word gets its individual slot in the scroll progress
                const wordSlotSize = 0.75 / words.length // Distribute across 85% of scroll to finish before section scrolls completely
                const wordStartProgress = index * wordSlotSize
                const wordEndProgress = wordStartProgress + wordSlotSize
                
                // Fade from 0.3 to 1.0 as we pass the word's progress range
                if (scrollProgress < wordStartProgress) {
                    return 0.3 // Before this word's turn, opacity is 70%
                } else if (scrollProgress >= wordEndProgress) {
                    return 1.0 // Word has finished fading, 100% opacity
                } else {
                    // Smoothly transition from 0.3 to 1.0 during this word's turn
                    const wordProgress = (scrollProgress - wordStartProgress) / wordSlotSize
                    return 0.3 + (wordProgress * 0.3)
                }
            })

            setWordOpacities(opacities)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [words.length])

    return (
        <div ref={sectionRef} id='about' className='h-[100vh] px-4 sm:px-6 flex flex-col items-center justify-center md:items-center gap-3 text-center font-bricolage'>
            <h1 className='text-h2 w-[70%] tracking-tight font-medium'>
                {words.map((word, index) => (
                    <span 
                        key={index} 
                        style={{ opacity: wordOpacities[index], transition: 'opacity 0.3s ease-out' }}
                    >
                        {word}{' '}
                    </span>
                ))}
            </h1>
        </div>
    )
}

export default About
