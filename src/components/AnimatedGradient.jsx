import React from 'react';

const AnimatedGradient = () => {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Animated gradient background for integrated GPU */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 animate-gradient-shift" />

            {/* Floating orbs for visual interest */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slower" />
            <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-reverse" />
        </div>
    );
};

export default AnimatedGradient;
