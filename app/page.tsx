import CoverParticles from "./components/cover-particles"

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-bo-repeat bg-gradient-cover">
        <CoverParticles/>
        <p>introduccion</p>
      </div>
    </main>
  );
}
