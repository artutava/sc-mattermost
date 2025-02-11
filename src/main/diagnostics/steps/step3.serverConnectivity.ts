// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ElectronLog} from 'electron-log';
import {DiagnosticStepResponse} from 'types/diagnostics';

import ServerManager from 'common/servers/serverManager';

import DiagnosticsStep from '../DiagnosticStep';

import {isOnline} from './internal/utils';

const stepName = 'Step-3';
const stepDescriptiveName = 'serverConnectivity';

const run = async (logger: ElectronLog): Promise<DiagnosticStepResponse> => {
    try {
        const servers = ServerManager.getAllServers();

        await Promise.all(servers.map(async (server) => {
            logger.debug('Pinging server: ', server.url);

            if (!server.name || !server.url) {
                throw new Error(`Invalid server configuration. Server Url: ${server.url}, server name: ${server.name}`);
            }

            const serverOnline = await isOnline(logger, `${server.url}/api/v4/system/ping`);

            if (!serverOnline) {
                throw new Error(`Server appears to be offline. Server url: ${server.url}`);
            }
        }));

        return {
            message: `${stepName} finished successfully`,
            succeeded: true,
            payload: servers,
        };
    } catch (error) {
        logger.warn(`Diagnostics ${stepName} Failure`, {error});

        return {
            message: `${stepName} failed`,
            succeeded: false,
            payload: error,
        };
    }
};

const Step3 = new DiagnosticsStep({
    name: `diagnostic-${stepName}: ${stepDescriptiveName}`,
    retries: 0,
    run,
});

export default Step3;
