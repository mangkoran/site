import clsx from 'clsx'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LocaleSwitcher = () => {
    const router = useRouter()
    const { t } = useTranslation('common')

    return (
        <Link
            href='/'
            locale={router.locale === 'en' ? 'id' : 'en'}
            passHref
        >
            <motion.a
                className={clsx("text-2xl", "opacity-10", "absolute", "top-10")}
                whileHover={{
                    opacity: 1,
                    transition: {
                        duration: 0.5
                    },
                }}
            >
                {t('change-locale')}
            </motion.a>
        </Link>
    )
}

export default LocaleSwitcher
