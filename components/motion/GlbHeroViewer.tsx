"use client";

import * as React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface GlbHeroViewerProps {
  src: string;
  onLoaded?: () => void;
  onError?: () => void;
}

export default function GlbHeroViewer({
  src,
  onLoaded,
  onError,
}: GlbHeroViewerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frameId = 0;
    let disposed = false;

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 4.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    // Studio + Cyan/Teal rim lighting
    const ambientLight = new THREE.AmbientLight(0xe2e8f0, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const cyanRimLight = new THREE.PointLight(0x06b6d4, 5.5, 14);
    cyanRimLight.position.set(-3, 1.5, 2.5);
    scene.add(cyanRimLight);

    const tealFillLight = new THREE.PointLight(0x14b8a6, 4.0, 14);
    tealFillLight.position.set(3, -1.5, -2.5);
    scene.add(tealFillLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.3;

    const loader = new GLTFLoader();
    loader.load(
      src,
      (gltf) => {
        if (disposed) return;

        const model = gltf.scene;

        // Center and normalize scale to fit viewport
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const scale = 2.35 / maxDim;

        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        scene.add(model);
        onLoaded?.();
      },
      undefined,
      () => {
        if (!disposed) {
          onError?.();
        }
      }
    );

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const animate = () => {
      if (disposed) return;
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [src, onLoaded, onError]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Tech Node Model"
    />
  );
}

