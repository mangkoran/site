import clsx from 'clsx';
import { motion, MotionValue, useSpring, useTransform, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const ProgressBar = () => {

    const [_isComplete, setIsComplete] = useState(false);
    const { scrollY, scrollYProgress }: { scrollY: MotionValue; scrollYProgress: MotionValue } = useViewportScroll();
    const yRange: MotionValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scrollYInverted: MotionValue = useTransform(scrollY, [0, 40], [0, -40]);
    const pathLength: MotionValue = useSpring(yRange, { stiffness: 200, damping: 100 });
    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

    return (
        <motion.div
            className={clsx(styles.progressIcon)}
            style={{
                translateY: scrollYInverted,
            }}
        >
            <svg viewBox="0 0 20 20">
                <motion.path
                    fill="none"
                    strokeWidth="2"
                    stroke="#f3f4f6"
                    strokeDasharray="O 1"
                    strokeLinecap="round"
                    d="M 10 0
                    a 10 10 0 0 1 0 20
                    a 10 10 0 0 1 0 -20"
                    style={{
                        pathLength,
                        scale: 0.9,
                        }}
                    />
            </svg>
        </motion.div>
    )
}

export default ProgressBar
