const Welcome = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-r from-zinc-800  via-zinc-850 to-zinc-900">
    <div className="mb-8">
        <img src="https://gimlet.io/logo-dark.svg" alt="Logo" className="w-44 h-24 mx-auto" />
    </div>
    <h1 className="text-4xl font-bold  bg-gradient-to-r from-rose-600  via-red-500 to-rose-600 bg-clip-text leading-tight  text-transparent">Thank You For Deploying With Gimlet  🪛 </h1>
    <p className="text-lg leading-8 text-center mt-8 text-zinc-300"> Gimlet is a Gitops-based deployment tooling, service catalog and a curated stack of open-source components. Turnkey solution for startups and medium-sized businesses to run applications on Kubernetes, easing the load on platform builders and developers alike. And your wallet.</p>

    
</div>

);
}

export default Welcome ;
