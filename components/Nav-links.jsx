'use client'
import React, { useState } from 'react'
import { Navlink } from './Nav-link'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Navbar } from './Navbar'

export const Navlinks = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const NAV_LINKS = [
        { label: 'Hem', href: '/' },
        { label: 'Lektioner', href: '/lektioner' },
        { label: 'Om Mig', href: '/mig' },
        { label: 'Kontakt', href: '/kontakt' },
    ]

    return (
        <>
            <div className='sm:flex gap-4 hidden'>
                {NAV_LINKS.map((link, i) => (
                    <Navlink key={i} href={link.href} label={link.label} />
                ))}
            </div>
            <div className='max-sm:flex gap-4 hidden'>
                <div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Menu className='cursor-pointer' onClick={toggleMenu} />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className=''>
                                <SheetTitle></SheetTitle>
                                <SheetDescription className='flex flex-col gap-5 text-2xl justify-center items-center'>
                                    {NAV_LINKS.map((link, i) => (
                                        <Navlink key={i} href={link.href} label={link.label} onClick={closeMenu} />
                                    ))}
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    )
}
