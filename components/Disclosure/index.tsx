import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';

const Fact = (props: { open: boolean, question: string | ReactNode, answer: string | ReactNode }) => {
    return (
        <Disclosure as="div">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg !bg-blue-500/40 px-4 py-2 text-left text-sm font-medium text-blue-900 dark:text-blue-100 hover:!bg-blue-800/40 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{props.question}</span>
                        <svg
                            className={`h-6 w-6 transition-all ease-in-out duration-150 ${open ? 'rotate-180 transform' : ''}`}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                        </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {props.answer}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export { Fact };