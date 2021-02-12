#!/usr/bin/env node

import yargs from "yargs";
import {CMD_ENDPOINT, CMD_CONFIG} from "./cli/cli-cmds";
import parseCliArgs from "./cli/lib/helpers/parse-cli-args";
import cmdDispatcher from "./cli/lib/helpers/cmd-dispatcher";

const argv = yargs
    .command(CMD_ENDPOINT, 'Create endpoint definition file')
    .command(CMD_CONFIG, 'Create docapi configuration json file')
    .help().argv;

const commandInfo = parseCliArgs(argv);

cmdDispatcher.dispatch(commandInfo).catch(err => {
  console.error(err);
});
