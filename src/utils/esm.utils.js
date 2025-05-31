import {dirname} from 'path';
import {fileURLToPath} from 'url';
import * as path from 'node:path';

function currentFilePath(metaUrl) {
    return fileURLToPath(metaUrl);
}

function currentDirPath(metaUrl) {
    return dirname(currentFilePath(metaUrl));
}

function serverRootPath(...segments) {
    return path.join(process.cwd(), ...segments);
}

function publicPath(...segments) {
    return path.join(process.cwd(), 'public', ...segments);

}

export {currentFilePath, currentDirPath, serverRootPath, publicPath}