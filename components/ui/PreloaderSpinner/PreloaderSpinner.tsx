import { FC } from 'react';

const PreloaderSpinner: FC = () => {
	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<div className="relative w-32 h-14 scale-130">
				<div className="absolute w-4 h-4 bg-[#8c6ff0] rounded-full animate-moveSvg shadow-lg" />
				<div className="absolute w-4 h-4 bg-[#8c6ff0] rounded-full animate-moveSvg shadow-lg delay-[2.3s]" />
				<div className="absolute w-4 h-4 bg-[#8c6ff0] rounded-full animate-moveSvg shadow-lg delay-[4.6s]" />
			</div>
		</div>
	);
};

export default PreloaderSpinner;

module.exports = {
  theme: {
    extend: {
      animation: {
        moveSvg: 'moveSvg 6.9s linear infinite',
        drop1: 'drop1 0.8s linear infinite',
        drop2: 'drop2 0.8s linear infinite 0.4s',
      },
      keyframes: {
        moveSvg: {
          '0%': { offsetDistance: '0%' },
          '25%': { background: '#5628ee' },
          '75%': { background: '#23c4f8' },
          '100%': { offsetDistance: '100%' },
        },
        drop1: {
          '100%': { transform: 'translate(32px, 8px) scale(0)' },
        },
        drop2: {
          '0%': { transform: 'translate(0, 0) scale(0.9)' },
          '100%': { transform: 'translate(32px, -8px) scale(0)' },
        },
      },
    },
  },
};
