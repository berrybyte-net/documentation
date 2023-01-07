import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: <span className="font-bold text-2xl">Berry<span className="text-lime-400">Byte</span> Docs</span>,
    project: {
        link: 'https://github.com/berrybyte-net/docs',
    },
    chat: {
        link: 'https://discord.gg/Wc9wMZxQ2D',
    },
    docsRepositoryBase: 'https://github.com/berrybyte-net/docs',
    footer: {
        text: '© 2022 BerryByte Limited and contributors. Built with lots of coffee and love 💖',
    },
    sidebar: {
        defaultMenuCollapseLevel: 0
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – BerryByte Docs',
        };
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="BerryByte Docs"/>
            <meta property="og:description" content="Public community-written documentation for all game/virtual server related topics."/>
        </>
    ),
    primaryHue: 332,
};


export default config;
