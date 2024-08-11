import constructionWorker from '@/assets/constructionworker.svg'

export default function GrandFinal() {
    return (
        <div className="p-2 lg:container flex flex-col gap-0 h-[50vh]">
            <h1 className='text-3xl '>Grand Final</h1>
            <div className="flex flex-col border justify-center align-middle h-full bg-transparent object-contain"
                style={{
                    backgroundImage: `url(${constructionWorker})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >
                <div className="flex flex-col gap-4 justify-center align-center text-center">
                    <h2 className='text-3xl text-accent-foreground'>
                        Coming Soon ...
                    </h2>
                </div>
            </div>
        </div>
    );
}
