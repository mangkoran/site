import clsx from 'clsx'
import Link from 'next/link'
import { useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { motion, Variants, useAnimation, AnimationControls } from 'framer-motion'

const LocaleSwitcher = () => {
    const router: NextRouter = useRouter()
    const { t } = useTranslation('common')

    const animation: AnimationControls  = useAnimation();

    const localeSwitcherVars: Variants = {
        start: {
            opacity: 0.1,
            transition: {
                duration: 2
            }
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        hidden: {
            opacity: 0.1,
            transition: {
                duration: 1
            }
        }
    }
    /*
       initial ----------> idle <==========> hovered
                delay: 1          no delay
     */
    useEffect(() => {
        animation.start("start")
    })
    const handleHoverStart = () => {
        animation.start("visible")
    }
    const handleHoverEnd = () => {
        animation.start("hidden")
    }

    return (
        <Link
            href='/'
            locale={router.locale === 'en' ? 'id' : 'en'}
            passHref
        >
            <motion.a
                className={clsx("absolute", "top-8")}
                variants={localeSwitcherVars}
                initial="visible"
                animate={animation}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
            >
                {t('change-locale')}
            </motion.a>
        </Link>
    )
}

export default LocaleSwitcher
