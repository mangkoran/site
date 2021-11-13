import clsx from 'clsx'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LocaleSwitcher = () => {
    const router = useRouter()
    const { t } = useTranslation('common')

    const localeSwitcherVars: Variants = {
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

    return (
        <Link
            href='/'
            locale={router.locale === 'en' ? 'id' : 'en'}
            passHref
        >
            <motion.a
                className={clsx("text-xl", "absolute", "top-10")}
                variants={localeSwitcherVars}
                initial="visible"
                animate="hidden"
                whileHover="visible"
            >
                {t('change-locale')}
            </motion.a>
        </Link>
    )
}

export default LocaleSwitcher
