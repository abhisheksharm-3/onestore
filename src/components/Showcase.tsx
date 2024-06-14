import { Separator } from "./ui/separator"

const Showcase = () => {
  return (
    <div className="container flex flex-col items-center py-10">
      <div className="py-12 flex flex-col items-center gap-2">
      <p>Share your setup with</p>
        <h2 className="font-bold text-4xl">#OneStoreFurniture</h2>{" "}
      </div>
      <div className="bg-[url('/images/setup.png')] h-screen w-screen bg-cover bg-no-repeat" />
      <Separator className="w-screen my-10"/>
    </div>
  )
}

export default Showcase