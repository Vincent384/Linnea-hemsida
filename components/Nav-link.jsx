'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Navlink = ({ label, href, onClick }) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link href={href} className={cn('max-sm:text-black md:text-lg text-white hover:opacity-30 transition-opacity', isActive && 'underline')} onClick={onClick}>
            {label}
        </Link>
    )
}
