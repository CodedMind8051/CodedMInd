import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import Dragon from '../assets/Racehorse.gif'
// import {  FiDragon} from "react-icons/fi";

function Animal() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const smoothX = useSpring(x)
    const smoothY = useSpring(y)

    const rotate = useMotionValue(0)
    const smoothRotate = useSpring(rotate, { stiffness: 120, damping: 20 })

    useEffect(() => {
        const follow = (e: any) => {
            const point = e.touches ? e.touches[0] : e
            x.set(point.clientX - 200)
            y.set(point.clientY - 200)
            const dx = point.clientX - smoothX.get()
            const dy = point.clientY - smoothY.get()

            const angle = Math.atan2(dy, dx) * ( Math.PI/1800) + 90
            rotate.set(angle)
            console.log(point.clientX, point.clientY)
        }
        window.addEventListener("mousemove", follow)

        window.addEventListener("touchstart", follow)

        return () => {
            window.removeEventListener("mousemove", follow)
            window.removeEventListener("touchstart", follow)
        }
    }, [])



    return (
        <motion.img
            src={Dragon}  // replace with your GIF path
            alt="dragon"
            style={{
                position: "fixed",
                left: smoothX,
                top: smoothY,
                width: 150,
                height: 150,
                pointerEvents: "none",
                rotate: smoothRotate,
                zIndex: 9999, // optional, to stay on top
            }}
        />
    )
}

export default Animal