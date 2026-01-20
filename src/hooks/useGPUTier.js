import { useState, useEffect } from 'react';

export const useGPUTier = () => {
    const [gpuTier, setGpuTier] = useState('low'); // 'high', 'medium', 'low'

    useEffect(() => {
        const detectGPU = () => {
            try {
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

                if (!gl) {
                    setGpuTier('low');
                    return;
                }

                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (!debugInfo) {
                    // Fallback: check maxTextureSize as proxy for GPU power
                    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
                    setGpuTier(maxTextureSize >= 16384 ? 'medium' : 'low');
                    return;
                }

                const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();

                // High-end: Dedicated GPU (NVIDIA, AMD, Apple M-series)
                if (
                    renderer.includes('nvidia') ||
                    renderer.includes('amd') ||
                    renderer.includes('radeon') ||
                    renderer.includes('geforce') ||
                    renderer.includes('apple m') ||
                    renderer.includes('apple gpu')
                ) {
                    setGpuTier('high');
                }
                // Low-end: Integrated graphics
                else if (
                    renderer.includes('intel') ||
                    renderer.includes('mesa') ||
                    renderer.includes('swiftshader')
                ) {
                    setGpuTier('low');
                }
                // Medium: Unknown but has decent WebGL support
                else {
                    setGpuTier('medium');
                }
            } catch (error) {
                console.warn('GPU detection failed:', error);
                setGpuTier('low'); // Safe fallback
            }
        };

        detectGPU();
    }, []);

    return gpuTier;
};
