
import Button from '../atoms/Button';

const BenifitsCards = ( { item, index } ) => {
    return (
        <div className='flex flex-col p-8 gap-8 lg:p-10 2xl:p-12 lg:gap-10 2xl:gap-12 bg-absolute-white rounded-[10px] 2xl:rounded-xl w-full  lg:max-w-[calc((100%-40px)/3)] justify-between'>
            <h1 className='text-right text-5xl  font-bold text-gray-15 tracking-normal'>0{index}</h1>
            <div className='flex flex-col gap-2 2xl:gap-3'>
                <h2 className='text-left text-xl 2xl:text-2xl font-semibold text-gray-20'>
                    {item.title}</h2>
                <p className='text-left text-sm  lg:text-base 2xl:text-lg font-normal text-gray-30'>{item.description}</p>
            </div>
            <div className='flex justify-end '>
                <Button variation='icon' size='small' />
            </div>
        </div>
    );
};

export default BenifitsCards;
