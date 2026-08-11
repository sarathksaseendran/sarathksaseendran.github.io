import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import Scene from './components/3d/Scene';
import { BreakTheStack } from './components/game/BreakTheStack';
import Layout from './components/ui/Layout';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  return (
    <>
      <Layout />
      
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <color attach="background" args={['#030712']} />
        
        <Suspense fallback={null}>
          {/* ScrollControls manages the scrolling of the canvas and HTML overlays within it */}
          <ScrollControls pages={8} damping={0.2} distance={1.2}>
            <Scene />
          </ScrollControls>
          
          <EffectComposer multisampling={4}>
            <Bloom 
              luminanceThreshold={0.2} 
              mipmapBlur 
              intensity={1.5} 
            />
            {/* Depth of field can be taxing, disable on mobile in a real app, but keep subtle here */}
            <DepthOfField target={[0, 0, 0]} focalLength={0.02} bokehScale={2} height={480} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      
      <BreakTheStack />
      <LoadingScreen />
    </>
  );
}

export default App;
