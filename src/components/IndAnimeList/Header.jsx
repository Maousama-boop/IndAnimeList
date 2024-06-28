import Link from "next/link"

const Header = ({title, linkTitle, linkHref}) => {
    return (
        <div className="flex justify-between items-center p-3">
            <h1 className="text-xl capitalize cursor-default font-semibold text-color-primary">{title}</h1>
            { 
            linkHref && linkTitle 
            ?
                <Link href={linkHref} className="md:text-x text-sm underline hover:text-color-accent text-color-primary transition-all">{linkTitle}</Link>
            : 
            null
            }
        </div>
    )
} 

export default Header