import Image from "next/image";

export default function BlockImages() {
    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                    <Image alt="" sizes="(min-width: 640px) 18rem, 11rem"
                         src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" 
                         width={3744} height={5616} decoding="async" data-nimg={1} 
                         className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy" style={{ color: 'transparent' }} />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                    <Image alt="" sizes="(min-width: 640px) 18rem, 11rem"
                         src="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" 
                         width={3744} height={5616} decoding="async" data-nimg={1} 
                         className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy" style={{ color: 'transparent' }} />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                    <Image alt="" sizes="(min-width: 640px) 18rem, 11rem"
                         src="https://images.unsplash.com/photo-1616418625298-baef98bc34f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" 
                         width={3744} height={5616} decoding="async" data-nimg={1} 
                         className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy" style={{ color: 'transparent' }} />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                    <Image alt="" sizes="(min-width: 640px) 18rem, 11rem"
                         src="https://images.unsplash.com/photo-1589225636445-9d27dde936d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                         width={3744} height={5616} decoding="async" data-nimg={1} 
                         className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy" style={{ color: 'transparent' }} />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                    <Image alt="" sizes="(min-width: 640px) 18rem, 11rem"
                         src="https://images.unsplash.com/photo-1639054515827-41fb52f3058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80" 
                         width={3744} height={5616} decoding="async" data-nimg={1} 
                         className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy" style={{ color: 'transparent' }} />
                </div>
                
                
            </div>
        </div>
    );
}