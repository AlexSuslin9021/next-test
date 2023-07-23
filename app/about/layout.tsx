import List from "@/components/List";

export default function DashboardLayout({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode
}) {
    return (
        <section className={'section'}>

            <nav></nav>

            {children}
        </section>
    )
}
