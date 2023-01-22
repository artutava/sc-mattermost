// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useState, useEffect, useMemo} from 'react';
import {useIntl, FormattedMessage} from 'react-intl';
import classNames from 'classnames';

import bullseye from 'renderer/assets/svg/bullseye.svg';
import channels from 'renderer/assets/svg/channels.svg';
import chat2 from 'renderer/assets/svg/chat2.svg';
import clipboard from 'renderer/assets/svg/clipboard.svg';

import Carousel from 'renderer/components/Carousel';
import Header from 'renderer/components/Header';
import LoadingBackground from 'renderer/components/LoadingScreen/LoadingBackground';

import {MODAL_TRANSITION_TIMEOUT} from 'common/utils/constants';

import WelcomeScreenSlide from './WelcomeScreenSlide';

import 'renderer/css/components/Button.scss';
import 'renderer/css/components/WelcomeScreen.scss';
import 'renderer/css/components/LoadingScreen.css';

type WelcomeScreenProps = {
    darkMode?: boolean;
    onGetStarted?: () => void;
};

function WelcomeScreen({
    darkMode = false,
    onGetStarted = () => null,
}: WelcomeScreenProps) {
    const {formatMessage} = useIntl();

    const [transition, setTransition] = useState<'outToLeft'>();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    const slides = useMemo(() => [
        {
            key: 'welcome',
            title: formatMessage({id: 'renderer.components.welcomeScreen.slides.welcome.title', defaultMessage: 'Olá'}),
            subtitle: formatMessage({
                id: 'renderer.components.welcomeScreen.slides.welcome.subtitle',
                defaultMessage: 'Worskpace é o principal canal onde os colaboradores da SirCruX Studios se comunicam e trocam experiências',
            }),
            image: (
                <img
                    src={chat2}
                    draggable={false}
                />
            ),
            main: true,
        },
        {
            key: 'channels',
            title: formatMessage({id: 'renderer.components.welcomeScreen.slides.channels.title', defaultMessage: 'Canais'}),
            subtitle: (
                <FormattedMessage
                    id='renderer.components.welcomeScreen.slides.channels.subtitle'
                    defaultMessage='A comunicação do nosso time se encontra aqui'
                    values={{
                        br: (x: React.ReactNode) => (<><br/>{x}</>),
                    }}
                />
            ),
            image: (
                <img
                    src={channels}
                    draggable={false}
                />
            ),
        },
        {
            key: 'playbooks',
            title: formatMessage({id: 'renderer.components.welcomeScreen.slides.playbooks.title', defaultMessage: 'Notion'}),
            subtitle: formatMessage({
                id: 'renderer.components.welcomeScreen.slides.palybooks.subtitle',
                defaultMessage: 'Notion é a ferramenta utilizada para gerenciar tasks, roadmaps e para mapear o conhecimento interno da SirCruX.',
            }),
            image: (
                <img
                    src={clipboard}
                    draggable={false}
                />
            ),
        },
        {
            key: 'boards',
            title: formatMessage({id: 'renderer.components.welcomeScreen.slides.boards.title', defaultMessage: 'Drive'}),
            subtitle: formatMessage({
                id: 'renderer.components.welcomeScreen.slides.boards.subtitle',
                defaultMessage: 'O Google Drive é onde os arquivos de projetos colaborativos são compartilhados e versionados',
            }),
            image: (
                <img
                    src={bullseye}
                    draggable={false}
                />
            ),
        },
    ], []);

    const handleOnGetStartedClick = () => {
        setTransition('outToLeft');

        setTimeout(() => {
            onGetStarted();
        }, MODAL_TRANSITION_TIMEOUT);
    };

    return (
        <div
            className={classNames(
                'LoadingScreen',
                {'LoadingScreen--darkMode': darkMode},
                'WelcomeScreen',
            )}
        >
            <LoadingBackground/>
            <Header darkMode={darkMode}/>
            {showContent && (
                <div className={classNames('WelcomeScreen__body', transition)}>
                    <div className='WelcomeScreen__content'>
                        <Carousel
                            slides={slides.map(({key, title, subtitle, image, main}) => ({
                                key,
                                content: (
                                    <WelcomeScreenSlide
                                        key={key}
                                        title={title}
                                        subtitle={subtitle}
                                        image={image}
                                        isMain={main}
                                        darkMode={darkMode}
                                    />
                                ),
                            }))}
                            darkMode={darkMode}
                        />
                        <button
                            id='getStartedWelcomeScreen'
                            className={classNames(
                                'WelcomeScreen__button',
                                'primary-button primary-medium-button',
                                {'primary-button-inverted': darkMode},
                            )}
                            onClick={handleOnGetStartedClick}
                        >
                            {formatMessage({id: 'renderer.components.welcomeScreen.button.getStarted', defaultMessage: 'Comece agora'})}
                        </button>
                    </div>
                </div>
            )}
            <div className='WelcomeScreen__footer'/>
        </div>
    );
}

export default WelcomeScreen;
