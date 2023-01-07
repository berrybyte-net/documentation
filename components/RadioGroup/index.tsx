import { useState } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { Check } from '@components/icons/Check';

const plans = [
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
    },
    {
        name: 'Business',
        ram: '16GB',
        cpus: '8 CPUs',
        disk: '512 GB SSD disk',
    },
    {
        name: 'Enterprise',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
    },
];

const RadioGroup = (): JSX.Element => {
    const [selected, setSelected] = useState(plans[0]);

    return (
        <div className="w-full px-4 py-16">
            <div className="mx-auto w-full max-w-md">
                <HeadlessRadioGroup value={selected} onChange={setSelected}>
                    <HeadlessRadioGroup.Label className="sr-only">Server size</HeadlessRadioGroup.Label>
                    <div className="space-y-2">
                        {plans.map((plan) => (
                            <HeadlessRadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
                                    ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <HeadlessRadioGroup.Label
                                                        as="p"
                                                        className={`font-medium ${
                                                            checked ? 'text-white' : 'text-gray-900'
                                                        }`}
                                                    >
                                                        {plan.name}
                                                    </HeadlessRadioGroup.Label>
                                                    <HeadlessRadioGroup.Description
                                                        as="span"
                                                        className={`inline ${
                                                            checked ? 'text-sky-100' : 'text-gray-500'
                                                        }`}
                                                    >
                                                        <span>
                                                          {plan.ram}/{plan.cpus}
                                                        </span>{' '}
                                                        <span aria-hidden="true">&middot;</span>{' '}
                                                        <span>{plan.disk}</span>
                                                    </HeadlessRadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <Check className="h-6 w-6"/>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </HeadlessRadioGroup.Option>
                        ))}
                    </div>
                </HeadlessRadioGroup>
            </div>
        </div>
    );
}

export { RadioGroup };
