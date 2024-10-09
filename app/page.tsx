import CoverParticles from "./components/cover-particles"
import Introduction from "./components/introduction";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-bo-repeat bg-gradient-cover">
        <CoverParticles/>
        <Introduction/>
      </div>
    </main>
  );
}
