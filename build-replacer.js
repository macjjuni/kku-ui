/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import {glob} from 'glob';

const replaceContents = (contents, searchValue, replaceValue) => {
    return contents.replace(new RegExp(searchValue, 'g'), replaceValue);
};

const replaceInFile = async (filePath) => {
    const contents = await fs.promises.readFile(filePath, 'utf8');
    const testIdRemovedContents = replaceContents(contents, ',?\\s*["\']data-testid["\']\\s*:\\s*["\']([^"\']*)["\']', '');
};


const replaceBuildContents = async () => {
    const absolutePath = path.resolve('lib/esm/src/components/**/K*.js');
    const ignorePattern = '**/*.interface.js';
    
    try {
        
        const files = glob.sync(absolutePath, {nodir: true, ignore: ignorePattern});
        console.log('Files found:', files);
        
        for (const file of files) {
            await replaceInFile(file);
        }
        console.log('Build Replacement Complete 🔥✨🎉');
    } catch (err) {
        console.error('Error finding files:', err);
    }
};

replaceBuildContents();
