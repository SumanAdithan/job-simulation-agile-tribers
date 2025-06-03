import { apple } from '@assets';

export const Loader = () => {
    return (
        <div className='flex h-full w-full items-center justify-center'>
            <div className='relative w-24 h-24'>
                <div className='absolute inset-0 border-t-4 border-white rounded-full animate-spin'></div>

                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-12 h-12 rounded-sm overflow-hidden'>
                        <img src={apple} alt='apple' className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};
