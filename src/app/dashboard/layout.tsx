import Container from "@/components/container";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FC } from "react";

interface Props {
    children: React.ReactNode
}

const DashboardLayout: FC<Props> = async ({ children }) => {
     const { userId } = await auth()
    
      if (!userId) {
        return redirect("/")
      }
    return (
        <section className='flex flex-col min-h-screen'>
            <Header />
            <Container className='flex flex-1 h-full py-8 lg:py-16 gap-8'>
                <div className='hidden lg:flex w-full max-w-60'>
                    <Sidebar />
                </div>
                <div className='flex justify-center flex-1 max-h-full'>
                    {children}
                </div>
            </Container>
            <Toaster />
        </section>
    );
}

export default DashboardLayout;