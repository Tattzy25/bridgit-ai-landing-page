import Image from "next/image"
import { Play } from "lucide-react"

export function WatchDemo() {
  return (
    <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">See it in action</h3>
          <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
            Watch how easy it is to add intelligent search to any website in under 2 minutes.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-300 group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
            Watch Demo Video
          </button>
        </div>
        <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl relative group cursor-pointer">
          <Image
            src="/modern-saas-dashboard-preview-with-search-bar-purp.jpg"
            alt="Demo video thumbnail"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
