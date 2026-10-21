import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
    images: string[], 
    title: string
}

export const ProjectCarousel = ({ images, title }: Props ) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    const hasMultipleImages = images.length > 1;

    useEffect(() => {
        if (!hasMultipleImages || isHovered) return;

        const timer = setInterval( () => {
            setActiveIndex((current) => (current + 1) % images.length)
        }, 5000);

        return () => clearInterval(timer)
    }, [hasMultipleImages, images.length, isHovered]);

    if (!hasMultipleImages) {
        return (
            <img
                src={images[0]}
                alt={`Captura del proyecto ${title}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
        )
    }

    const showPrevious = () => {
        setActiveIndex( current => (current - 1 + images.length) % images.length );
    }

    const showNext = () => {
        setActiveIndex( current => (current + 1) % images.length );
    }

    return (
        <div className="absolute inset-0">
            {
                images.map( (image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`Captura ${index + 1} del proyecto ${title}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        loading={index === 0 ? 'lazy' : 'eager'}
                        decoding="async"
                        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 motion-reduce:transition-none 
                            ${ index === activeIndex ? 'opacity-100' : 'opacity-0' }`
                        }
                        aria-hidden={index !== activeIndex}
                    />
                ))
            }

            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                <button
                    type="button"
                    onClick={showPrevious}
                    onMouseEnter={() => setIsHovered(true)}
                    aria-label={`Imagen anterior de ${title}`}
                    className="hover:cursor-pointer inline-flex size-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-white"
                >
                    <ChevronLeft className="size-4" aria-hidden="true" />
                </button>
                <div className="flex gap-1.5" aria-label={`${activeIndex + 1} de ${images.length}`}>
                {
                    images.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            onMouseEnter={() => setIsHovered(true)}
                            aria-label={`Ver imagen ${index + 1}`}
                            aria-current={index === activeIndex ? 'true' : undefined}
                            className={`hover:cursor-pointer size-1.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-white 
                                ${index === activeIndex ? 'bg-white' : 'bg-white/45'}`
                            }
                        />
                    ))
                }
                </div>
                <button
                    type="button"
                    onClick={showNext}
                    onMouseEnter={() => setIsHovered(true)}
                    aria-label={`Imagen siguiente de ${title}`}
                    className="hover:cursor-pointer inline-flex size-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-white"
                >
                    <ChevronRight className="size-4" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}